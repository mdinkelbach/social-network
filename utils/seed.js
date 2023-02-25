const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});

  await Thought.deleteMany({});

  const thoughts = [
    {
      thoughtText: 'Thought 1',
      username: 'Jade',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 1',
          username: 'Ototo'
        },
        {
          reactionBody: 'Reaction 2 to Thought 2',
          username: 'River'
        }
      ]
    },
    {
      thoughtText: 'Thought 2',
      username: 'River',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 2',
          username: 'Raye'
        }
      ]
    },
    {
      thoughtText: 'Thought 3',
      username: 'Ototo',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 3',
          username: 'Jade'
        },
        {
          reactionBody: 'Reaction 2 to Thought 3',
          username: 'Lucy'
        }
      ]
    },
    {
      thoughtText: 'Thought 4',
      username: 'Raye',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 4',
          username: 'Ototo'
        },
        {
          reactionBody: 'Reaction 2 to Thought 4',
          username: 'Raye'
        }
      ]
    },
    {
      thoughtText: 'Thought 5',
      username: 'Lucy',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 5',
          username: 'Ototo'
        }
      ]
    },
    {
      thoughtText: 'Thought 6',
      username: 'Jade',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 6',
          username: 'Raye'
        },
        {
          reactionBody: 'Reaction 2 to Thought 6',
          username: 'River'
        }
      ]
    },
    {
      thoughtText: 'Thought 7',
      username: 'Ototo',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 7',
          username: 'River'
        }
      ]
    },
    {
      thoughtText: 'Thought 8',
      username: 'Raye',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 8',
          username: 'Ototo'
        }
      ]
    },
    {
      thoughtText: 'Thought 9',
      username: 'River',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 9',
          username: 'Ototo'
        },
        {
          reactionBody: 'Reaction 2 to Thought 9',
          username: 'Jade'
        }
      ]
    },
    {
      thoughtText: 'Thought 10',
      username: 'Ototo',
      reactions: [
        {
          reactionBody: 'Reaction 1 to Thought 10',
          username: 'Jade'
        },
        {
          reactionBody: 'Reaction 2 to Thought 10',
          username: 'River'
        }
      ]
    },
  ];

  const users = [
    {
      username: 'Jade',
      email: 'Jade@gmail.com'
    },
    {
      username: 'River',
      email: 'River@gmail.com'
    },
    {
      username: 'Ototo',
      email: 'Ototo@gmail.com'
    },
    {
      username: 'Raye',
      email: 'Raye@gmail.com'
    },
    {
      username: 'Lucy',
      email: 'Lucy@gmail.com'
    },
  ];

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
