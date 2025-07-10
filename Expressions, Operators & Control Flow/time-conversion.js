/**
 * Time Conversion
 * ---------------
 * Converts "07:05:45PM" → "19:05:45" in 24‑hour time.
 */
function timeConversion(s) {
  let [time, modifier] = [s.slice(0, 8), s.slice(8)];
  let [hh, mm, ss] = time.split(':');
  if (modifier === 'AM') {
    // 12AM → 00
    if (hh === '12') hh = '00';
  } else {
    // 12PM stays 12; others add 12
    if (hh !== '12') hh = String(Number(hh) + 12).padStart(2, '0');
  }
  return `${hh}:${mm}:${ss}`;
}

// Example usage:
console.log(timeConversion("07:05:45PM")); // "19:05:45"
