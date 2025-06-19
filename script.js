// Función original: Fibonacci recursivo
function fibonacci(n) {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Función memoize según tu implementación
  function memoize(fn) {
    const cache = new Map();
    let callCount = 0;
  
    const memoized = function (...args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) 
        return cache.get(key);
  
      const result = fn(...args);
      cache.set(key, result);
      callCount++;
      return result;
    };
  
    memoized.getCallCount = function () {
      return callCount;
    };
  
    return memoized;
  }
  
  // Creamos la función protegida
  const memoFib = memoize(fibonacci);
  
  // Conectamos con la interfaz
  function calcular() {
    const input = document.getElementById("inputNum");
    const n = parseInt(input.value);
  
    if (isNaN(n) || n < 0 || n > 30) {
      alert("Por favor ingresa un número válido (0–30).");
      return;
    }
  
    const resultado = memoFib(n);
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("contador").textContent = memoFib.getCallCount();
  }