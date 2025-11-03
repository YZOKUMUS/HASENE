# Arapça Öğrenme Oyunu - 6 Mod Dökümantasyonu

## 📚 Genel Bakış
Bu uygulama 6 farklı oyun moduyla Arapça öğrenmeyi destekler. Tüm kodlar tek bir HTML dosyasında (`index.html`) bulunur ve Android cihazlarda çalışacak şekilde optimize edilmiştir.

## 🎮 Oyun Modları

### 1️⃣ Kelime Çevir
**Veri Kaynağı:** `kelimebul.json` (118,698 kelime)

**Nasıl Çalışır:**
- Ekranda bir Arapça kelime gösterilir
- 4 Türkçe anlam seçeneği sunulur (A, B, C, D)
- Kullanıcı doğru anlamı seçer
- Zorluk seviyeleri (Kolay, Orta, Zor, Uzman) ile özelleştirilebilir
- 4 farklı oyun modu: Klasik, Hızlı, 3 Can, Zorluk

**Özellikler:**
- Her kelime için zorluk puanı (1-15)
- Sure bilgisi gösterimi
- İpucu sistemi (yanlış cevap kapatma)
- Ses dosyası desteği

---

### 2️⃣ Dinle ve Bul
**Veri Kaynağı:** `kelimebul.json`

**Nasıl Çalışır:**
- Otomatik olarak kelimenin sesi çalınır
- Ekranda 4 Arapça kelime seçeneği gösterilir
- Kullanıcı duyduğu kelimeyi bulur
- "🔊 Tekrar Dinle" butonu ile ses tekrarlanabilir

**Özellikler:**
- Ses tanıma yeteneği geliştirir
- Otomatik ses çalma
- Manuel ses tekrar butonu
- Puan: zorluk × 2

---

### 3️⃣ Boşluk Doldur
**Veri Kaynağı:** `ayetoku.json` (49,890 ayet)

**Nasıl Çalışır:**
- Rastgele bir ayet seçilir
- Ayetteki bir kelime `______` ile gizlenir
- 4 kelime seçeneği sunulur
- Kullanıcı boşluğa gelecek kelimeyi bulur
- Doğru/yanlış cevap sonrası tam ayet gösterilir

**Özellikler:**
- Sure adı gösterimi
- Ayet ses dosyası dinleme
- Bağlam içinde kelime öğrenme
- Puan: +10 doğru cevap

---

### 4️⃣ Dua Et
**Veri Kaynağı:** `duaet.json` (316 Kuran duası)

**Nasıl Çalışır:**
- Kuran'dan dualar listelenir
- Her dua için:
  - Arapça metin (`dua`)
  - Türkçe çeviri (`tercume`)
  - Ayet bilgisi (`ayet`)
  - Ses dosyası (`ses_url`)
- İleri/Geri butonları ile gezinme

**Özellikler:**
- Ses başlangıç zamanı (`start`) desteği
- Sure/ayet referansı
- 316 dua içeriği

---

### 5️⃣ Ayet Oku
**Veri Kaynağı:** `ayetoku.json`

**Nasıl Çalışır:**
- Kuran ayetleri sırayla okunur
- Her ayet için:
  - Arapça metin (`ayet_metni`)
  - Türkçe meal (`meal`)
  - Sure adı (`sure_adı`)
  - Ses dosyası (`ayet_ses_dosyasi`)
- İleri/Geri butonları ile gezinme

**Özellikler:**
- 49,890 tam ayet
- Tanzil.net ses dosyaları
- Sure ve ayet numarası gösterimi

---

### 6️⃣ Hadis Oku
**Veri Kaynağı:** `hadisoku.json` (53,750 hadis)

**Nasıl Çalışır:**
- Buhari, Müslim, Tirmizi hadisleri
- Her hadis için:
  - Kategori/Bölüm (`section`, `chapterName`)
  - Ravi bilgisi (`header`)
  - Hadis metni (`text`)
  - Kaynak referansı (`refno`)
- İleri/Geri butonları ile gezinme

**Özellikler:**
- Kategoriye göre renkli etiketler
- 53,750 hadis içeriği
- Referans bilgisi

---

## 🎯 Özelleştirme

### CONFIG Objesi (Satır ~467-536)
Tüm oyun ayarları `CONFIG` objesinde toplanmıştır:

```javascript
const CONFIG = {
    gameModes: {
        classic: {
            name: 'Klasik',
            lives: 0,
            timeLimit: 0,
            questionsPerLevel: 10,
            showHint: true
        }
        // ... diğer modlar
    },
    difficultyLevels: {
        easy: {
            name: 'Kolay',
            minDiff: 1,
            maxDiff: 5,
            pointsMultiplier: 1
        }
        // ... diğer seviyeler
    }
};
```

### Stil Değişiklikleri
Tüm CSS `<style>` tagı içinde (Satır ~50-450):
- Renkler: `.container` gradient
- Butonlar: `.btn`, `.option`, `.mode-btn`
- Arapça font: `font-family: 'Amiri Quran', 'Scheherazade New'`

### Fonksiyon Değişiklikleri
Ana fonksiyonlar:
- `loadData()`: JSON dosyalarını yükler
- `loadQuestion()`: Kelime Çevir soruları
- `loadDinleQuestion()`: Dinle ve Bul soruları
- `loadBoslukQuestion()`: Boşluk Doldur soruları
- `showDua()`: Dua gösterimi
- `showAyet()`: Ayet gösterimi
- `showHadis()`: Hadis gösterimi

---

## 📊 JSON Veri Yapıları

### kelimebul.json
```json
{
  "id": "82:8:6",
  "sure_adi": "İnfitâr",
  "kelime": "رَكَّبَكَ",
  "anlam": "seni terkib etti",
  "ses_dosyasi": "https://audios.quranwbw.com/...",
  "difficulty": 9
}
```

### ayetoku.json
```json
{
  "ayet_kimligi": "1:1:1",
  "sure_adı": "Fâtiha",
  "ayet_metni": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "meal": "Rahman ve Rahim olan Allah'ın adıyla:",
  "ayet_ses_dosyasi": "https://tanzil.net/res/audio/afasy/001001.mp3"
}
```

### duaet.json
```json
{
  "ayet": "2:127",
  "dua": "رَبَّنَا تَقَبَّلۡ مِنَّآ",
  "tercume": "Rabbimiz! Yaptığımızı kabul buyur",
  "ses_url": "https://everyayah.com/...",
  "start": 6.95
}
```

### hadisoku.json
```json
{
  "section": "İMAN VE İSLAM HAKKINDA",
  "chapterName": "İman ve İslam'ın Fazileti",
  "book": "buharimüslimtirmizi",
  "header": "Ubade İbnus-Samit",
  "text": "Hz. Peygamber...",
  "refno": "Buhari, Enbiya 47",
  "id": "1"
}
```

---

## 🔧 Teknik Detaylar

### Tek Dosya Mimarisi
- **Dosya:** `index.html` (~1,800 satır)
- **Yapı:** HTML + CSS + JavaScript (embedded)
- **Avantaj:** Android uyumluluğu, kolay dağıtım

### Arapça Font
```css
font-family: 'Amiri Quran', 'Scheherazade New', 'Traditional Arabic', serif;
```
- Google Fonts CDN üzerinden yüklenir
- Uthmani Hafs hattı kullanır

### Responsive Tasarım
- Maksimum genişlik: 600px
- Touch-friendly butonlar
- Mobil optimize gradient arkaplan

### Ses Desteği
```javascript
const audio = new Audio(url);
audio.play().catch(err => console.error('Ses hatası:', err));
```

---

## 🚀 Kullanım

### Dosyalar
1. `index.html` (ana uygulama)
2. `kelimebul.json` (118,698 kelime)
3. `ayetoku.json` (49,890 ayet)
4. `duaet.json` (316 dua)
5. `hadisoku.json` (53,750 hadis)

### Çalıştırma
1. Tüm dosyaları aynı klasöre koyun
2. `index.html` dosyasını tarayıcıda açın
3. Android cihazda test edin

### Değişiklik Yapma
1. **Renk değiştirme:** Satır ~50-100 CSS
2. **Oyun modu ekleme:** Satır ~467 CONFIG objesi
3. **Fonksiyon değiştirme:** Satır ~1000+ JavaScript fonksiyonları

---

## ✅ Tamamlanan Özellikler
✅ 6 farklı oyun modu
✅ 4 zorluk seviyesi
✅ JSON veri yükleme
✅ Uthmani Hafs font
✅ Ses dosyası desteği
✅ Responsive tasarım
✅ Touch-optimized UI
✅ Tek dosya yapısı

## 📝 Notlar
- Tüm Arapça metinler Uthmani Hafs hattıyla gösterilir
- Ses dosyaları internet üzerinden yüklenir (internet gerekli)
- CONFIG objesi değiştirilerek oyun kolayca özelleştirilebilir
- Kodlar basit ve anlaşılır şekilde yazılmıştır
