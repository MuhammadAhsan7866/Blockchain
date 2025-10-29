// pages/api/instagram-download.js

// Function to fetch Instagram metadata from public endpoints
async function fetchInstagramMetadata(url) {
  try {
    // Extract video ID from URL
    const videoId = url.match(/\/reel\/([^\/\?]+)/)?.[1] || url.match(/\/p\/([^\/\?]+)/)?.[1];
    if (!videoId) return null;

    // For now, return mock data to test the frontend
    // In production, you would implement actual Instagram metadata fetching
    return {
      title: `Instagram Reel ${videoId}`,
      description: `This is a sample Instagram Reel with ID: ${videoId}`,
      uploadDate: new Date().toISOString(),
      likes: Math.floor(Math.random() * 10000) + 100 // Random likes for demo
    };

    /* 
    // Uncomment this section for actual Instagram metadata fetching
    const metadataUrl = `https://www.instagram.com/p/${videoId}/`;
    
    const response = await fetch(metadataUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) return null;

    const html = await response.text();
    
    // Extract JSON data from the HTML
    const jsonMatch = html.match(/window\._sharedData\s*=\s*({.+?});/);
    if (!jsonMatch) return null;

    const sharedData = JSON.parse(jsonMatch[1]);
    const postData = sharedData?.entry_data?.PostPage?.[0]?.graphql?.shortcode_media;
    
    if (!postData) return null;

    return {
      title: postData.edge_media_to_caption?.edges?.[0]?.node?.text || `Instagram Reel ${videoId}`,
      description: postData.edge_media_to_caption?.edges?.[0]?.node?.text || null,
      uploadDate: postData.taken_at_timestamp ? new Date(postData.taken_at_timestamp * 1000).toISOString() : null,
      likes: postData.edge_media_preview_like?.count || postData.edge_liked_by?.count || null
    };
    */
  } catch (error) {
    console.log('Error fetching Instagram metadata:', error);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  if (!url.includes('instagram.com/reel')) {
    return res.status(400).json({ error: 'Please enter a valid Instagram Reel URL.' });
  }

  try {
    const apiUrl = `https://instagram-download-api-usman.vercel.app/igdl?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to connect to Instagram API');
    }

    const data = await response.json();
    
    // Debug: Log the actual API response to see what data is available
    console.log('Instagram API Response:', JSON.stringify(data, null, 2));
    
    if (data.url?.status === true && data.url?.data && data.url.data.length > 0) {
      const downloadUrl = data.url.data[0].url.replace(/\s+/g, '');
      
      // Fetch metadata from Instagram's public endpoints
      const metadata = await fetchInstagramMetadata(url);
      
      // Fallback metadata if scraping fails
      const fallbackMetadata = {
        title: 'Instagram Reel',
        uploadDate: null,
        likes: null,
        description: null
      };

      // Use scraped metadata or fallback
      const finalMetadata = metadata || fallbackMetadata;
      
      // If no title from scraping, generate one from URL
      if (!finalMetadata.title || finalMetadata.title === 'Instagram Reel') {
        const videoId = url.match(/\/reel\/([^\/\?]+)/)?.[1] || url.match(/\/p\/([^\/\?]+)/)?.[1];
        if (videoId) {
          finalMetadata.title = `Instagram Reel ${videoId}`;
        }
      }
      
      // Extract thumbnail from video URL or use a default approach
      let thumbnailUrl = null;
      try {
        // For Instagram videos, we can try multiple approaches to get thumbnail
        const videoId = url.match(/\/reel\/([^\/\?]+)/)?.[1] || url.match(/\/p\/([^\/\?]+)/)?.[1];
        if (videoId) {
          // Try different Instagram thumbnail patterns
          const thumbnailPatterns = [
            `https://instagram.com/p/${videoId}/media/?size=m`,
            `https://instagram.com/p/${videoId}/media/?size=l`,
            `https://scontent.cdninstagram.com/v/t51.2885-15/e35/${videoId}_n.jpg`,
            `https://instagram.com/p/${videoId}/media/`
          ];
          
          // Use the first pattern for now, but we could test each one
          thumbnailUrl = thumbnailPatterns[0];
        }
        
        // If no video ID found, try to extract from the download URL itself
        if (!thumbnailUrl && downloadUrl) {
          // Some video URLs might contain thumbnail info
          const videoUrlMatch = downloadUrl.match(/\/v\/([^\/\?]+)/);
          if (videoUrlMatch) {
            thumbnailUrl = `https://scontent.cdninstagram.com/v/t51.2885-15/e35/${videoUrlMatch[1]}_n.jpg`;
          }
        }
      } catch (error) {
        console.log('Could not extract thumbnail:', error);
      }

      return res.status(200).json({
        success: true,
        data: {
          title: finalMetadata.title,
          download_url: downloadUrl,
          source: url,
          thumbnail_url: thumbnailUrl,
          video_url: downloadUrl, // For preview purposes
          upload_date: finalMetadata.uploadDate,
          likes: finalMetadata.likes,
          description: finalMetadata.description
        }
      });
    } else {
      return res.status(400).json({ error: 'No video found. Please check the link.' });
    }
  } catch (error) {
    console.error('Instagram download error:', error);
    return res.status(500).json({ error: 'Failed to connect to Instagram API. Try again.' });
  }
}
