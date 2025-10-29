// pages/api/facebook-download.js

// Function to fetch Facebook metadata from public endpoints
async function fetchFacebookMetadata(url) {
  try {
    // Extract video ID from URL
    const videoId = url.match(/\/videos\/(\d+)/)?.[1] || 
                   url.match(/\/watch\/\?v=([^&]+)/)?.[1] ||
                   url.match(/\/video\.php\?v=(\d+)/)?.[1];
    
    if (!videoId) return null;

    // For now, return mock data to test the frontend
    // In production, you would implement actual Facebook metadata fetching
    return {
      title: `Facebook Video ${videoId}`,
      description: `This is a sample Facebook Video with ID: ${videoId}`,
      uploadDate: new Date().toISOString(),
      likes: Math.floor(Math.random() * 5000) + 50 // Random likes for demo
    };

    /* 
    Uncomment this section for actual Facebook metadata fetching
    
    const metadataUrl = https://www.facebook.com/video.php?v= + videoId;
    const response = await fetch(metadataUrl, {
      headers: {
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
      }
    });
    if (!response.ok) return null;
    const html = await response.text();
    
    Extract metadata from HTML
    Facebook structure is more complex
    
    Try to extract title from meta tags
    const titleMatch = html.match(/title/i);
    const title = titleMatch ? titleMatch[1].replace(/Facebook/, '') : null;
    
    Try to extract description from meta tags
    const descMatch = html.match(/meta/);
    const description = descMatch ? descMatch[1] : null;

    return {
      title: title,
      description: description,
      uploadDate: null,
      likes: null
    };
    */
  } catch (error) {
    console.log('Error fetching Facebook metadata:', error);
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

  if (!url.includes('facebook.com') && !url.includes('fb.watch')) {
    return res.status(400).json({ error: 'Please enter a valid Facebook video URL.' });
  }

  try {
    const apiUrl = `https://facebook-download-api-usman.vercel.app/fb/reels?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to connect to Facebook API');
    }

    const data = await response.json();
    
    // Debug: Log the actual API response to see what data is available
    console.log('Facebook API Response:', JSON.stringify(data, null, 2));
    
    if (data.status === 200 && data.download_link) {
      const downloadUrl = data.download_link.replace(/\s+/g, '');
      
      // Fetch metadata from Facebook's public endpoints
      const metadata = await fetchFacebookMetadata(url);
      
      // Fallback metadata if scraping fails
      const fallbackMetadata = {
        title: 'Facebook Video',
        uploadDate: null,
        likes: null,
        description: null
      };

      // Use scraped metadata or fallback
      const finalMetadata = metadata || fallbackMetadata;
      
      // If no title from scraping, generate one from URL
      if (!finalMetadata.title || finalMetadata.title === 'Facebook Video') {
        const videoId = url.match(/\/videos\/(\d+)/)?.[1] || 
                       url.match(/\/watch\/\?v=([^&]+)/)?.[1] ||
                       url.match(/\/video\.php\?v=(\d+)/)?.[1];
        if (videoId) {
          finalMetadata.title = `Facebook Video ${videoId}`;
        }
      }
      
      // Extract thumbnail from video URL or use a default approach
      let thumbnailUrl = null;
      try {
        // For Facebook videos, we can try multiple approaches to get thumbnail
        const videoId = url.match(/\/videos\/(\d+)/)?.[1] || 
                       url.match(/\/watch\/\?v=([^&]+)/)?.[1] ||
                       url.match(/\/video\.php\?v=(\d+)/)?.[1];
        
        if (videoId) {
          // Try different Facebook thumbnail patterns
          const thumbnailPatterns = [
            `https://graph.facebook.com/${videoId}/picture?type=large`,
            `https://graph.facebook.com/${videoId}/picture?type=normal`,
            `https://scontent.xx.fbcdn.net/v/t15.5256-10/${videoId}_n.jpg`,
            `https://video.xx.fbcdn.net/v/t42.1790-2/${videoId}_n.jpg`
          ];
          
          // Use the first pattern for now
          thumbnailUrl = thumbnailPatterns[0];
        }
        
        // If no video ID found, try to extract from the download URL itself
        if (!thumbnailUrl && downloadUrl) {
          // Some video URLs might contain thumbnail info
          const videoUrlMatch = downloadUrl.match(/\/v\/([^\/\?]+)/);
          if (videoUrlMatch) {
            thumbnailUrl = `https://scontent.xx.fbcdn.net/v/t15.5256-10/${videoUrlMatch[1]}_n.jpg`;
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
          source: data.source || url,
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
    console.error('Facebook download error:', error);
    return res.status(500).json({ error: 'Failed to connect to Facebook API. Try again.' });
  }
}
