// Convierte texto hexadecimal (UTF-16LE) a texto Unicode legible
function hexToUnicode(hex) {
  const bytes = [];
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16));
  }
  const buffer = new Uint8Array(bytes).buffer;
  const decoded = new TextDecoder('utf-16le').decode(buffer);
  return decoded;
}

// Lee el query param "hex" de la URL actual
const urlParams = new URLSearchParams(window.location.search);
const hexParam = urlParams.get('hex');

if (hexParam) {
  // Si hay un query param "hex", lo convertimos
  const result = hexToUnicode(hexParam);
  document.getElementById('result').textContent = `Resultado: ${result}`;
} else {
  document.getElementById('result').textContent = 'No se ha proporcionado parámetro "hex" en la URL';
}
