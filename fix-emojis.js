const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// Add emojis to difficulty buttons
content = content.replace(/<strong>\s*Kolay<\/strong>/g, '<strong>😊 Kolay</strong>');
content = content.replace(/<strong>\s*Orta<\/strong>/g, '<strong>😐 Orta</strong>');
content = content.replace(/<strong>\s*Zor<\/strong>/g, '<strong>😤 Zor</strong>');
content = content.replace(/<strong>\s*Karışık<\/strong>/g, '<strong>🎲 Karışık</strong>');

// Fix the menu icons (remove the literal `r`n strings)
content = content.replace(/<\/div>`r`n\s+<div class="menu-title"/g, '</div>\n                <div class="menu-title"');

// Add emojis to menu icons
content = content.replace(/(<div class="menu-icon" style="font-size: 1\.8em; margin-bottom: 3px;">)<\/div>(\s+<div class="menu-title" style="font-size: 1em;">Kelime Çevir<\/div>)/g, '$1📚</div>$2');
content = content.replace(/(<div class="menu-icon" style="font-size: 1\.8em; margin-bottom: 3px;">)<\/div>(\s+<div class="menu-title" style="font-size: 1em;">Dinle ve Bul<\/div>)/g, '$1🎧</div>$2');
content = content.replace(/(<div class="menu-icon" style="font-size: 1\.8em; margin-bottom: 3px;">)<\/div>(\s+<div class="menu-title" style="font-size: 1em;">Boşluk Doldur<\/div>)/g, '$1✍️</div>$2');
content = content.replace(/(<div class="menu-icon" style="font-size: 1\.8em; margin-bottom: 3px;">)<\/div>(\s+<div class="menu-title" style="font-size: 1em;">Dua Et ve Dinle<\/div>)/g, '$1🤲</div>$2');
content = content.replace(/(<div class="menu-icon" style="font-size: 1\.8em; margin-bottom: 3px;">)<\/div>(\s+<div class="menu-title" style="font-size: 1em;">Ayet Oku ve Dinle<\/div>)/g, '$1📖</div>$2');
content = content.replace(/(<div class="menu-icon" style="font-size: 1\.8em; margin-bottom: 3px;">)<\/div>(\s+<div class="menu-title" style="font-size: 1em;">Hadis Oku<\/div>)/g, '$1📜</div>$2');

fs.writeFileSync('index.html', content, 'utf8');
console.log('✅ Emojiler eklendi!');
