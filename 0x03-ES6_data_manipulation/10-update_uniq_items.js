export default function updateUniqueItems(MyMap) {
  if (MyMap instanceof Map) {
    return MyMap.forEach((v, k) => {
      if (v === 1) {
        MyMap.set(k, 100);
      }
    });
  }
  return 'Cannot process';
}
