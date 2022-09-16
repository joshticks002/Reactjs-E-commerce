const SHOP_DATA = [
  {
    id: 1,
    title: "Hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: "Mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
  {
    id: 6,
    title: 'children',
    items: [
        {
            id: 37,
            name: "Jack Bot",
            imageUrl: 'https://ibb.co/X8969WC',
            price: 340
        },
        {
            id: 38,
            name: "Express road",
            imageUrl: 'https://ibb.co/5WxS7Hn',
            price: 120
        },
        {
            id: 39,
            name: "Letters board",
            imageUrl: 'https://ibb.co/C9PBrSW',
            price: 38
        },
        {
            id: 40,
            name: "Castle build",
            imageUrl: 'https://ibb.co/gJQ9ptT',
            price: 79
        },
        {
            id: 41,
            name: "Travery rail",
            imageUrl: 'https://ibb.co/fYrpMLB',
            price: 80
        },
        {
            id: 42,
            name: "Pin ring",
            imageUrl: 'https://ibb.co/ZWR27w5',
            price: 160
        },
    ],
  },
  {
    id: 7,
    title: 'iPhones',
    items: [
        {
            id: 43,
            name: "iPhone XR",
            imageUrl: 'https://ibb.co/S7CNB7h',
            price: 340
        },
        {
            id: 44,
            name: "iPhone 13",
            imageUrl: 'https://ibb.co/P4DrY2H',
            price: 1120
        },
        {
            id: 45,
            name: "iPhone 7",
            imageUrl: 'https://ibb.co/swJYrM3',
            price: 199
        },
        {
            id: 46,
            name: "iPhone X",
            imageUrl: 'https://ibb.co/WWkG3cJ',
            price: 299
        },
        {
            id: 47,
            name: "iPhone XS",
            imageUrl: 'https://ibb.co/zPM7Zsc',
            price: 450
        },
        {
            id: 48,
            name: "iPhone X",
            imageUrl: 'https://ibb.co/rMsFzDb',
            price: 279
        },
    ],
  },
  {
    id: 8,
    title: 'babies',
    items: [
        {
            id: 49,
            name: "italian suit",
            imageUrl: 'https://ibb.co/yp9kCf7',
            price: 34
        },
        {
            id: 50,
            name: "the-young man",
            imageUrl: 'https://ibb.co/kMqqySq',
            price: 112
        },
        {
            id: 51,
            name: "frenzy pack",
            imageUrl: 'https://ibb.co/5LdZrgQ',
            price: 19
        },
        {
            id: 52,
            name: "burf jacket",
            imageUrl: 'https://ibb.co/hRVpF3s',
            price: 29
        },
        {
            id: 53,
            name: "summer break wear",
            imageUrl: 'https://ibb.co/sRwjqN4',
            price: 45
        },
        {
            id: 54,
            name: "always fr0J5",
            imageUrl: 'https://ibb.co/8NsgXrn',
            price: 27
        },
    ],
  },
  {
    id: 9,
    title: 'laptops',
    items: [
        {
            id: 55,
            name: "Dell X9-GH",
            imageUrl: 'https://ibb.co/frpmBxL',
            price: 350
        },
        {
            id: 56,
            name: "Macbook Pro",
            imageUrl: 'https://ibb.co/tcb9kVR',
            price: 1150
        },
        {
            id: 57,
            name: "Macbook Air",
            imageUrl: 'https://ibb.co/0KBw9pz',
            price: 550
        },
        {
            id: 58,
            name: "Dell So-FA",
            imageUrl: 'https://ibb.co/v3R68wL',
            price: 380
        },
    ],
  }
];

export default SHOP_DATA;
