// lib/pages.ts

export const fetchPages = async () => {
    try {
      const response = await fetch('https://cms-headless-production.up.railway.app/api/pages');
      if (!response.ok) {
        throw new Error('Failed to fetch pages');
      }
      const data = await response.json();
      return data.data;  // Assuming the API returns a `data` field
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  