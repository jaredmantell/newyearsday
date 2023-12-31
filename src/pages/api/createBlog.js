import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, body } = req.body;

        const filePath = path.join(process.cwd(), 'blogPosts.json');
        let posts = [];

        if (fs.existsSync(filePath)) {
            const fileData = fs.readFileSync(filePath);
            try {
                posts = JSON.parse(fileData.toString());
            } catch (error) {
                console.error('Error parsing JSON:', error);
                posts = [];
            }
        }

        // Add new post
        posts.push({ title, body });

        // Write new post to file
        try {
            fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
            console.log('Post saved:', { title, body });
        } catch (error) {
            console.error('Error writing file:', error);
        }

        res.status(200).json({ message: 'Post created.' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}