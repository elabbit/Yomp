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
        businessId: 1,
        rating: 5,
        review: "The staff is super friendly and food is fresh. I go here regularly and they've been consistent with fresh food and friendly staff. The restaurant is clean and has a nice modern environment. Great burgers and fries!"
      },
      {
        userId: 1,
        businessId: 1,
        rating: 4,
        review: "I queued up in Madison Square Park in the early years. Wow, that was an amazing burger! But, in recent years, it hasn't been quite as good as memory served me. That was until Friday! The burger was as great as I remembered it being back in 2001. Welcome to Boulder and keep up the great food!"
      },
      {
        userId: 3,
        businessId: 2,
        rating: 4,
        review: "Classic, American-Style burgers and Hot dogs! Fast food at its finest. The Shakes top it all off."
      },
      {
        userId: 4,
        businessId: 2,
        rating: 5,
        review: "I truly do love 5 Guys, best burger you can get.  Their also pretty accomidating if you don't want a bun they will toss everything you need in a bowl. The staff is always friendly and the place is always clean.  Their menu is simple and easy to read, and the prices are straight forward.  Oh and if you buy the fries, get them CAJUN STYLE!"
      },
      {
        userId: 2,
        businessId: 3,
        rating: 2,
        review: "This place needs an adult in management at this location.  Food is good but orders are always completed incorrectly!  Get an adult in here that can guide these kids. 4 people here and i know of 2 orders that were completely wrong."
      },
      {
        userId: 6,
        businessId: 3,
        rating: 3,
        review: "I had heard mixed reviews regarding this place. Went in to order and they had very few customers at noon. Ordered two burgers and fries with just water to drink and bill was $27! They had 7 people working so they are fully staffed. We waited 29 minutes on our food! Food was tasty but way too expensive for a fast food restaurant and service was awfully slow. We will not go back. I only gave them 3 stars because taste of food was very good."
      },
      {
        userId: 3,
        businessId: 4,
        rating: 3,
        review: "The snarfburger and onion rings are delicious. It is a no-frills fastfood outlet that is located in a small shack. However, the food quality is inconsistent, either a hit or miss, especially during peak hours. Waiting times can also be long during peak hours."
      },
      {
        userId: 2,
        businessId: 4,
        rating: 3,
        review: "Needs recycling or compost. I like the food, but not making so much trash just for a burger."
      },
      {
        userId: 3,
        businessId: 5,
        rating: 5,
        review: "This was my first visit to this Red Robin location. I didn't have to wait long to be seated. My friend and I were seated at a booth. I did observe that Robin Robin, practices safe distance within their restaurant. I was amazed how fast my food was brought to my table, after I ordered it. I am looking forward to dining at Red Robin in the near future."
      },
      {
        userId: 6,
        businessId: 5,
        rating: 4,
        review: "As usual great dinner at Red Robin. I aways order the turkey burger with onion straws which is my favorite. My wife ordered the burger with guacamole and oinion straws. We always enjoy sitting in the bar area due to the great sports coverage. Here is a good tip to resister in line and there are special 2 for one offers etc. we will be back for sure"
      },
      {
        userId: 3,
        businessId: 6,
        rating: 4,
        review: "Two of us drove here this evening to get to Checker Burgers with cheese and bacon for $5. You cannot beat that. And the burgers are delish! The secret sauce seems to lean more toward Russian dressing. The burger was fresh, hot, and juicy-- this really hit the spot. Bonus: Our server was fast and friendly. Thanks, Checker Burger!"
      },
      {
        userId: 2,
        businessId: 6,
        rating: 3,
        review: "Checkers has typical American fast food fare.  The food is decent but not outstanding.  It is a nice place to stop for a quick bite to eat but not worth going out of the way for food."
      },
      {
        userId: 4,
        businessId: 7,
        rating: 5,
        review:"Always consistent. Appreciate how they have people outside to take your order and speed things up. Pro tip- get the burger with extra everything, animal style, and cut chili peppers. I like mine lettuce wrapped. It's like a salad sandwich. Plus, add some grilled onions on the fries. Voila. Done deal. Enjoy."
      },
      {
        userId: 5,
        businessId: 7,
        rating: 5,
        review: "Just wanted to update this in n out and compliment everyone on the excellent customer service! Very friendly and no matter what time you go, expect to wait in line at any in n out franchise. This location however, has a fast and consistent line reminding myself why I get so excited to get a double double meal animal style everything, every time I go. Huge shout to everyone at this location and appreciate everything you all do in this time of our lives"
      },
      {
        userId: 6,
        businessId: 8,
        rating: 4,
        review: "Stopped in because I am currently obsessed with patty melts and found out that Habit Burger can switch to sourdough on any charburger.  The burger was good but a little on the small side.  The onion rings are great and the green bean tempura amazing.  I would come back just for the sides but also want to check out the ahi burger next time.  Service very friendly."
      },
      {
        userId: 4,
        businessId: 8,
        rating: 4,
        review: "As for the food, my family and I all ordered the Double Char Burger with added bacon and a side of fries. The burger, although a tiny bit sloppy looking, was incredibly delicious and packed with flavor! The patties were cooked nicely, the bacon was crispy and the fries were decent but I didn't mind that too much because of how good the burger really tasted. If you're looking for a good burger joint in the Teterboro/Carlstadt area, I'd recommend coming to this location for a bite!"
      },
      {
        userId: 2,
        businessId: 9,
        rating: 4,
        review: "Even though I have lived in Raleigh for the past 5 years I had never had a chance to try Char Grill for myself. I finally decided to go and try it and I was not disappointed! I really wish I had gone sooner, it's a really good place to get some quick, good, and pretty affordable food. I tried their grilled chicken sandwich and fries. The sandwich was really juicy and had a good amount of toppings, and the fries were perfectly salty and crunchy. I will definitely be going back, really solid fast food shop!"
      },
      {
        userId: 5,
        businessId: 9,
        rating: 4,
        review: "Nom nom nom. This is my favorite burger spot! Char grill has a great classic burger and is made right in front of you, fresh to order. They have a few different options & I recommend a milkshake to go with it! The milkshakes are really soft serve ice cream but always hit the spot. Their fries are pretty good too! This is definitely a guilty pleasure. Two people can eat a burger, fries, and share a large milkshake for about $15!"
      },
      {
        userId: 4,
        businessId: 10,
        rating: 3,
        review: "Smashburger makes great fries. It's why I'm sitting here yet again, downing unrefillable sugar water, in an eternal wait. There's always an eternal wait. Covid-19 times are tough, but some places handle it better than others. This Smashburger location handles it poorly. But... they have great fries."
      },
      {
        userId: 6,
        businessId: 10,
        rating: 3,
        review: "Have to admit the the service is quick and the staff friendly.  That being said the both my burger and the straw onions were excessively salty. I had the double bacon burger and the straw onions."
      },
      {
        userId: 2,
        businessId: 11,
        rating: 4,
        review: "Freddy's offers excellent burgers and fries and onion rings and sundaes! Everything is made to order so the drive through does take some time to get through but I think it is worth the wait. You know your food is being made freshly and exactly how you ordered. I highly recommend trying the onion rings and the PBC sundae. It is a nice mix of chocolate, peanut butter and banana."
      },
      {
        userId: 3,
        businessId: 11,
        rating: 4,
        review: "I like Freddy's. Not sure what's up with the bad reviews. Must be the snobby people coming in expecting to be served hand and foot again. Those guys!!! Such stinkers! The food is good, fast, and tastes better than your average McDonald's and Wendy's."
      },
      {
        userId: 5,
        businessId: 12,
        rating: 3,
        review: "I was in earlier this week and no greeting and grill chicken sandwich was very dry. The butter burgers are awesome. Service is slow. Can't wait to try something else on the large menu."
      },
      {
        userId: 4,
        businessId: 12,
        rating: 4,
        review: "Burgers are good.. frys are good.. customer service seems to lack .. wish they wouldn't get an attitude with me over drinks having ice or me asking for some sauce .. other than that this place is good fast food"
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
