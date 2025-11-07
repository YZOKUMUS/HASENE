# 🧪 BAŞARI & PUAN SİSTEMİ TEST KOMUTLARI

## 🎮 Browser Console'dan Kullanım

Oyunu tarayıcıda açın (F12 → Console), ardından aşağıdaki komutları kullanın:

---

## 📊 TESTKOMUTLARI

### 1. Genel Durum Kontrolü
```javascript
testSenkronizasyon()
```
**Ne yapar:**
- Tüm sistemleri kontrol eder
- Rozet, puan, seviye senkronizasyonunu doğrular
- Başarımları kontrol eder
- localStorage uyumunu kontrol eder
- Detaylı rapor gösterir

**Çıktı örneği:**
```
═══════════════════════════════════════
🔍 BAŞARI & PUAN SİSTEMİ SENKRONİZASYON TESTİ
═══════════════════════════════════════

📊 1. MEVCUT DURUM:
   totalPoints: 8500
   sessionScore: 450
   level: 5
   starPoints: 85
   badges: {"bronze":4,"silver":1,"gold":0,"diamond":0}

🏅 2. ROZET SİSTEMİ KONTROLÜ:
   Beklenen: {"bronze":4,"silver":1,"gold":0,"diamond":0}
   Mevcut: {"bronze":4,"silver":1,"gold":0,"diamond":0}
   Senkronizasyon: ✅ UYUMLU

... (devamı)

📊 ÖZET RAPOR:
Genel Durum: ✅ TÜM SİSTEMLER SENKRONİZE
```

---

### 2. Puan Ekleme Testi
```javascript
testAddPoints(100)  // 100 puan ekle
testAddPoints(500)  // 500 puan ekle
testAddPoints(2000) // 2000 puan ekle (1 Bronz rozet)
```
**Ne yapar:**
- Belirtilen puanı ekler
- addSessionPoints() fonksiyonunu kullanır
- Otomatik senkronizasyon kontrolü yapar

---

### 3. Hızlı Senaryo Testleri

#### Senaryo 1: Yeni Kullanıcı (0 → 2500 XP)
```javascript
testSenaryo1()
```
**Test eder:**
- İlk başarımlar (İlk Adım - 500 XP)
- İlk Bronz rozet (2000 XP)
- Seviye atlama (Level 1 → Level 2)

---

#### Senaryo 2: Combo Bonusu
```javascript
testSenaryo2()
```
**Test eder:**
- 3 doğru cevap art arda
- Combo bonusu (+5 XP) eklenmesi
- Günlük puana eklenmesi

---

#### Senaryo 3: Rozet Seviye Atlama
```javascript
testSenaryo3()
```
**Test eder:**
- 25000 XP → 26000 XP
- Altın rozet kazanılması
- Modal gösterilmesi

---

#### Senaryo 4: Sayfa Yenileme Simülasyonu
```javascript
testSenaryo4()
```
**Test eder:**
- Veri kaydetme
- Değişkenleri sıfırlama
- Verileri geri yükleme
- Senkronizasyonu kontrol etme

---

### 4. Seviye Atlama Testleri
```javascript
testLevel2()   // Level 2'ye atla (1000 XP)
testLevel3()   // Level 3'e atla (2500 XP)
testLevel5()   // Level 5'e atla (8500 XP)
testLevel10()  // Level 10'a atla (46000 XP)
```

---

### 5. Sıfırlama Komutları
```javascript
resetPoints()      // Sadece puanları sıfırla
resetAllStats()    // TÜM istatistikleri sıfırla (dikkatli!)
```

---

### 6. Debug Fonksiyonları
```javascript
debugStats()       // Temel istatistikleri göster
```
**Çıktı:**
```
🔧 DEBUG - Mevcut Oyun İstatistikleri:
Total Points: 8500
Star Points: 85
Level: 5
Session Score: 450
```

---

## 🔍 ÖRNEK KULLANIM AKIŞI

### Test 1: Sıfırdan Başlangıç
```javascript
// 1. Tüm verileri sıfırla
resetAllStats()

// 2. Senkronizasyonu kontrol et
testSenkronizasyon()

// 3. Puan ekle
testAddPoints(100)

// 4. Tekrar kontrol et
testSenkronizasyon()
```

---

### Test 2: Rozet Kazanma
```javascript
// 1. Bronz rozet için 2000 XP'ye çık
testAddPoints(2000)

// 2. Rozet kontrolü
testSenkronizasyon()

// 3. Gümüş rozet için 8500 XP'ye çık
testAddPoints(6500)

// 4. Rozet kontrolü
testSenkronizasyon()
```

---

### Test 3: Combo Sistemi
```javascript
// 1. Sıfırla
resetPoints()

// 2. 3 doğru cevap ver (combo tetikler)
testSenaryo2()

// 3. Kontrol et (toplam: 30 + 5 bonus = 35 XP olmalı)
testSenkronizasyon()
```

---

### Test 4: Veri Kalıcılığı
```javascript
// 1. Puan ekle
testAddPoints(5000)

// 2. Sayfa yenileme simülasyonu
testSenaryo4()

// 3. Verinin korunduğunu kontrol et
testSenkronizasyon()
```

---

## 🎯 BAŞARIM KONTROLÜ

### XP Tabanlı Başarımlar
```javascript
testSenkronizasyon()  // Başarımlar otomatik kontrol edilir
```

**Başarım listesi:**
- 500 XP → 🌱 İlk Adım
- 2,000 XP → 🥉 Bronz Yolcu (1 Bronz)
- 4,000 XP → ⚡ Hızlı Başlangıç
- 8,500 XP → 🥈 Gümüş Master (1 Gümüş)
- 17,000 XP → 💯 Çift Gümüş
- 25,500 XP → 🥇 Altın Master (1 Altın)
- 51,000 XP → 🔥 Çift Altın
- 85,000 XP → 💎 Elmas Master (1 Elmas)
- 170,000 XP → ✨ Efsane

---

## 🏅 ROZET HESAPLAMA

**Rozet formülleri:**
```
🥉 Bronz = floor(totalPoints / 2000)
🥈 Gümüş = floor(totalPoints / 8500)
🥇 Altın = floor(totalPoints / 25500)
💎 Elmas = floor(totalPoints / 85000)
```

**Test için:**
```javascript
// 2000 XP ekle → 1 Bronz
testAddPoints(2000)

// 8500 XP ekle → 1 Gümüş
testLevel5()

// 25500 XP ekle → 1 Altın
testLevelUp(25500)
```

---

## ⚠️ SORUN GİDERME

### Senkronizasyon sorunları varsa:
```javascript
// 1. Durumu kontrol et
testSenkronizasyon()

// 2. Rozetleri yeniden hesapla
updateBadgeSystem()

// 3. UI'yi güncelle
updateStatsBar()

// 4. Kaydet
saveStats()

// 5. Tekrar kontrol et
testSenkronizasyon()
```

---

### LocalStorage sorunları:
```javascript
// localStorage'ı kontrol et
console.log('Points:', localStorage.getItem('hasene_totalPoints'))
console.log('Badges:', localStorage.getItem('hasene_badges'))
console.log('Achievements:', localStorage.getItem('unlockedAchievements'))

// Sıfırla ve yeniden yükle
resetAllStats()
loadStats()
testSenkronizasyon()
```

---

## 📝 NOTLAR

1. **testSenkronizasyon()** her zaman güvenli - herhangi bir veri silmez
2. **resetAllStats()** DİKKATLİ kullanın - TÜM ilerlemeyi siler
3. Test sonrası **saveStats()** otomatik çağrılır
4. Tüm test komutları **console.log** ile detaylı rapor verir
5. Modal'lar test sırasında görünebilir (normal davranış)

---

## 🚀 HIZLI KONTROL

Oyunu açtığınızda hemen kontrol etmek için:
```javascript
testSenkronizasyon()
```

Her şey ✅ gösteriyorsa sistem %100 senkronize!
