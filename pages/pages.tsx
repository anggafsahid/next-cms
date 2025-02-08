import { useEffect, useState } from 'react';
import { fetchPages } from '../lib/pages';
import Link from 'next/link'; // Import Link component
import Image from 'next/image';

// Define the type for a single page
interface Page {
  id: string; // or number depending on your API response
  slug: string;
  title: string;
  content: string;
  media: string;  // Assuming media is a URL string, adjust if necessary
}

const PagesList = () => {
  const [pages, setPages] = useState<Page[]>([]);  // Use Page[] instead of any[]

  useEffect(() => {
    const getPages = async () => {
      const pagesData = await fetchPages();
      setPages(pagesData);
    };
    
    getPages();
  }, []);

  // Function to strip HTML tags from content
  const stripHtmlTags = (htmlContent: string) => {
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    return doc.body.textContent || "";
  };

  // Function to render media (image or video)
  const renderMedia = (media: string) => {
    if (!media) return null;

    const isVideo = media.endsWith('.mp4') || media.includes('video');
    const isImage = media.endsWith('.jpg') || media.endsWith('.jpeg') || media.endsWith('.png') || media.endsWith('.gif');

    if (isVideo) {
      return <Image src="https://via.placeholder.com/300x300.png?text=Video+Thumbnail" alt="Video Thumbnail" className="w-full h-full object-cover rounded mb-4" />;
    } else if (isImage) {
      return <Image src={media} alt="Media" className="w-full h-full object-cover rounded mb-4" />;
    }
    return null;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Pages List</h1>
      <div className="flex flex-wrap gap-6">
        {pages.map((page) => (
          <div key={page.id} className="w-1/4 p-4 border rounded-lg shadow-lg bg-white hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out" style={{ width: 'calc(25% - 24px)' }}>
            <Link href={`/pages/${page.slug}`} passHref>
              <div className="w-full h-48 mb-4">
                {renderMedia(page.media)}
              </div>
              <h2 className="text-xl font-semibold mb-2">{page.title}</h2>
              <p className="text-gray-700">{stripHtmlTags(page.content).slice(0, 100)}...</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesList;
