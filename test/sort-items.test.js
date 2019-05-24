const test = QUnit.test;

QUnit.module('Sort Items');

const Cantu = {
  '_id': '5c75a7b05ef279a15486ff42',
  'isActive': true,
  'balance': 2559.99,
  'picture': 'http://placehold.it/32x32',
  'age': 28,
  'eyeColor': 'blue',
  'firstName': 'Cantu',
  'lastName': 'Sullivan',
  'company': 'IDETICA',
  'email': 'cantu.sullivan@idetica.com',
  'phone': '+1 (970) 454-3315',
  'address': '590 Pershing Loop, Sabillasville, Pennsylvania, 2892',
  'about': 'Minim exercitation nisi ullamco consequat fugiat aute sit amet aute eu nisi. Nulla ad dolor ut fugiat sit sint commodo. Sint duis ullamco labore aute pariatur aute velit consequat elit proident sit aute est. In in culpa velit quis enim occaecat. Veniam esse laboris irure consequat. Laborum dolore nulla excepteur aute sit minim sit voluptate labore non esse cupidatat exercitation. Eiusmod incididunt consectetur quis proident.',
  'favoriteFruit': 'banana'
};

const George = {
  '_id': '5c75a7b03e115d894a117710',
  'isActive': true,
  'balance': 1401.67,
  'picture': 'http://placehold.it/32x32',
  'age': 28,
  'eyeColor': 'blue',
  'firstName': 'George',
  'lastName': 'Nicholson',
  'company': 'MALATHION',
  'email': 'george.nicholson@malathion.com',
  'phone': '+1 (886) 564-2061',
  'address': '801 Farragut Road, Goldfield, Oregon, 4397',
  'about': 'Aliquip ipsum dolor voluptate sint est ad esse id ut aliquip nostrud consequat in sint. Duis eu officia nulla minim elit non cillum duis. Eu eiusmod eiusmod ut excepteur. Exercitation cupidatat quis non magna in id do.',
  'favoriteFruit': 'strawberry'
};

const Keller = {
  '_id': '5c75a7b033e108b42a023300',
  'isActive': false,
  'balance': 3693.40,
  'picture': 'http://placehold.it/32x32',
  'age': 38,
  'eyeColor': 'green',
  'firstName': 'Keller',
  'lastName': 'Murray',
  'company': 'OHMNET',
  'email': 'keller.murray@ohmnet.com',
  'phone': '+1 (838) 476-2686',
  'address': '776 Oxford Walk, Harviell, New York, 499',
  'about': 'Dolor commodo et amet incididunt ut nulla aute deserunt pariatur nisi cupidatat. Dolor culpa do et id consequat cillum cillum Lorem ea sit officia nisi sint labore. Id mollit cillum ipsum Lorem dolor deserunt aliqua ex eiusmod irure do magna. Est cupidatat tempor pariatur laborum dolore esse irure aliquip sunt in dolor qui mollit incididunt.',
  'favoriteFruit': 'apple'
};

const items = [George, Cantu, Keller];

function sortItems(items, properties) {
  const sorted = items.sort((a, b) => {
    if(a[properties.type] > b[properties.type]) {
      return 1 * properties.direction;
    }
    if(a[properties.type] < b[properties.type]) {
      return -1 * properties.direction;
    }
    return 0;
  });

  return sorted;
}

test('Sort items on first name', assert => {
  //Arrange
  const properties = {
    type: 'firstName',
    direction: 1
  };
  //Act 
  const result = sortItems(items, properties);
  //Assert
  assert.deepEqual(result, [Cantu, George, Keller]);
});

test('Sort items on last name', assert => {
  //Arrange
  const properties = {
    type: 'lastName',
    direction: 1
  };
  //Act 
  const result = sortItems(items, properties);
  //Assert
  assert.deepEqual(result, [Keller, George, Cantu]);
});

test('Sort items on favorite fruit reversed', assert => {
  //Arrange
  const properties = {
    type: 'favoriteFruit',
    direction: -1
  };
  //Act 
  const result = sortItems(items, properties);
  //Assert
  assert.deepEqual(result, [George, Cantu, Keller]);
}); 