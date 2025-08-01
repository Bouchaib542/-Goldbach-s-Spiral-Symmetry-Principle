function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function getGoldbachPair(N) {
  for (let p = 2; p <= N / 2; p++) {
    let q = N - p;
    if (isPrime(p) && isPrime(q)) {
      return [p, q];
    }
  }
  return null;
}

function drawSpiral(N) {
  const canvas = document.getElementById("spiralCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 800;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  const a = 5;     // spiral scaling
  const b = 3;     // amplitude of correction
  const k = 0.15;  // frequency of correction

  // Draw spiral
  for (let n = 2; n <= N; n++) {
    if (isPrime(n)) {
      const theta = n / 6;
      const r = a * theta + b * Math.sin(k * theta);
      const x = centerX + r * Math.cos(theta);
      const y = centerY + r * Math.sin(theta);

      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fillStyle = "#003366";
      ctx.fill();
    }
  }

  // Draw Goldbach pair
  if (N % 2 === 0 && N > 2) {
    const [p, q] = getGoldbachPair(N);
    const thetaP = p / 6;
    const thetaQ = q / 6;
    const rP = a * thetaP + b * Math.sin(k * thetaP);
    const rQ = a * thetaQ + b * Math.sin(k * thetaQ);

    const xP = centerX + rP * Math.cos(thetaP);
    const yP = centerY + rP * Math.sin(thetaP);

    const xQ = centerX + rQ * Math.cos(thetaQ);
    const yQ = centerY + rQ * Math.sin(thetaQ);

    // Lines between pair
    ctx.beginPath();
    ctx.moveTo(xP, yP);
    ctx.lineTo(xQ, yQ);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Points for p and q
    ctx.beginPath();
    ctx.arc(xP, yP, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(xQ, yQ, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();

    document.getElementById("legend").textContent =
      `Goldbach pair: ${p} + ${q} = ${N}`;
  }
}

document.getElementById("drawButton").addEventListener("click", () => {
  const inputN = parseInt(document.getElementById("evenInput").value);
  if (inputN % 2 === 0 && inputN > 2) {
    drawSpiral(inputN);
  } else {
    alert("Enter an even number greater than 2.");
  }
});
