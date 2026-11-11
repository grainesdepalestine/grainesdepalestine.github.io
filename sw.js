// Garde le site en mémoire sur le téléphone : il s'ouvre même sans internet.
const CACHE = "gdp-v9";
const PAGES = ["./", "index.html", "activites.js", "epeler/", "france/", "france/poster.jpg", "karim-youssef/", "karim-youssef/poster.jpg", "accueil-mairie/", "accueil-mairie/poster.jpg", "unite1/", "livre/", "prononciation/", "mots/", "revise/", "mots.js"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(PAGES.map(p => c.add(p).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin || /\.(mp4|zip)$/i.test(u.pathname)) return;
  // Internet d'abord (pour avoir la dernière version), sinon la copie gardée
  e.respondWith(
    fetch(r, {cache: "no-cache"}).then(res => {
      if (res.ok && res.type === "basic") { const cp = res.clone(); caches.open(CACHE).then(c => c.put(u.origin + u.pathname, cp)); }
      return res;
    }).catch(() => caches.match(u.origin + u.pathname).then(m => m || caches.match(r, {ignoreSearch: true})))
  );
});
