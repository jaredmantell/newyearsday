import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Stars from '../components/Stars';

export default function Home() {
  const router = useRouter();

  const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'underline',
    fontSize: '20px',
    textAlign: 'center', // Align text to the center
  };

  const linkSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Align text to the center
    alignItems: 'center', // Align text to the center
    color: '#FFFFFF',
    width: '100%', // Take full width of the parent
  };

  return (
    <div className="page-wrapper">
      <Stars />
      <h1 style={{ textAlign: 'center', color: '#FFFFFF' }}>Welcome to 2024's resolution space</h1>
      <div class="box-wrap" style={{ width: '40%', margin: '0 auto' }}> {/* Reduce width to 40% */}
        <div id="audio" class="box open-left">
          <div style={linkSectionStyle}>
            <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
              <input type="text" placeholder="Type here..." style={{ width: '100%', padding: '10px' }} />
            </div>
            <a className="button" href="#" data-toggle="audio" onClick={() => router.push('/blog')}>Post</a>    
          </div>
        </div>
        <div id="audio2" class="box open-left" style={{ marginTop: '20px' }}>
          <div style={linkSectionStyle}>
            {/* Add content for the second box here */}
          </div>
        </div>
      </div>
    </div>
  );
}