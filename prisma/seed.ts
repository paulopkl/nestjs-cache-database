import { PrismaClient } from '@prisma/client';

import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

async function run() {
//   await prisma.user.deleteMany();
    const insertQuantity = 40

  let promises = [];

  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);
  await delay();

  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);

  await delay();
  
  ///////////////////
  promises = [];
  for (let i = 0; i < insertQuantity; i++) {
    promises.push(
      prisma.user.create({
        data: {
          name: faker.name.fullName(),
          age: Math.floor(Math.random() * 100),
          city: faker.address.cityName(),
        },
      }),
    );
  }
  await Promise.all(promises);
}

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();
  });
