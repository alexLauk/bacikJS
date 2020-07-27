// Задание №1 Входные данные

const clients = [{
  id: 0,
  firstName: 'FirstName1',
  lastName: 'LastName1',
  address: 'address1',
  phone: 'phone1'
}, {
  id: 1,
  firstName: 'FirstName2',
  lastName: 'LastName2',
  address: 'address2',
  phone: 'phone2'
}, {
  id: 2,
  firstName: 'FirstName3',
  lastName: 'LastName3',
  address: 'address3',
  phone: 'phone3'
}];

const cards = [{
  id: 0,
  clientId: 0,
  number: '0000',
  data: 1493034361601
}, {
  id: 1,
  clientId: 0,
  number: '0001',
  data: 1493034301601
}, {
  id: 2,
  clientId: 0,
  number: '0002',
  data: 1493034001601
}, {
  id: 3,
  clientId: 1,
  number: '1001',
  data: 1493034101601
}];
/*
Написать 2 класса:
	- Client
	- Card

класс Client имеет 5 входных параметра
	- firstName
  - lastName
  - address
  - phone
  - id

 у экземпляра класса, есть следующие методы
 	- getFirstName/updateFirstName - получить/обновить firstName
  - getLastName/updateLastName - получить/обновить lastName
  - getFullName - получить/обновить полное имя
  - getAddress/updateFirstName - получить address
  - getPhone/updateFirstName - получить телефон
  - update(data) - обновляет все поля, которые переданные в объекте дата (все существующие, но не добавляет лишних)
  - destroy - удаляет клиента из массива входных данных
  - getCards - возвращает массив экземпляров класса, которые принадлежат этому клиенту
  - addCart - добавляет карту клиенту в массив cards и возвращает ее (экземпляр класса Cart)

  А так же доступны слудующие статические методы
  - fetch() - возвращает все клиентов (массив экземлпяров класса Client)
  - find(id) - вовращает клиента по id (экземлпяр класса Client)
  - destroy(id) - удаляет клиента по id (из массива clients)
  - create(data) - создает клиента (а так же добавляет его в массив clients, в виде обычного объекта, по типу тех,  которые уже находятся в массиве) и возвращает его (как экземпляр класса client)

У класса Card есть следующих 5 параметров
	- number
  - expirationData
  - cliendId
  - id

  у экземпляра класса, есть следующие методы
 	- getNumber - получить number
  - getClient - возвращает клиента по clientId (экземпляр класса Client)
  - getExpidationData/updateExpirationData - получить/обновить полное expirationData

  А так же доступны слудующие статические методы
  - fetch() - возвращает все карты (массив экземлпяров класса Cart)
  - find(id) - вовращает карту по id (экземлпяр класса Cart)
  - destroy(id) - удаляет карту по id (из массива carts)
  - findByClient(clientId) - возвращает карту по clientId (экземпляр класса Client)

Пример статического метода

class SomeClassName() {
  // ..
  static someStaticMethod() {

  }
}



Примеры работы

Client.fetch(); // возвращает всех клиентов в виде экземпляров класса client
// [ new Client(clients[0]), new Client(clients[1]), ...]
var client = Client.find(0);
client.getFirstName(); // FirstName1
client.getCards(); // возвращается массив экземпляров класса Cart которые относятся к этому клиенту
// [ new Cart(...) ]

// Задание №2
Реализовать трёхуровневое наследование с произвольными иерархиями

Например

User - > Moderator - > Admin

Character - > Race - > Profession

Game - > Single/Multi -> Action/RPG/etc...
*/

let clients = [{
  id: 0,
  firstName: 'FirstName1',
  lastName: 'LastName1',
  address: 'address1',
  phone: 'phone1'
}, {
  id: 1,
  firstName: 'FirstName2',
  lastName: 'LastName2',
  address: 'address2',
  phone: 'phone2'
}, {
  id: 2,
  firstName: 'FirstName3',
  lastName: 'LastName3',
  address: 'address3',
  phone: 'phone3'
}];

let cards = [{
  id: 0,
  clientId: 0,
  number: '0000',
  data: 1493034361601
}, {
  id: 1,
  clientId: 0,
  number: '0001',
  data: 1493034301601
}, {
  id: 2,
  clientId: 0,
  number: '0002',
  data: 1493034001601
}, {
  id: 3,
  clientId: 1,
  number: '1001',
  data: 1493034101601
}];

class Client {

  constructor(client) {
    this.id = client.id
    this.firstName = client.firstName
    this.lastName = client.lastName
    this.address = client.address
    this.phone = client.phone
  }

  static fetch() {
    return clients.map(client => new Client(client))
  }

  static find(id) {
    const client = clients.find(client => client.id === id)

    return client ? new Client(client) : undefined
  }

  static destroy(id) {
    clients = clients.filter(client => client.id !== id)
  }

  static create(client) {
    const id = Math.max(...clients.map(client => client.id)) + 1
    clients.push({
      id: id,
      firstName: client.firstName,
      lastName: client.lastName,
      address: client.address,
      phone: client.phone
    })

    return Client.find(id)
  }

  getFirstName() {
    return this.firstName
  }

  updateFirstName(firstName) {
    return this.firstName = firstName
  }

  getLastName(lastName) {
    return this.lastName
  }

  updateLastName(lastName) {
    return this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  getAddress() {
    return this.address
  }

  updateAddress(adress) {
    return this.adress = adress
  }

  getPhone() {
    return this.phone
  }

  updatePhone(phone) {
    return this.phone = phone
  }

  update(data) {
    for (let key in data) {
      if (this.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    }

    return this
  }

  destroy(id) {
    Client.destroy(id)
  }

  getCards(id) {
    return Card.findByClient(id)
  }

  addCart(card) {
    const id = Math.max(...cards.map(card => card.id)) + 1
    cards.push({
      id: id,
      clientId: card.clientId,
      number: card.number,
      expirationData: card.expirationData
    })

    return Card.find(id)
  }

}


class Card {
  constructor(card) {
    this.id = card.id
    this.clientId = card.clientId
    this.number = card.number
    this.expirationData = card.expirationData
  }

  static fetch() {
    return cards.map(card => new Card(card))
  }

  static find(id) {
    const card = cards.find(card => card.id === id)
    
    return card ? new Card(card) : undefined
  }

  static destroy(id) {
    cards = cards.filter(card => card.id !== id)
  }

  static findByClient(clientId) {
    return cards.filter(card => card.clientId === clientId)
  }

  getNumber() {
    return this.number
  }

  getClient(clientId) {
    return Client.find(clientId)
  }

  getExpidationData() {
    return this.expidationData
  }

  updateExpirationData(expidationData) {
    return this.expidationData = expidationData
  }
}


// Использование:
new Client(clients)
let card = Card.find(0)
console.log(card)

let client = Client.find(0);
console.log(client.getFirstName())

console.log(Client.fetch());
// console.log(Client.find(3));
// console.log(Client.destroy(3));
// console.log(Client.fetch());
// console.log(Client.destroy(2));
// console.log(Client.fetch());
console.log(Client.create({
  firstName: 'FirstName4',
  lastName: 'LastName4',
  address: 'address4',
  phone: 'phone4'
}));

console.log(Client.create({
  firstName: 'FirstName5',
  lastName: 'LastName5',
  address: 'address5',
  phone: 'phone5'
}));

console.log(client.addCart({
  clientId: 4,
  number: 1234,
  expirationData: 124354
}));

console.log(client.update({
  firstName: 'Alex',
  lastName: 'Finch',
  address: 'ADdf',
  phone: '24435346'
}))

console.log(client.getCards(1))
console.log(Card.fetch())

console.log(card.getClient(2))
