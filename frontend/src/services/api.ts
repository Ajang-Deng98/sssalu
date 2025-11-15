const API_BASE = '/api';

export interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

export interface News {
  title: string;
  content: string;
  image: string;
  created_at: string;
}

export interface Gallery {
  title: string;
  image: string;
  description: string;
}

export const api = {
  getEvents: async (): Promise<Event[]> => {
    const response = await fetch(`${API_BASE}/events/`);
    return response.json();
  },

  getNews: async (): Promise<News[]> => {
    const response = await fetch(`${API_BASE}/news/`);
    return response.json();
  },

  getGallery: async (): Promise<Gallery[]> => {
    const response = await fetch(`${API_BASE}/gallery/`);
    return response.json();
  },

  submitContact: async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const response = await fetch(`${API_BASE}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};