import { useEffect, useState } from 'react';
import { fetchMedia } from '../lib/media';

// Define the type for a single media item
interface MediaItem {
  id: string; // or number depending on your API response
  file_name: string;
  file_path: string;
}

const MediaList = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);  // Use MediaItem[] instead of any[]

  useEffect(() => {
    const getMedia = async () => {
      const mediaData = await fetchMedia();
      setMedia(mediaData);
    };
    
    getMedia();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Media List</h1>
      <div className="grid grid-cols-3 gap-6">
        {media.map((item) => (  // TypeScript knows that 'item' is of type MediaItem now
          <div
            key={item.id}
            className="group relative border rounded-lg overflow-hidden bg-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={item.file_path}
              alt={item.file_name}
              className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">{item.file_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaList;
