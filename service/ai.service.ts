const API_URL = 'http://localhost:3001/api/gemini';

export async function generateIdeas(topic: string) {
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