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
      url: "https://images.pexels.com/photos/29037186/pexels-photo-29037186.jpeg"
    }
  },
  {
    productName: "Wooden Jewelry Box",
    description: "Carved wooden box to store your jewelry safely.",
    category: "Accessories",
    price: 1299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/29624003/pexels-photo-29624003.jpeg"
    }
  },
  {
    productName: "Handmade Scented Candle",
    description: "Lavender scented natural soy wax candle.",
    category: "Home Decor",
    price: 349,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/20667239/pexels-photo-20667239.jpeg"
    }
  },
  {
    productName: "Knitted Wool Scarf",
    description: "Warm handmade scarf made with soft wool.",
    category: "Clothing",
    price: 699,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/5710116/pexels-photo-5710116.jpeg"
    }
  },
  {
    productName: "Hand-Painted Wall Art",
    description: "Colorful painting for living room decoration.",
    category: "Art",
    price: 1599,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/32702192/pexels-photo-32702192.jpeg"
    }
  },
  {
    productName: "Bamboo TableLamp",
    description: "Eco-friendly bamboo lamp with modern design.",
    category: "Lighting",
    price: 1199,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/31047258/pexels-photo-31047258.jpeg"
    }
  },
  {
    productName: "Terracotta Tea Cup Set",
    description: "Traditional handmade terracotta tea cups (set of 4).",
    category: "Kitchen",
    price: 599,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/5993611/pexels-photo-5993611.jpeg"
    }
  },
  {
    productName: "Macrame Wall Hanging",
    description: "Boho style handmade macrame wall decor.",
    category: "Home Decor",
    price: 899,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6806697/pexels-photo-6806697.jpeg"
    }
  },
  {
    productName: "Handmade Leather Wallet",
    description: "Premium handmade leather wallet for daily use.",
    category: "Accessories",
    price: 999,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6651189/pexels-photo-6651189.jpeg"
    }
  },
  {
    productName: "Crochet Baby Blanket",
    description: "Soft crochet blanket handmade for babies.",
    category: "Baby Products",
    price: 1299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/18642135/pexels-photo-18642135.jpeg"
    }
  },
  {
    productName: "Wooden Photo Frame",
    description: "Hand-carved wooden frame for your memories.",
    category: "Home Decor",
    price: 549,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/8059554/pexels-photo-8059554.jpeg"
    }
  },
  {
    productName: "Handmade Soap Set",
    description: "Organic herbal soaps made by hand.",
    category: "Beauty",
    price: 399,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/7827595/pexels-photo-7827595.jpeg"
    }
  },
  {
    productName: "Beaded Necklace",
    description: "Colorful handmade bead necklace.",
    category: "Jewelry",
    price: 699,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/12741367/pexels-photo-12741367.jpeg"
    }
  },
  {
    productName: "Handcrafted Dream Catcher",
    description: "Traditional dream catcher for home decoration.",
    category: "Home Decor",
    price: 499,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/6907910/pexels-photo-6907910.jpeg"
    }
  },
  {
    productName: "Pottery Flower Vase",
    description: "Elegant handmade pottery vase.",
    category: "Home Decor",
    price: 899,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/34046822/pexels-photo-34046822.jpeg"
    }
  },
  {
    productName: "Handmade Notebook",
    description: "Recycled paper notebook crafted by hand.",
    category: "Stationery",
    price: 299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/34151708/pexels-photo-34151708.jpeg"
    }
  },
  {
    productName: "Embroidered Cushion Cover",
    description: "Hand-embroidered cushion cover with traditional design.",
    category: "Home Decor",
    price: 649,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/11911940/pexels-photo-11911940.jpeg"
    }
  },
  {
    productName: "Handmade Key Holder",
    description: "Wooden key holder for wall mounting.",
    category: "Home Decor",
    price: 399,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/2402712/pexels-photo-2402712.jpeg"
    }
  },
  {
    productName: "Knitted Wool Cap",
    description: "Warm handmade wool cap for winter.",
    category: "Clothing",
    price: 499,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/11630887/pexels-photo-11630887.jpeg"
    }
  },
  {
    productName: "Handmade Rakhi Set",
    description: "Traditional rakhi set made with beads and threads.",
    category: "Festival",
    price: 249,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/32799156/pexels-photo-32799156.jpeg"
    }
  },
  {
    productName: "Clay Diyas Pack",
    description: "Set of 10 handmade clay diyas for festivals.",
    category: "Festival",
    price: 299,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/18979384/pexels-photo-18979384.jpeg"
    }
  },
  {
    productName: "Handmade Tote Bag",
    description: "Cotton tote bag with hand-painted design.",
    category: "Bags",
    price: 599,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/4937320/pexels-photo-4937320.jpeg"
    }
  },
  {
    productName: "Resin Art Coasters",
    description: "Set of 4 handmade resin art coasters.",
    category: "Home Decor",
    price: 799,
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/7258063/pexels-photo-7258063.jpeg"
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
