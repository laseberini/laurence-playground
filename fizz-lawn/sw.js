// Lets Fizz Lawn open with no signal. Always tries the internet first (so updates
// still arrive), and falls back to the last saved copy after 4 seconds or when offline.
const CACHE = 'fizz-lawn';
const FILES = ['./', 'manifest.webmanifest', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if(req.method !== 'GET' || url.origin !== location.origin) return; // Google, WhatsApp etc. go straight out
  const key = req.mode === 'navigate' || url.pathname.endsWith('/index.html') ? './' : req;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const net = fetch(req).then(r => {
      if(r.ok) cache.put(key, r.clone());
      return r;
    });
    net.catch(() => {});
    const slow = new Promise(res => setTimeout(res, 4000));
    try{
      const r = await Promise.race([net, slow.then(() => { throw new Error('slow'); })]);
      return r;
    }catch(err){
      const hit = await cache.match(key, { ignoreSearch: true });
      return hit || net;
    }
  })());
});
