const http = require('http');
const fs = require('fs');
const path = require('path');

// Port ayarı
const PORT = 3000;

// Doğru ve güncel MIME tipleri
const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',

    // ✔ Doğru font MIME tipleri
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf'
};

// SERVER
const server = http.createServer((req, res) => {

    // URL normalize: saldırı engelle (../ gibi)
    let safeUrl = req.url === '/' ? '/index.html' : path.normalize(req.url);

    // Eğer path `..` içerirse hack denemesidir → index.html göster
    if (safeUrl.includes('..')) {
        safeUrl = '/index.html';
    }

    // Dosya tam yolu
    const filePath = path.join(__dirname, safeUrl);
    const extname = path.extname(filePath).toLowerCase();

    // İçerik tipi
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // JSON istekleri için CORS aç
    if (extname === '.json') {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    // Dosyayı oku
    fs.readFile(filePath, (error, content) => {
        if (error) {
            // 404
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Bulunamadı</h1>', 'utf-8');
            } 
            // 500
            else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`<h1>500 - Sunucu Hatası</h1><p>${error.code}</p>`, 'utf-8');
            }
        } 
        else {
            // TEXT dosyalar UTF-8 ile gönderilir
            const isText = ['.html', '.css', '.js', '.json', '.txt'].includes(extname);

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, isText ? 'utf-8' : undefined);
        }
    });
});

// Sunucuyu başlat
server.listen(PORT, () => {
    console.log(`🚀 Server çalışıyor: http://localhost:${PORT}/`);
    console.log(`📌 Ana Sayfa:      http://localhost:${PORT}/index.html`);
    console.log(`🔧 Ctrl + C ile durdurabilirsiniz.`);
});

