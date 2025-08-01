<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spiral Prime Visualizer - README</title>
  <style>
    body {
      font-family: Georgia, serif;
      margin: 40px;
      max-width: 800px;
      line-height: 1.6;
    }
    h1, h2 {
      color: #003366;
    }
    code {
      background: #f2f2f2;
      padding: 2px 5px;
      border-radius: 4px;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <h1>Spiral Prime Visualizer — README</h1>

  <p>
    This website allows you to visualize the distribution of prime numbers along a corrected spiral (Archimedean + harmonic correction), and highlights <strong>Goldbach pairs</strong> (p, q) such that <code>p + q = N</code>.
  </p>

  <h2>✨ How It Works</h2>
  <ol>
    <li>The program draws all primes ≤ N on a 2D spiral using:
      <br><code>r(θ) = a·θ + b·sin(k·θ)</code>
    </li>
    <li>It then finds a valid <strong>Goldbach pair (p, q)</strong> for the even number N.</li>
    <li>It displays p and q on the spiral and shows their symmetric placement.</li>
  </ol>

  <h2>📐 Spiral Formula</h2>
  <p>The corrected spiral is defined as:</p>
  <pre><code>r(θ) = a·θ + b·sin(k·θ)</code></pre>
  <p>Where:</p>
  <ul>
    <li><code>a</code> = base scaling (e.g. 5)</li>
    <li><code>b</code> = amplitude of oscillation (e.g. 3)</li>
    <li><code>k</code> = frequency of the harmonic correction (e.g. 0.15)</li>
  </ul>

  <h2>🎯 Input</h2>
  <p>Enter an even number N > 2 in the input box. The app will:</p>
  <ul>
    <li>Find a valid Goldbach pair (p, q)</li>
    <li>Mark p and q on the spiral</li>
    <li>Show their visual symmetry</li>
  </ul>

  <h2>📊 Educational Goals</h2>
  <ul>
    <li>Illustrate the distribution of primes as non-random patterns.</li>
    <li>Provide geometric support to Goldbach’s Conjecture.</li>
    <li>Demonstrate harmonic corrections to spiral representations.</li>
  </ul>

  <h2>📚 Credits</h2>
  <p>Created by <strong>Bahbouhi Bouchaib</strong>, independent mathematician. Spiral model and symmetry-based Goldbach prediction © 2025.</p>

  <h2>🔗 Related Works</h2>
  <ul>
    <li><a href="https://viXra.org/">viXra.org – Independent Scientific Publishing</a></li>
    <li><a href="https://github.com/">GitHub Repository (coming soon)</a></li>
  </ul>

</body>
</html>
