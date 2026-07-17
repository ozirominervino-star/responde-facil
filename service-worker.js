const CACHE_NAME = "responde-facil-pro-v2-0-4";
const ASSETS = ["./", "./index.html", "./manifest.json", "./version.json"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))));
self.addEventListener("fetch", e => { if (e.request.method === "GET") e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); });
