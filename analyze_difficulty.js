// Zorluk dağılımını analiz et
const fs = require('fs');

// JSON dosyasını oku
const data = JSON.parse(fs.readFileSync('kelimebul.json', 'utf8'));

// Zorluk değerlerini topla
const difficulties = data.map(item => item.difficulty);

// İstatistikler
const min = Math.min(...difficulties);
const max = Math.max(...difficulties);
const total = difficulties.length;

console.log('=== ZORLUK DAĞILIMI ANALİZİ ===\n');
console.log(`Toplam Kelime: ${total}`);
console.log(`Min Zorluk: ${min}`);
console.log(`Max Zorluk: ${max}`);
console.log(`\n=== MEVCUT DAĞILIM ===`);

// Her zorluk seviyesinde kaç kelime var
const distribution = {};
for (let i = min; i <= max; i++) {
    distribution[i] = difficulties.filter(d => d === i).length;
}

for (let i = min; i <= max; i++) {
    const count = distribution[i];
    const percentage = ((count / total) * 100).toFixed(2);
    const bar = '█'.repeat(Math.floor(percentage / 2));
    console.log(`${i.toString().padStart(2)}: ${count.toString().padStart(5)} (${percentage.padStart(6)}%) ${bar}`);
}

// Eşit dağılım için öneriler
console.log(`\n=== EŞİT DAĞILIM ÖNERİSİ (3 SEVİYE) ===`);
const perLevel = Math.floor(total / 3);

// Kelimeleri zorluğa göre sırala
const sortedDifficulties = [...difficulties].sort((a, b) => a - b);

// Her seviyeye düşen zorluk aralığı
const kolay_end = sortedDifficulties[perLevel - 1];
const orta_end = sortedDifficulties[perLevel * 2 - 1];
const zor_end = max;

console.log(`\n😊 KOLAY: ${min}-${kolay_end} (${perLevel} kelime, ${((perLevel/total)*100).toFixed(1)}%)`);
console.log(`😐 ORTA:  ${kolay_end + 1}-${orta_end} (${perLevel} kelime, ${((perLevel/total)*100).toFixed(1)}%)`);
console.log(`😤 ZOR:   ${orta_end + 1}-${zor_end} (${total - perLevel * 2} kelime, ${(((total - perLevel * 2)/total)*100).toFixed(1)}%)`);

// CONFIG için kod önerisi
console.log(`\n=== CONFIG AYARLARI ===`);
console.log(`difficultyLevels: {
    kolay: {
        name: '😊 Kolay',
        minDiff: ${min},
        maxDiff: ${kolay_end},
        pointsMultiplier: 5
    },
    orta: {
        name: '😐 Orta',
        minDiff: ${kolay_end + 1},
        maxDiff: ${orta_end},
        pointsMultiplier: 10
    },
    zor: {
        name: '😤 Zor',
        minDiff: ${orta_end + 1},
        maxDiff: ${zor_end},
        pointsMultiplier: 15
    },
    karisik: {
        name: '🎲 Karışık',
        minDiff: ${min},
        maxDiff: ${max},
        pointsMultiplier: 10
    }
}`);
