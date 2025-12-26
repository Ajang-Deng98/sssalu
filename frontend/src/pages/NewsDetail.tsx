import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  category: string;
  author_name: string;
  excerpt: string;
  image: string;
  is_featured: boolean;
  created_at: string;
}

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/news/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setArticle(data);
      } else {
        setError('Article not found');
      }
    } catch (error) {
      setError('Failed to load article');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <div>Loading article...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p>{error}</p>
        <Link to="/news" className="btn">Back to News</Link>
      </div>
    );
  }

  return (
    <div>
      <section style={{ paddingTop: '100px', paddingBottom: '50px' }}>
        <div className="container">
          <Link to="/news" style={{ color: 'var(--primary)', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
            <i className="fas fa-arrow-left"></i> Back to News
          </Link>
          
          <article style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '30px' }}>
              <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '10px' }}>
                {article.category}
              </div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.2' }}>
                {article.title}
              </h1>
              <div style={{ display: 'flex', gap: '20px', color: '#666', marginBottom: '30px' }}>
                <span><i className="fas fa-calendar-alt"></i> {new Date(article.created_at).toLocaleDateString()}</span>
                <span><i className="fas fa-user"></i> {article.author_name || 'SSSALU Team'}</span>
              </div>
            </div>

            {article.image && (
              <div style={{ marginBottom: '30px' }}>
                <img 
                  src={`http://localhost:8000${article.image}`}
                  alt={article.title}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                />
              </div>
            )}

            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '20px' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;