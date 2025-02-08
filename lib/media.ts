// lib/media.ts

export const fetchMedia = async () => {
    try {
      const response = await fetch('https://cms-headless-production.up.railway.app/api/media');
      if (!response.ok) {
        throw new Error('Failed to fetch media');
      }
      const data = await response.json();
      return data.data;  // Assuming the API returns a `data` field
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  