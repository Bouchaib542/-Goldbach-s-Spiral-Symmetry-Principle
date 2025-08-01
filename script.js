// script.js — Prime Spiral © 2025 Bahbouhi Bouchaib

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function findGoldbachPair(E) {
    if (E < 4 || E % 2 !== 0) {
        return "Please enter an even number ≥ 4.";
    }
    for (let p = 2; p <= E / 2; p++) {
        let q = E - p;
        if (isPrime(p) && isPrime(q)) {
            return `Goldbach pair: ${p} + ${q} = ${E}`;
        }
    }
    return "No pair found (unexpected case).";
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const input = document.getElementById("evenInput");
    const output = document.getElementById("result");

    btn.addEventListener("click", () => {
        const val = parseInt(input.value.trim());
        const result = findGoldbachPair(val);
        output.textContent = result;
    });
});
