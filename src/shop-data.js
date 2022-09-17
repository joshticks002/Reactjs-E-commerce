const SHOP_DATA = [{
        id: 1,
        title: "Hats",
        items: [{
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
        items: [{
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
        items: [{
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
        items: [{
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
        items: [{
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
        items: [{
                id: 37,
                name: "Jack Bot",
                imageUrl: 'https://i.ibb.co/Zm3v3fM/baby-natur-Hld-gd-WN7k-unsplash.jpg',
                price: 340
            },
            {
                id: 38,
                name: "Express road",
                imageUrl: 'https://i.ibb.co/Y7T1rsy/markus-spiske-OO89-95a-UC0-unsplash.jpg',
                price: 120
            },
            {
                id: 39,
                name: "Letters board",
                imageUrl: 'https://i.ibb.co/5jKT7J2/ryan-fields-Xz7-MMD5t-Zw-A-unsplash.jpg',
                price: 38
            },
            {
                id: 40,
                name: "Castle build",
                imageUrl: 'https://i.ibb.co/L1BRW9t/tai-s-captures-y4c-V-g-Qqm-VI-unsplash.jpg',
                price: 79
            },
            {
                id: 41,
                name: "Travery rail",
                imageUrl: 'https://i.ibb.co/hR2Wswh/tomas-petz-O8eo2-BC1-SOI-unsplash.jpg',
                price: 80
            },
            {
                id: 42,
                name: "Pin ring",
                imageUrl: 'https://i.ibb.co/Qr7DtqL/yuri-shirota-p0h-Dzt-R46cw-unsplash.jpg',
                price: 160
            },
        ],
    },
    {
        id: 7,
        title: 'iPhones',
        items: [{
                id: 43,
                name: "iPhone 13",
                imageUrl: 'https://i.ibb.co/4grWpg6/anthony-choren-Xk-Ev-CISUHPM-unsplash.jpg',
                price: 340
            },
            {
                id: 44,
                name: "iPhone X",
                imageUrl: 'https://i.ibb.co/3WRTsxZ/kevin-bhagat-Co-us-Q-kp-O0-unsplash.jpg',
                price: 1120
            },
            {
                id: 45,
                name: "iPhone XR",
                imageUrl: 'https://i.ibb.co/XskRTvJ/raphiell-alfaridzy-b-N4-Eu-SS5b68-unsplash.jpg',
                price: 199
            },
            {
                id: 46,
                name: "iPhone 7",
                imageUrl: 'https://i.ibb.co/xS1XsMT/james-lewis-Ns-LOi-Ljk-Rnc-unsplash.jpg',
                price: 299
            },
            {
                id: 47,
                name: "iPhone XS",
                imageUrl: 'https://i.ibb.co/wpkw4yH/alexandar-todov-v-DTgx5w-Jwao-unsplash.jpg',
                price: 450
            },
            {
                id: 48,
                name: "iPhone 12",
                imageUrl: 'https://i.ibb.co/TRLY79K/brandon-romanchuk-xpe7py-Nm-Ebw-unsplash.jpg',
                price: 279
            },
        ],
    },
    {
        id: 8,
        title: 'babies',
        items: [{
                id: 49,
                name: "italian suit",
                imageUrl: 'https://i.ibb.co/Rc183kX/gez-xavier-mansfield-b34-E1vh1t-YU-unsplash.jpg',
                price: 34
            },
            {
                id: 50,
                name: "the-young man",
                imageUrl: 'https://i.ibb.co/3kSSsCS/priscilla-du-preez-JGy-RJlk3id-E-unsplash.jpg',
                price: 112
            },
            {
                id: 51,
                name: "frenzy pack",
                imageUrl: 'https://i.ibb.co/QFMsvy9/sarah-dorweiler-fr0-J5-GIVyg-unsplash.jpg',
                price: 19
            },
            {
                id: 52,
                name: "burf jacket",
                imageUrl: 'https://i.ibb.co/9hD408S/daiga-ellaby-JZ51o-UOY8-unsplash.jpg',
                price: 29
            },
            {
                id: 53,
                name: "summer break wear",
                imageUrl: 'https://i.ibb.co/g9TyJf8/charlesdeluvio-4-K7-Bwa-HUGc-unsplash.jpg',
                price: 45
            },
            {
                id: 54,
                name: "always fr0J5",
                imageUrl: 'https://i.ibb.co/6rw0NHc/waldemar-brandt-cue0-Du-Z8c-UU-unsplash.jpg',
                price: 27
            },
        ],
    },
    {
        id: 9,
        title: 'laptops',
        items: [{
                id: 55,
                name: "Dell X9-GH",
                imageUrl: 'https://i.ibb.co/5s8qtRw/tarn-nguyen-Xl-Eaf-YGDv-V0-unsplash.jpg',
                price: 350
            },
            {
                id: 56,
                name: "Macbook Pro",
                imageUrl: 'https://i.ibb.co/kJ3dDVP/giorgio-trovato-8kr-X0-Hk-Xw8c-unsplash.jpg',
                price: 1150
            },
            {
                id: 57,
                name: "Macbook Air",
                imageUrl: 'https://i.ibb.co/wCKf35t/maxim-hopman-Hin-rzh-Od-Ws-unsplash.jpg',
                price: 550
            },
            {
                id: 58,
                name: "Dell So-FA",
                imageUrl: 'https://i.ibb.co/gShLCjt/dell-Gi3i-UJ1-Fwx-I-unsplash.jpg',
                price: 380
            },
        ],
    }
];

export default SHOP_DATA;