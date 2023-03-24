export default function destruction(obj) {
  const arr = [];
  for (const i in obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = obj.special[i];
    arr.push({
      id, name, icon, description,
    });
  }
  return arr;
}
