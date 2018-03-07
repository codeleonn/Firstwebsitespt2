
var shapeTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' }, 
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

var shapeTiming = {
  duration: 3000,
  iterations: Infinity
}

document.getElementById("shape").animate(
  shapeTumbling, 
  shapeTiming
)