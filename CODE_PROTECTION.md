# 🔒 HASENE Arabic Game - Kod Koruma Rehberi

## ⚠️ ÖNEMLİ UYARILAR

### 🚨 Bu Dosyaları KESİNLİKLE Değiştirmeyin:
- `script.js` - Ana oyun mantığı (Samsung M33 optimizasyonlu)
- `index.html` - Temizlenmiş UI (test kodları kaldırıldı)
- `style.css` - Stiller ve PWA gizleme kuralları

### ✅ Güvenli Değişiklik Alanları:
- `sounds/` klasöründeki ses dosyaları
- `fonts/` klasöründeki font dosyaları
- JSON veri dosyaları (`data.json`, `ayetoku.json`, vb.)

## 🛡️ Koruma Önlemleri

### 1. EditorConfig Kuralları:
- Otomatik kod formatlaması aktif
- Tab/Space tutarlılığı zorunlu
- Satır sonu karakterleri sabit

### 2. JSConfig Kontrolleri:
- Tip güvenliği aktif
- Kullanılmayan kod uyarıları
- Sıkı hata kontrolü

### 3. Git Hook'lar:
- Push öncesi syntax kontrol
- Commit öncesi format kontrol

## 🚫 Yapılmaması Gerekenler:

❌ `console.log` eklemek (UI'da görünür)
❌ Test fonksiyonları eklemek
❌ Global window değişkenleri tanımlamak
❌ Try-catch blokları değiştirmek
❌ Event listener'ları değiştirmek

## ✅ Güvenli Değişiklikler:

✅ CSS stil değişiklikleri
✅ Ses dosyası değişimi
✅ JSON veri güncelleme
✅ Font değişimi
✅ Renk şeması güncelleme

## 🔧 Acil Durum Prosedürü:

Eğer kod bozulursa:
1. `git status` ile değişiklikleri kontrol et
2. `git restore .` ile geri al
3. `git log --oneline` ile son commit'i bul
4. `git reset --hard [commit-hash]` ile geri dön

## 📋 Kontrol Listesi:

- [ ] EditorConfig aktif
- [ ] JSConfig kontrolleri geçiyor
- [ ] Console.log'lar production'da gizli
- [ ] Test kodları temizlendi
- [ ] Samsung M33 optimizasyonları korundu
- [ ] PWA install butonları gizli
- [ ] Ses sistemi çalışıyor

## 🏷️ Versiyonlama:

Son Güvenli Versiyon: `b1b1569` - "FINAL MOBILE FIX: Font loading Samsung M33"
Temizleme Tarihi: November 1, 2025
Status: 🔒 LOCKED & PROTECTED