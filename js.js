document.getElementById("moveButton").addEventListener("click", () => {
  const image = document.getElementById("movableImage");
  const botao = document.getElementById('backbutton__kit');
  const textoKit = document.getElementById('psychedelic');
  image.style.left = "0%";
  botao.style.left = '2%';
  textoKit.style.left = '65%'; // Move the image to the left edge
});

document.getElementById('backbutton__kit').addEventListener('click', () => {
  const image = document.getElementById("movableImage");
  const botao = document.getElementById('backbutton__kit');
  const textoKit = document.getElementById('psychedelic');
  image.style.left = "100%";
  botao.style.left = '100%';
  textoKit.style.left = '110%'
})