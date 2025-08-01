function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function getGoldbachPair(E) {
    for (let p = 2; p <= E / 2; p++) {
        let q = E - p;
        if (isPrime(p) && isPrime(q)) return [p, q];
    }
    return null;
}

function plotSpiral() {
    const canvas = document.getElementById("spiralCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const E = parseInt(document.getElementById("evenInput").value);
    const resultEl = document.getElementById("result");

    if (isNaN(E) || E < 4 || E % 2 !== 0) {
        resultEl.textContent = "Veuillez entrer un nombre pair ≥ 4.";
        return;
    }

    const [p, q] = getGoldbachPair(E) || [];

    if (!p || !q) {
        resultEl.textContent = "Aucune paire de Goldbach trouvée.";
        return;
    }

    resultEl.textContent = `${E} = ${p} + ${q}`;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const scale = 5;
    const max = Math.max(p, q, E);

    for (let n = 2; n <= max; n++) {
        if (isPrime(n)) {
            const theta = n * 0.2;
            const r = scale * Math.sqrt(n);
            const x = centerX + r * Math.cos(theta);
            const y = centerY + r * Math.sin(theta);

            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.fillStyle = "blue";
            ctx.fill();
        }
    }

    // Draw red line between p and q
    const thetaP = p * 0.2;
    const rP = scale * Math.sqrt(p);
    const xP = centerX + rP * Math.cos(thetaP);
    const yP = centerY + rP * Math.sin(thetaP);

    const thetaQ = q * 0.2;
    const rQ = scale * Math.sqrt(q);
    const xQ = centerX + rQ * Math.cos(thetaQ);
    const yQ = centerY + rQ * Math.sin(thetaQ);

    ctx.beginPath();
    ctx.moveTo(xP, yP);
    ctx.lineTo(xQ, yQ);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.stroke();
}
