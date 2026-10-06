const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function postJSON(path, body) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error('We could not reach our server. Check your connection and try again.');
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
  return data;
}
