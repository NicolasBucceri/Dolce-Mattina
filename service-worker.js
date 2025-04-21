self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('dolce-cache').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          './styles.css',
          './main.js',
          './Img/logoDolceMattina.png',
          './Img/512x512.png',
          './Img/192x192.png',
          './Img/img2Procesos.jpg',
          './Img/img3Proceso.jpg',
          './Img/img4Especialidades.jpeg',
          './Img/img5Especialidades.jpg',
          './Img/img6Especialidades.jpg',
          './Img/img7Galeria.jpg',
          './Img/img8Galeria.jpg',
          './Img/img9.jpg',
          './Img/img10.jpg',
          './Img/img11.jpg',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  