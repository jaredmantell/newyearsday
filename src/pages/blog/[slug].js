import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

export default function BlogPost({ post }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh', minWidth: '100vw', textAlign: 'center' }}>
        <h1>{post.title}</h1>
            <div style={{ textAlign: 'justify', display: 'inline-block' }}>
                <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>
            <Link href="https://jaredmantell.com/blog#" style={{ display: 'block', marginTop: '2rem' }}>
                Back to Blog
            </Link>
        </div>
    );
}

export async function getStaticPaths() {
    const fullPath = path.join(process.cwd(), 'blogPosts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const posts = JSON.parse(fileContents);

    const paths = posts.map((post, index) => ({
        params: { slug: String(index) },
    }));

    return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
    const fullPath = path.join(process.cwd(), 'blogPosts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const posts = JSON.parse(fileContents);
    const post = posts[params.slug];

    return {
        props: {
            post,
        },
    };
}