import orderByProps from '../index';

// test('test new error name', () => {expect(()=> {new Boweman('R')}).toThrowError('Недопустима длинна имени, должно быть строка, min - 2 символа, max - 10');
// });
// test('test new error type', () => {expect(()=> {new Boweman('Robin', 'Bowerman')}).toThrowError('Тип должен быть один из типов (строка): Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
// });

test('test sort with params', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }
  const character = orderByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', values: 'мечник' },
    { key: 'level', values: 2 },
    { key: 'attack', values: 80 },
    { key: 'defence', values: 40 },
    { key: 'health', values: 10 }
  ];

  expect(character).toEqual(expected);
});


test('test sort without params', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }
  const character = orderByProps(obj);
  const expected = [
    { key: 'attack', values: 80 },
    { key: 'defence', values: 40 },
    { key: 'health', values: 10 },
    { key: 'level', values: 2 },
    { key: 'name', values: 'мечник' }
  ];

  expect(character).toEqual(expected);
});
// test('test create Swordsman', () => {
//   const character = new Swordsman('Jade');
//   const expected = {
//     name: 'Jade',
//     level: 1,
//     health: 100,
//     type: 'Swordsman',
//     attack: 40,
//     defence: 10,
//   };

//   expect(character).toEqual(expected);
// });

// test('test create Magician', () => {
//   const character = new Magician('Merlin');
//   const expected = {
//     name: 'Merlin',
//     level: 1,
//     health: 100,
//     type: 'Magician',
//     attack: 10,
//     defence: 40,
//   };

//   expect(character).toEqual(expected);
// });

// test('test create Undead', () => {
//   const character = new Undead('Maklaud');
//   const expected = {
//     name: 'Maklaud',
//     level: 1,
//     health: 100,
//     type: 'Undead',
//     attack: 25,
//     defence: 25,
//   };

//   expect(character).toEqual(expected);
// });

// test('test create Zombie', () => {
//   const character = new Zombie('Shon');
//   const expected = {
//     name: 'Shon',
//     level: 1,
//     health: 100,
//     type: 'Zombie',
//     attack: 40,
//     defence: 10,
//   };

//   expect(character).toEqual(expected);
// });

// test('test create Daemon', () => {
//   const character = new Daemon('Aid');
//   const expected = {
//     name: 'Aid',
//     level: 1,
//     health: 100,
//     type: 'Daemon',
//     attack: 10,
//     defence: 40,
//   };

//   expect(character).toEqual(expected);
// });