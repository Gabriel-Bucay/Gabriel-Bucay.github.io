let angle = 0;

function rotateRing(direction) {
  angle += direction * 72;
  const ring = document.getElementById('ring');
  ring.style.transform = `translate(-50%, -50%) rotateY(${angle}deg)`;
}