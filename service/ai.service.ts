const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/gemini';

export async function generateIdeas(topic: string) {
  console.log('Calling API:', API_URL);
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ topic }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(error.message || 'Failed to generate ideas');
  }

  return response.json();
}