const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing students
  await User.deleteMany({});

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 10; i++) {

    const username = getRandomName();
    const email = getRandomEmail(username);

    users.push({
      username,
      email,
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
