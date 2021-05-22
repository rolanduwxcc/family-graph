//EXAMPLE TO REWORK FOR OUR SEEDS
const faker = require('faker');

const db = require('../config/connection');
const { Unit, User } = require('../models');

db.once('open', async () => {
  await Unit.deleteMany({});
  await User.deleteMany({});

  // CREATE USER DATA
  const userData = [];
  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = "pass";

    userData.push({ username, email, password });
  }
  const createdUsers = await User.collection.insertMany(userData);

  // CREATE UNIT DATA WITH NOT PARENTS/CHILDREN
  const unitData = []
  for (let i = 0; i < 50; i += 1) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const birthCountry = faker.address.country();
    const homeCountry = faker.address.country();
    const imageLink= faker.image.people();

    unitData.push({ firstName, lastName, birthCountry, homeCountry, imageLink });
  }
  const createdUnits = await Unit.collection.insertMany(unitData);

  // CREATE UNITS WITH MOTHER, FATHER, CHILDREN SET FROM ABOVE
  const moreUnitData = [];
  for (let i=0; i < 50; i+= 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUnits.ops.length);

    const unitCountTest = 50 - randomUserIndex;
    if (unitCountTest > 3) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const birthCountry = faker.address.country();
      const homeCountry = faker.address.country();
      const imageLink= faker.image.people();
      const father = createdUnits.ops[randomUserIndex + 1];
      const mother = createdUnits.ops[randomUserIndex + 2];
      const children = [createdUnits.ops[randomUserIndex + 3]];
      moreUnitData.push({ firstName, lastName, birthCountry, homeCountry, imageLink, father, mother, children });
    } 
    else {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const birthCountry = faker.address.country();
      const homeCountry = faker.address.country();
      const imageLink= faker.image.people();
      const father = createdUnits.ops[randomUserIndex - 1];
      const mother = createdUnits.ops[randomUserIndex - 2];
      const child = [createdUnits.ops[randomUserIndex - 3]] ;
      moreUnitData.push({ firstName, lastName, birthCountry, homeCountry, imageLink, father, mother, child });
    }
  }
  console.log(moreUnitData);
  const result = await Unit.collection.insertMany(moreUnitData);
  console.log('wlr done', result.acknowledged);
  console.log('all done!');
  process.exit(0);
});
