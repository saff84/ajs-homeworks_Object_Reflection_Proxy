import orderByProps from '../index';

test('test sort with params', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const character = orderByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', values: 'мечник' },
    { key: 'level', values: 2 },
    { key: 'attack', values: 80 },
    { key: 'defence', values: 40 },
    { key: 'health', values: 10 },
  ];

  expect(character).toEqual(expected);
});

test('test sort without params', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const character = orderByProps(obj);
  const expected = [
    { key: 'attack', values: 80 },
    { key: 'defence', values: 40 },
    { key: 'health', values: 10 },
    { key: 'level', values: 2 },
    { key: 'name', values: 'мечник' },
  ];

  expect(character).toEqual(expected);
});