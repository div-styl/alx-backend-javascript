export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    console.log('Position outside range');
  }
  const bf = new DataView(new ArrayBuffer(length), 0, length);
  bf.setInt8(position, value);
  return bf;
}
