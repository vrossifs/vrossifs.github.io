export function Formatter(value) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(value);
}