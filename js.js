document.getElementById('idk').addEventListener('mouseover', function() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  const randomShadow = `0 4px 8px ${randomColor}`;
  
  this.style.backgroundColor = randomColor;
  this.style.idk = randomShadow;
});

document.getElementById('idk').addEventListener('mouseout', function() {
  this.style.backgroundColor = '#ffffff';
  this.style.idk = '0 4px 8px rgba(0, 0, 0, 0.2)';
})