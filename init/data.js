const sampleListing = [
  {
    productName: "Handmade Clay Pot",
    description: "Eco-friendly clay pot crafted by traditional artisans.",
    category: "Home Decor",
    price: 499,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4207475/pexels-photo-4207475.jpeg"
    },
  },
  {
    productName: "Handwoven Jute Bag",
    description: "Stylish and durable jute bag perfect for shopping.",
    category: "Bags",
    price: 799,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/5705493/pexels-photo-5705493.jpeg"
    }
  },
  {
    productName: "Wooden Jewelry Box",
    description: "Carved wooden box to store your jewelry safely.",
    category: "Accessories",
    price: 1299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg"
    }
  },
  {
    productName: "Handmade Scented Candle",
    description: "Lavender scented natural soy wax candle.",
    category: "Home Decor",
    price: 349,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg"
    }
  },
  {
    productName: "Knitted Wool Scarf",
    description: "Warm handmade scarf made with soft wool.",
    category: "Clothing",
    price: 699,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg"
    }
  },
  {
    productName: "Hand-Painted Wall Art",
    description: "Colorful painting for living room decoration.",
    category: "Art",
    price: 1599,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1570264/pexels-photo-1570264.jpeg"
    }
  },
  {
    productName: "Bamboo TableLamp",
    description: "Eco-friendly bamboo lamp with modern design.",
    category: "Lighting",
    price: 1199,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg"
    }
  },
  {
    productName: "Terracotta Tea Cup Set",
    description: "Traditional handmade terracotta tea cups (set of 4).",
    category: "Kitchen",
    price: 599,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
    }
  },
  {
    productName: "Macrame Wall Hanging",
    description: "Boho style handmade macrame wall decor.",
    category: "Home Decor",
    price: 899,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6207765/pexels-photo-6207765.jpeg"
    }
  },
  {
    productName: "Handmade Leather Wallet",
    description: "Premium handmade leather wallet for daily use.",
    category: "Accessories",
    price: 999,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg"
    }
  },
  {
    productName: "Crochet Baby Blanket",
    description: "Soft crochet blanket handmade for babies.",
    category: "Baby Products",
    price: 1299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/3662824/pexels-photo-3662824.jpeg"
    }
  },
  {
    productName: "Wooden Photo Frame",
    description: "Hand-carved wooden frame for your memories.",
    category: "Home Decor",
    price: 549,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
    }
  },
  {
    productName: "Handmade Soap Set",
    description: "Organic herbal soaps made by hand.",
    category: "Beauty",
    price: 399,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg"
    }
  },
  {
    productName: "Beaded Necklace",
    description: "Colorful handmade bead necklace.",
    category: "Jewelry",
    price: 699,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg"
    }
  },
  {
    productName: "Handcrafted Dream Catcher",
    description: "Traditional dream catcher for home decoration.",
    category: "Home Decor",
    price: 499,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6207759/pexels-photo-6207759.jpeg"
    }
  },
  {
    productName: "Pottery Flower Vase",
    description: "Elegant handmade pottery vase.",
    category: "Home Decor",
    price: 899,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4207475/pexels-photo-4207475.jpeg"
    }
  },
  {
    productName: "Handmade Notebook",
    description: "Recycled paper notebook crafted by hand.",
    category: "Stationery",
    price: 299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
    }
  },
  {
    productName: "Embroidered Cushion Cover",
    description: "Hand-embroidered cushion cover with traditional design.",
    category: "Home Decor",
    price: 649,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg"
    }
  },
  {
    productName: "Handmade Key Holder",
    description: "Wooden key holder for wall mounting.",
    category: "Home Decor",
    price: 399,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
    }
  },
  {
    productName: "Knitted Wool Cap",
    description: "Warm handmade wool cap for winter.",
    category: "Clothing",
    price: 499,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg"
    }
  },
  {
    productName: "Handmade Rakhi Set",
    description: "Traditional rakhi set made with beads and threads.",
    category: "Festival",
    price: 249,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/8887054/pexels-photo-8887054.jpeg"
    }
  },
  {
    productName: "Clay Diyas Pack",
    description: "Set of 10 handmade clay diyas for festivals.",
    category: "Festival",
    price: 299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6957083/pexels-photo-6957083.jpeg"
    }
  },
  {
    productName: "Handmade Tote Bag",
    description: "Cotton tote bag with hand-painted design.",
    category: "Bags",
    price: 599,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/5705494/pexels-photo-5705494.jpeg"
    }
  },
  {
    productName: "Resin Art Coasters",
    description: "Set of 4 handmade resin art coasters.",
    category: "Home Decor",
    price: 799,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6207770/pexels-photo-6207770.jpeg"
    }
  },
  {
    productName: "Handmade Bracelet",
    description: "Simple and elegant handmade bracelet.",
    category: "Jewelry",
    price: 349,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg"
    }
  },
];

module.exports = { data: sampleListing };
