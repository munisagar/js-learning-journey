import fs from 'fs/promises';

const filePath = 'example1.txt';

async function writeAndReadFile() {
    try {
        // Write the file first
        await fs.writeFile(filePath, 'Hello, Node.js!', 'utf8');
        console.log('File written successfully!');

        // Now read the file
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File contents:', data);
    } catch (err) {
        console.error('Error:', err);
    }
}

writeAndReadFile();
