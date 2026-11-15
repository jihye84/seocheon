/* 서천꽃밭: 홈 화면에 추가해 앱처럼 열 수 있게 하는 최소한의 서비스 워커.
   아무것도 저장해 두지 않는다 — 언제나 새 꽃밭을 받아 오고, 인터넷이 끊겼을 때만 안내를 보여 준다. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>서천꽃밭</title>' +
    '<body style="margin:0;height:100vh;display:flex;align-items:center;justify-content:center;background:#04050f;color:#eadcbe;font-family:serif;text-align:center;line-height:1.8">' +
    '<p>서천꽃밭으로 가는 길이<br>잠시 끊겼어요.<br><br>인터넷에 다시 이어지면<br>새로 열어 주세요.</p></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
