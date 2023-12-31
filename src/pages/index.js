import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Stars from '../components/Stars';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/getBlogPosts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleSubmit = async (title, body) => {
    try {
      const response = await fetch('/api/createBlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });
      const data = await response.json();
      console.log(data.message);
      setTitle('');
      setBody('');
      router.reload(); // Refresh the page
    } catch (error) {
      console.error('Error submitting blog post', error);
    }
  };


  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'underline',
    fontSize: '20px',
    textAlign: 'center',
  };

  const linkSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    width: '100%',
  };

  return (
    <div className="page-wrapper">
      <Stars />
      <h1 style={{ textAlign: 'center', color: '#FFFFFF' }}>Welcome to 2024's resolution space</h1>
      <div className="box-wrap" style={{ width: '40%', margin: '0 auto' }}>
        <div id="audio" className="box open-left">
          <div style={linkSectionStyle}>
            <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
              <input type="text" placeholder="Type here..." style={{ width: '100%', padding: '10px' }} onChange={(e) => setBody(e.target.value)} />
            </div>
            <a className="button" href="#" data-toggle="audio" onClick={() => handleSubmit(title, body)}>Post</a>    
          </div>
        </div>
        {posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).reverse().map((post, index) => (
  <div id={`audio${index}`} className="box open-left" style={{ marginTop: '20px' }}>
    <div style={linkSectionStyle}>
      <Link href={`/blog/${index}`} style={linkStyle}>
        <ReactMarkdown children={post.body} /> {/* Replace with the actual property name for the post content */}
      </Link>
    </div>
  </div>
))}
      </div>
    </div>
  );
}