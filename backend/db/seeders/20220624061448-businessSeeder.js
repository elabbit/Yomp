'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Businesses', [
    {
    ownerId: 2,
    title: 'Shake Shack',
    description: "Shake Shack serves elevated versions of American classics using only the best ingredients. It's known for its delicious made-to-order Angus beef burgers, crispy chicken, hand-spun milkshakes, house-made lemonades, beer, wine, and more.",
    address: '1680 29th St',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 4.5
  },
  {
    ownerId: 2,
    title: 'Five Guys',
    description: "Five Guys' passion for food is shared with our fans, which is why we never compromise. Fresh ingredients hand-prepared that satisfy your craving.",
    address: '1855 29th St Ste 1154',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 4.5
  },
  {
    ownerId: 1,
    title: 'Blackbelly Market',
    description: "Blackbelly works exceptionally close with local ranchers and farmers primarily within a few miles of the restaurant. These farmers provide an amazing example of Colorado’s bounty, and what they cultivate directly effects the menu decisions the chefs make on a regular basis.",
    address: '1606 Conestoga St Ste 3',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 3.5
  },
  {
    ownerId: 3,
    title: 'Snarfburger',
    description: "In 2013, after creating the World’s Finest Sandwiches for nearly two decades, Jimmy Seidel (“Snarf”) set out to achieve the same greatness on the griddle. Snarfburger opened its doors and quickly became the beloved throwback burger shack of Boulder.",
    address: '2000 Arapahoe Ave',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80302',
    rating: 3
  },
  {
    ownerId: 4,
    title: 'Little Tibet',
    description: "Himalayan and Tibetan specialties in beautiful Boulder,Co.",
    address: '4479 Bdwy',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80304',
    rating: 5
  },
  {
    ownerId: 5,
    title: 'Chez Thuy Restaurant',
    description: "Chez Thuy is a Vietnamese Restaurant that embraces a rich blend of culinary traditions including French, Chinese, Thai, and Indonesian with Thuy's special touch.",
    address: '2655 28th St',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 3.5
  },
  {
    ownerId: 6,
    title: 'Korea House',
    description:"Korea House is a Korean restaurant constituted in providing the freshest and dynamic food available. We also believe in the progressive thoughtfulness in being able to educate about Korean food.",
    address: '2750 Glenwood Dr Ste 4',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 3
  },
  {
    ownerId: 5,
    title: "Boulder Pho",
    description: "Our restaurant is a collective of amazing people striving to build delightful Vietnamese Cuisine.",
    address: '2855 28th St',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 4
  },
  {
    ownerId: 1,
    title: "Rakkan Ramen",
    description: "RAKKAN began as a small, 4-seater restaurant in Nishiazabu, Tokyo, in 2011. But our business had its eyes set on making real Japanese soul food on an international scale, hence our motto, Authentic Japanese food, ready for the world.",
    address: '1650 28th St Ste 1228',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 4.5
  },
  {
    ownerId: 3,
    title: 'Smashburger',
    description: "Smashburger is an innovative restaurant concept that is redefining its category by providing a burger experience that combines the superior product, service and atmosphere associated with sit-down casual dining and the speed and convenience associated with quick-service restaurants.",
    address: '1650 28th St Space 1226',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    rating: 3
  }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};
