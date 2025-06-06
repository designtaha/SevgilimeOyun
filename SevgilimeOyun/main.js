const candlesContainer = document.querySelector(".candles");

// 4 mum oluşturuyoruz
for (let i = 0; i < 4; i++) {
  const candle = document.createElement("div");
  candle.classList.add("candle");

  // Mumun üstüne alev (flame) ekle
  const flame = document.createElement("div");
  flame.classList.add("flame");
  candle.appendChild(flame);

  candlesContainer.appendChild(candle);
}

function blowCandles() {
  const candles = document.querySelectorAll(".candle");
  candles.forEach(c => {
    c.style.animation = "blowOut 1s forwards";
  });

  document.body.style.transition = "opacity 2s";
  setTimeout(() => {
    document.body.style.opacity = 0;
  }, 1000);

  setTimeout(() => {
    window.location.href = "game.html";
  }, 3000);
}

// Mumların söndüğü animasyon keyframes'ini ekliyoruz
const style = document.createElement('style');
style.innerHTML = `
  @keyframes blowOut {
    0% { opacity: 1; transform: scaleY(1); }
    100% { opacity: 0; transform: scaleY(0.1); }
  }
`;
document.head.appendChild(style);
