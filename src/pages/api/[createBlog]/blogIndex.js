import Link from 'next/link';

export default function BlogIndex({ posts }) {
    return (
        <div>
            <h1>Blog</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <Link href={`/blog/${index}`}>
                        <a>{post.title}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export async function getStaticProps() {
    const fullPath = path.join(process.cwd(), 'blogPosts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const posts = JSON.parse(fileContents);

    return {
        props: { posts },
    };
}