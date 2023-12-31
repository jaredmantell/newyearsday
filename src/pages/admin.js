import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const AdminPage = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
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
        } catch (error) {
            console.error('Error submitting blog post', error);
        }
    };

    return (
        <div>
            <h1>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter post title"
                        style={{ fontSize: '2rem' }} // Larger font size for title
                    />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        style={{ width: '50%', height: '400px' }}
                    />
                </div>
                <button type="submit">Submit Post</button>
            </form>
            <div>
                <h2>Preview</h2>
                <ReactMarkdown>{body}</ReactMarkdown>
            </div>
        </div>
    );
};

export default AdminPage;