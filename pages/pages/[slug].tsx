import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { fetchPages } from '../../lib/pages'; // Assuming you already have a fetchPages function
import Image from 'next/image';

// Define the type for a single page
interface Page {
  id: string; // or number depending on your API response
  slug: string;
  title: string;
  content: string;
  media: string;  // Assuming media is a URL string, adjust if necessary
  author: string;
  published_at: string; // Ensure this is a valid date string or Date object
}

const PageShow = () => {
  const [page, setPage] = useState<Page | null>(null); // Use Page type or null for initial state
  const router = useRouter(); // Hook to get the router object
  const { slug } = router.query; // Extract slug from the URL

  useEffect(() => {
    if (slug) {
      const getPage = async () => {
        const pagesData = await fetchPages(); // Fetch all pages
        const selectedPage = pagesData.find((page: Page) => page.slug === slug); // Find page by slug
        setPage(selectedPage || null); // Ensure to handle the case if the page is not found
      };

      getPage();
    }
  }, [slug]); // Run the effect when the slug changes

  if (!page) return <div>Loading...</div>; // Show a loading state while the page is being fetched

  // Function to render media (image or video)
  const renderMedia = (media: string) => {
    if (!media) return null;

    // Check if the media is for a video or image (using the URL extension as a basic check)
    const isVideo = media.endsWith('.mp4') || media.includes('video');
    const isImage = media.endsWith('.jpg') || media.endsWith('.jpeg') || media.endsWith('.png') || media.endsWith('.gif');

    const mediaClass = "w-full h-auto object-cover rounded mb-4 max-w-full max-h-[200px]"; // Fixed height for media

    if (isVideo) {
      // Show a placeholder image or thumbnail for video
      return <Image src={media} alt="Video Thumbnail" className={mediaClass} />;
    } else if (isImage) {
      // Show the actual image if it's an image file
      return <Image src={media} alt="Media" className={mediaClass} />;
    }
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Render media (image or video) */}
      <div className="mb-6">
        {renderMedia(page.media)} {/* Display media based on the media URL */}
      </div>

      <h1 className="text-3xl font-bold mb-6">{page.title}</h1>
      <div className="text-sm text-gray-500 mb-2">
        Author: {page.author} | Published on: {new Date(page.published_at).toLocaleDateString()}
      </div>
      <div className="wysiwyg-content">
        {/* Render content with WYSIWYG */}
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </div>
  );
};

export default PageShow;
