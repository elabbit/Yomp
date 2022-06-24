'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 5,
        buisnessId: 1,
        rating: 5,
        review: "The staff is super friendly and food is fresh. I go here regularly and they've been consistent with fresh food and friendly staff. The restaurant is clean and has a nice modern environment. Great burgers and fries!"
      },
      {
        userId: 1,
        buisnessId: 1,
        rating: 4,
        review: "I queued up in Madison Square Park in the early years. Wow, that was an amazing burger! But, in recent years, it hasn't been quite as good as memory served me. That was until Friday! The burger was as great as I remembered it being back in 2001. Welcome to Boulder and keep up the great food!"
      },
      {
        userId: 3,
        buisnessId: 2,
        rating: 4,
        review: "Classic, American-Style burgers and Hot dogs! Fast food at its finest. The Shakes top it all off."
      },
      {
        userId: 4,
        buisnessId: 2,
        rating: 5,
        review: "I truly do love 5 Guys, best burger you can get.  Their also pretty accomidating if you don't want a bun they will toss everything you need in a bowl. The staff is always friendly and the place is always clean.  Their menu is simple and easy to read, and the prices are straight forward.  Oh and if you buy the fries, get them CAJUN STYLE!"
      },
      {
        userId: 2,
        buisnessId: 3,
        rating: 4,
        review: "This is Boulder's best breakfast burrito hands down.  Every day is different and I have never been disappointed.  Bonus on Fridays they have donuts. One flavor and again they are amazing."
      },
      {
        userId: 6,
        buisnessId: 3,
        rating: 3,
        review: "If you want meat, expensive, fancy and overrated meat, this is the place to go.   It was very good but not worth the money or the time it took. Too specialized in my opinion."
      },
      {
        userId: 1,
        buisnessId: 4,
        rating: 3,
        review: "The snarfburger and onion rings are delicious. It is a no-frills fastfood outlet that is located in a small shack. However, the food quality is inconsistent, either a hit or miss, especially during peak hours. Waiting times can also be long during peak hours."
      },
      {
        userId: 2,
        buisnessId: 4,
        rating: 3,
        review: "Needs recycling or compost. I like the food, but not making so much trash just for a burger."
      },
      {
        userId: 3,
        buisnessId: 5,
        rating: 5,
        review: "I chose this restaurant out of convenience during my vacation near Boulder and I am so glad I did. I'm not familiar with Tibetan or Nepalese food but I'm now a big fan."
      },
      {
        userId: 6,
        buisnessId: 5,
        rating: 5,
        review: "Little Tibet in Boulder, Colorado has colorful and flavorful Tibetan and Indian food.  The Naan bread, pork belly chili fry, saag paneer and chicken tikka masala was all excellent.  The restaurant does not look like much, but it is some of the best Indian food I have had anywhere."
      },
      {
        userId: 4,
        buisnessId: 6,
        rating: 3,
        review: "Pho was good, generous with amount of  basil/limes/jalapeños/shoots. Broth was very dark for my friend who got chicken and added a lobster tail, typically broth is more clear but flavorful. Didn't have the traditional anise flavor but their version was tasty.  Mine seemed salty."
      },
      {
        userId: 2,
        buisnessId: 6,
        rating: 4,
        review: "Chez Thuy never disappoints. Their takeout meals always become lunch the next day, and the creamy peanut curry noodles have some of the best sauce I've ever tasted. They're extremely friendly, I'd recommend this local business to anyone!"
      },
      {
        userId: 4,
        buisnessId: 7,
        rating: 3,
        review:"The food was good. Small portions for the money and you don't get all of the sides that usually come with a Korean meal. Spicy pork bulgogi was drenched in sauce, too much IMO."
      },
      {
        userId: 5,
        buisnessId: 7,
        rating: 3,
        review: "What kind of Korean Restaurant doesn't offer sides of kimchi? This is ridiculous. Food is okay but I'm used to Korean restaurants where they serve little side dishes of fermented vegetables and stuff."
      },
      {
        userId: 6,
        buisnessId: 8,
        rating: 4,
        review: "So happy to have stumbled on this place. Everything we ordered was wonderful! And they have plenty of vegan options to choose from"
      },
      {
        userId: 4,
        buisnessId: 8,
        rating: 4,
        review: "Legit Vietnamese food in Boulder! Had the spicy beef pho, veggie rolls and iced coffee. Everything was amazing."
      },
      {
        userId: 2,
        buisnessId: 9,
        rating: 5,
        review: "Great ramen in Boulder! I loved the special spicy garlic ramen and I get the combo and also get the spicy beef gyozas. The gyozas are amazing!! Full of flavor and are so crispy! I also love the ramen. The broth itself is so flavorful and doesn't contain any pork like most ramen places."
      },
      {
        userId: 3,
        buisnessId: 9,
        rating: 4,
        review: "Have been here maybe half a dozen times. Big fan of the takoyaki octopus appetizer. The ramen is decent as well. My go to is the Garnet. Easy to find location in the mall next to Chipotle."
      },
      {
        userId: 4,
        buisnessId: 10,
        rating: 3,
        review: "mashburger makes great fries. It's why I'm sitting here yet again, downing unrefillable sugar water, in an eternal wait. There's always an eternal wait. Covid-19 times are tough, but some places handle it better than others. This Smashburger location handles it poorly. But... they have great fries."
      },
      {
        userId: 6,
        buisnessId: 10,
        rating: 3,
        review: "Have to admit the the service is quick and the staff friendly.  That being said the both my burger and the straw onions were excessively salty. I had the double bacon burger and the straw onions."
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
