const usernames = [
  'Jade',
  'River',
  'Ototo',
  'Raye',
  'Lucy',
];

const thoughts = [
  'Thought 1',
  'Thought 2',
  'Thought 3',
  'Thought 4',
  'Thought 5',
  'Thought 6',
  'Thought 7',
  'Thought 8',
  'Thought 9',
  'Thought 10',
]

// Get a random item given an array
const getArrItem = (arr) => {
  for (let i=0; i<arr.length; i++) {
    arr[i]
  }}
  

// Gets a random full name
const getName = () =>
  `${getArrItem(usernames)}`;

const getEmail = (username) =>
  `${username}@gmail.com`

const getThought = () =>
  `${getArrItem(thoughts)}`

// Export the functions for use in seed.js
module.exports = { getName, getEmail, getThought };
