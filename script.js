// Liste des petits nombres premiers pour exemple (vous pouvez l'étendre)
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
                31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
                73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
                127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
                179, 181, 191, 193, 197, 199, 211, 223, 227, 229];

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function goldbachPair(even) {
    for (let i = 2; i <= even / 2; i++) {
        if (isPrime(i) && isPrime(even - i)) {
            return [i, even - i];
        }
    }
    return null;
}

function showGoldbach() {
    const input = document.getElementById("evenInput");
    const resultDiv = document.getElementById("result");
    const even = parseInt(input.value, 10);

    if (even < 4 || even % 2 !== 0) {
        resultDiv.innerHTML = "Veuillez entrer un nombre pair supérieur ou égal à 4.";
        return;
    }

    const pair = goldbachPair(even);
    if (pair) {
        resultDiv.innerHTML = `✅ ${even} = ${pair[0]} + ${pair[1]}`;
    } else {
        resultDiv.innerHTML = "❌ Aucune paire trouvée.";
    }
}
