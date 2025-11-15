// ===============================
// 🚀 HASENE ARABIC GAME – PRO SW
// ===============================

const CACHE_VERSION = "v3.0";
const CACHE_NAME = `hasene-cache-${CACHE_VERSION}`;

// Uygulama kabuğu (shell)
const APP_SHELL = [
  "/HASENE/",
  "/HASENE/index.html",
  "/HASENE/manifest.json",

  // İkonlar
  "/HASENE/icon-192-v4-RED-MUSHAF.png",
  "/HASENE/icon-512-v4-RED-MUSHAF.png",

  // Font (dosya adı BOŞLUKSUZ olacak!)
  "/HASENE/KFGQPC-Uthmanic-HAFS-Regular.otf",

  // Temel JS/CSS → varsa ekle
  "/HASENE/style.css",
  "/HASENE/app.js"
];

// JSON dosyaların otomatik güncellenebilir olması için
const JSON_FILES = [
  "/HASENE/kelimebul.json",
  "/HASENE/ayetoku_formatted.json",
  "/HASENE/duaet.json",
  "/HASENE/hadisoku.json"
];

// Log aç/kapa
const SW_DEBUG = false;

// ===============================
// 📦 INSTALL – Shell cache
// ===============================
self.addEventListener("install", (event) => {
  if (SW_DEBUG) console.log("📥 SW Install");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      if (SW_DEBUG) console.log("📦 Caching app shell...");
      return cache.addAll([...APP_SHELL, ...JSON_FILES]);
    })
  );

  self.skipWaiting();
});

// ===============================
// 🧹 ACTIVATE – Eski cache'leri sil
// ===============================
self.addEventListener("activate", (event) => {
  if (SW_DEBUG) console.log("🚀 SW Activate");

  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            if (SW_DEBUG) console.log("🗑️ Silindi:", key);
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

// ===============================
// 🌐 FETCH – Pro level cache
// ===============================
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // --- JSON dosyaları: stale-while-revalidate ---
  if (JSON_FILES.includes(url.pathname)) {
    event.respondWith(jsonStrategy(req));
    return;
  }

  // --- HTML dosyaları: network-first (offline fallback) ---
  if (req.destination === "document") {
    event.respondWith(htmlStrategy(req));
    return;
  }

  // --- Diğer dosyalar: cache-first ---
  event.respondWith(cacheFirst(req));
});

// ===============================
// 📌 STRATEGY 1 — JSON: Stale-While-Revalidate
// ===============================
async function jsonStrategy(req) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(req);

  // Arka planda yenisi çekilir
  fetch(req).then((fresh) => {
    if (fresh.ok) cache.put(req, fresh.clone());
  });

  return cached || fetch(req);
}

// ===============================
// 📌 STRATEGY 2 — HTML: Network-first
// ===============================
async function htmlStrategy(req) {
  try {
    const fresh = await fetch(req);
    return fresh;
  } catch (err) {
    return caches.match("/HASENE/index.html");
  }
}

// ===============================
// 📌 STRATEGY 3 — Cache-first
// ===============================
async function cacheFirst(req) {
  const cached = await caches.match(req);
  return cached || fetch(req);
}

// ===============================
// 🔄 BACKGROUND SYNC (Hazır)
// ===============================
self.addEventListener("sync", (event) => {
  if (SW_DEBUG) console.log("🔄 Background Sync:", event.tag);
});

// ===============================
// 🔔 PUSH Notifications (Hazır)
// ===============================
self.addEventListener("push", (event) => {
  if (!event.data) return;

  const options = {
    body: event.data.text(),
    icon: "/HASENE/icon-192-v4-RED-MUSHAF.png",
    badge: "/HASENE/icon-192-v4-RED-MUSHAF.png",
    vibrate: [100, 40, 100]
  };

  event.waitUntil(
    self.registration.showNotification("Hasene Arapça Oyunu", options)
  );
});
