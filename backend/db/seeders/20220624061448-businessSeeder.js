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
    phoneNumber:"7207047980",
    website:"https://shakeshack.com/location/boulder-co",
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
    phoneNumber:"3034403780",
    website:"https://restaurants.fiveguys.com/1855-29th-street",
    rating: 4.5
  },
  {
    ownerId: 3,
    title: 'BurgerFi',
    description: "BurgerFi is committed to providing the best burger experience.  That's why we serve chef-created, fresh food in an eco-friendly environment.  We use 100% natural American Angus beef with no steroids, antibiotics, or growth hormones.  We also serve premium Wagyu beef, cage-free chicken, award-winning VegeFi Burger, Beyond Meat Burger and more.",
    address: '3000 Wake Forest Ste 100',
    city: 'Raleigh',
    state: 'North Carolina',
    zipcode: '27609',
    phoneNumber:"8032280042",
    website:'https://order.burgerfi.com/locations',
    rating: 2.5
  },
  {
    ownerId: 1,
    title: 'Snarfburger',
    description: "In 2013, after creating the World’s Finest Sandwiches for nearly two decades, Jimmy Seidel (“Snarf”) set out to achieve the same greatness on the griddle. Snarfburger opened its doors and quickly became the beloved throwback burger shack of Boulder.",
    address: '2000 Arapahoe Ave',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80302',
    phoneNumber:"3034447711",
    website:"https://www.snarfburger.com/",
    rating: 3
  },
  {
    ownerId: 4,
    title: 'Red Robin Gourmet Burgers and Brews',
    description: "Red Robin Towson offers over 25 different outrageously delicious burger options for guests. From House Faves like The Southern Charm, Banzai, and Whiskey River BBQ® to limited time Gourmet Burgers - when you’re hungry for a burger in Towson, we’ve got what you need to satisfy your craving. Nothing goes better with a mouth-watering burger than our Bottomless Steak Fries®.",
    address: '1238 Putty Hill Ave',
    city: 'Towson',
    state: 'Maryland',
    zipcode: '21286',
    phoneNumber:"4108234224",
    website:"https://locations.redrobin.com/md/towson/450/",
    rating: 3.5
  },
  {
    ownerId: 4,
    title: 'Checkers',
    description: "Checkers was born out of the idea that boring and bland have no place in the burger world. That's why we've been slinging the best burgers, crispiest fries, and the freshest shakes.",
    address: '1915 E Joppa Rd',
    city: 'Parkville',
    state: 'Maryland',
    zipcode: '21234',
    phoneNumber:"4106635798",
    website:"https://www.checkers.com/",
    rating: 3.5
  },
  {
    ownerId: 6,
    title: 'In-N-Out Burger',
    description:"Welcome to our restaurant in Riverside, CA. At In-N-Out Burger we use only the freshest ingredients with no heat lamps, freezers or microwaves to deliver on our promise of Quality You Can Taste®.",
    address: '7467 Indiana Ave',
    city: 'Riverside',
    state: 'California',
    zipcode: '92504',
    phoneNumber:"8007861000",
    website:"https://locations.in-n-out.com/46",
    rating: 5
  },
  {
    ownerId: 5,
    title: "The Habit Burger Grill",
    description: "At The Habit Burger Grill, cooking over an open flame sears a distinctive smoky flavor into our award-winning Charburgers, fresh marinated chicken, sushi-grade ahi tuna, and tenderloin steak. Our guests can always count on freshly made, handcrafted quality served up with genuine hospitality. Order online or on our mobile app today!",
    address: '3 Teterboro Landing Dr',
    city: 'Teterboro',
    state: 'New Jersey',
    zipcode: '07608',
    phoneNumber:"2012884629",
    website:"https://www.habitburger.com/",
    rating: 4
  },
  {
    ownerId: 3,
    title: "Char-Grill",
    description: "Since 1959, Char-Grill has been serving Raleigh, NC and surrounding areas fresh, delicious hamburger patties cooked over charcoal flames. At Char-Grill, we believe in the importance of our history, and do all of our business by the company motto, “Simpler Times, Simpler Choices.”",
    address: '618 Hillsborough St',
    city: 'Raleigh',
    state: 'North Carolina',
    zipcode: '80301',
    phoneNumber:"9198217636",
    website:"https://www.chargrillusa.com/",
    rating: 4
  },
  {
    ownerId: 1,
    title: 'Smashburger',
    description: "Smashburger is an innovative restaurant concept that is redefining its category by providing a burger experience that combines the superior product, service and atmosphere associated with sit-down casual dining and the speed and convenience associated with quick-service restaurants.",
    address: '1650 28th St Space 1226',
    city: 'Boulder',
    state: 'Colorado',
    zipcode: '80301',
    phoneNumber:"3036564694",
    website:"https://smashburger.com/locations/us/co/boulder/1650-28th-street/",
    rating: 3
  },
  {
    ownerId: 5,
    title: "Freddy's Frozen Custard & Steakburgers",
    description: "Enjoying great food without a long wait doesn’t mean your meal has to be cooked before you order it. From steakburgers to sundaes, Freddy’s makes food fresh after you ask for it because that’s the kind of quality you deserve. Take a moment to catch up with friends and family; it’s almost time to eat.",
    address: '2300 Coalton Rd',
    city: 'Broomfield',
    state: 'Colorado',
    zipcode: '80027',
    phoneNumber:"3039518120",
    website:"https://www.freddys.com/",
    rating: 4
  },
  {
    ownerId: 6,
    title: "Culver's",
    description: "Craveable as our signature combination is, the Culver family knew right away that although the business is centered around the food, it is really about the people. While folks can vividly recall the first time they bit into a ButterBurger or tasted a scoop of rich, creamy Fresh Frozen Custard, it’s our way of welcoming guests that truly makes Culver’s delicious.",
    address: '1218 S Hover Rd',
    city: 'Longmont',
    state: 'Colorado',
    zipcode: '80501',
    phoneNumber:"3036564694",
    website:"https://www.culvers.com/restaurants/longmont-co-hover-rd",
    rating: 3.5
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
