'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Photos', [
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/uamm1pf1W7bs0u-FRMSjlQ/o.jpg",
        businessId: 1,
        reviewId: 1,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/yxO4EtjYEwXt3SU85Ezkmw/o.jpg",
        businessId: 1,
        reviewId: 1,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/MzBVv5cJOR7frbDB931aPA/o.jpg",
        businessId: 1,
        reviewId: 2,
        userId: 1,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/twJepRhjgH1CyJKtYFyJ3A/o.jpg",
        businessId: 1,
        reviewId: 2,
        userId: 1,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/LTIFrbeBJxt2uqAUKYXRXw/o.jpg",
        businessId: 2,
        reviewId: 3,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/xUn_f0EZofULSYGA2IiLtA/o.jpg",
        businessId: 2,
        reviewId: 3,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/qb3ycBrc9F1vIStHCuFjVA/o.jpg",
        businessId: 2,
        reviewId: 4,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/EvPIWJjbkMud4o_unCAOgQ/o.jpg",
        businessId: 2,
        reviewId: 4,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/r8fDxdbmHWGsl6PT3P46Pw/o.jpg",
        businessId: 3,
        reviewId: 5,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/GYqc4vBVtzIe0QTuH5j0gQ/o.jpg",
        businessId: 3,
        reviewId: 5,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/YUwoK7SeBvUGVlNdVvNLQA/o.jpg",
        businessId: 3,
        reviewId: 6,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/wV4ma96NlyfzItTDYjPu_w/o.jpg",
        businessId: 3,
        reviewId: 6,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/O4B3IzYeV-dVob8K1xCSGA/o.jpg",
        businessId: 4,
        reviewId: 7,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/MDU6aUwhzuuCpvGGPPaNLw/o.jpg",
        businessId: 4,
        reviewId: 7,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/aMxB5_4_AtKn8RCcJSiGUg/o.jpg",
        businessId: 4,
        reviewId: 8,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/xnAYM8CBbjap8Th9D7u0oQ/o.jpg",
        businessId: 4,
        reviewId: 8,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/CUaAJAiS8bdRhzlxwn75yg/o.jpg",
        businessId: 5,
        reviewId: 9,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/wZSrvCK1GycANwaEelDMLA/o.jpg",
        businessId: 5,
        reviewId: 9,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/Q6sdY0O68nyV7_IEDao78g/o.jpg",
        businessId: 5,
        reviewId: 10,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/Uum2HtPpPpn8I3Qd1JMXmg/o.jpg",
        businessId: 5,
        reviewId: 10,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/Qy8ly3ox_hepB7uE94AyMQ/o.jpg",
        businessId: 6,
        reviewId: 11,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/w3A_aeliLOKPuRTIuGoSyw/o.jpg",
        businessId: 6,
        reviewId: 11,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/GP_WIfkIaHb-jD6njCVFKQ/o.jpg",
        businessId: 6,
        reviewId: 12,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/L5bluyUEXnoXT4MZYFJWCw/o.jpg",
        businessId: 6,
        reviewId: 12,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/vGgpZWSXf-D2iCh4n12zBA/o.jpg",
        businessId: 7,
        reviewId: 13,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/hAjLZbnocZOju0uHFSf2Kg/o.jpg",
        businessId: 7,
        reviewId: 13,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/LyY9a4H3YirKcPQ4VtR4Aw/o.jpg",
        businessId: 7,
        reviewId: 14,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/SKU89OVOJedpVdaN7dRjOg/o.jpg",
        businessId: 7,
        reviewId: 14,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/bTBNdJ7vAQBKmcdbzAhvWw/o.jpg",
        businessId: 8,
        reviewId: 15,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/sUmJYSIL9R4TqPNJnE7gSA/o.jpg",
        businessId: 8,
        reviewId: 15,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/Jjwcxeu3rbWvccSYXg3F2A/o.jpg",
        businessId: 8,
        reviewId: 16,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/x2uDi3LXQeNbQqNR-W5YUg/o.jpg",
        businessId: 8,
        reviewId: 16,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/WM4JquilzHEZX061FFDj9Q/o.jpg",
        businessId: 9,
        reviewId: 17,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/oirOVp8gIjYV-EXDeHNSWw/o.jpg",
        businessId: 9,
        reviewId: 17,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/nJuJznMDXx3kCpaysr5OVQ/o.jpg",
        businessId: 9,
        reviewId: 18,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/2aRuGZywR21n0_qImeUsVA/o.jpg",
        businessId: 9,
        reviewId: 18,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/OqM6RljpF1QCGjgCZ6-NnA/o.jpg",
        businessId: 10,
        reviewId: 19,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/Jfe3TTI4DdNPVuE76y5NQw/o.jpg",
        businessId: 10,
        reviewId: 19,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/TTk9-wHclw1P9yVJU_jISQ/o.jpg",
        businessId: 10,
        reviewId: 20,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/wpHvypD6E5vzsLGuwTaHCg/o.jpg",
        businessId: 10,
        reviewId: 20,
        userId: 6,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/BatpLZry0V8Wph-uh56Yxg/o.jpg",
        businessId: 11,
        reviewId: 21,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/vxDd8u6NhnouFpHfkUVJdg/o.jpg",
        businessId: 11,
        reviewId: 21,
        userId: 2,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/oEGaRAiMHIInKTz2KImtRQ/o.jpg",
        businessId: 11,
        reviewId: 22,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/Wj14uhnc4zqhbMDLpUZumA/o.jpg",
        businessId: 11,
        reviewId: 22,
        userId: 3,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/VI1OLVxkMLED64Lq9YiDwA/o.jpg",
        businessId: 12,
        reviewId: 23,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/H7oi_AhpLbuLD-UngdJD6g/o.jpg",
        businessId: 12,
        reviewId: 23,
        userId: 5,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/MBI0_Y0tzouSEdjQvCu8dg/o.jpg",
        businessId: 12,
        reviewId: 24,
        userId: 4,
      },
      {
        imageURL: "https://s3-media0.fl.yelpcdn.com/bphoto/wFKE7XBFsjYU_fvOUBBMqQ/o.jpg",
        businessId: 12,
        reviewId: 24,
        userId: 4,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
