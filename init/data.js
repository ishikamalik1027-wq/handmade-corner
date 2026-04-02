const sampleListing = [
  {
    productName: "Handmade Clay Pot",
    description: "Eco-friendly clay pot crafted by traditional artisans.",
    category: "Home Decor",
    price: 499,
    image: {
      filename: "listingimage",
      url :"https://www.shutterstock.com/image-photo/freshly-made-clay-mugs-pots-600nw-2483971003.jpg"
    },
  },
  {
    productName: "Handwoven Jute Bag",
    description: "Stylish and durable jute bag perfect for shopping.",
    category: "Bags",
    price: 799,
    image: {
      filename: "listingimage",
      url : "https://i.ytimg.com/vi/FP7b_o2QaXE/maxresdefault.jpg"
    }
  },
  {
    productName: "Wooden Jewelry Box",
    description: "Carved wooden box to store your jewelry safely.",
    category: "Accessories",
    price: 1299,
    image: {
      filename: "listingimage",
      url: "https://5.imimg.com/data5/SELLER/Default/2023/1/HS/ZH/CN/182213604/engraved-wooden-jewellery-box-with-mirror-10in-x-6in-x-4in-.jpg"
    }
    },
  {
    productName: "Handmade Scented Candle",
    description: "Lavender scented natural soy wax candle.",
    category: "Home Decor",
    price: 349,
    image: {
      filename: "listingimage",
      url: "https://thumbs.dreamstime.com/b/silhouette-white-candle-plaster-cache-pot-captured-close-up-features-handmade-scented-product-label-space-432593215.jpg"
    }
    },
  {
    productName: "Knitted Wool Scarf",
    description: "Warm handmade scarf made with soft wool.",
    category: "Clothing",
    price: 699,
    image: {
      filename: "listingimage",
      url: "https://t3.ftcdn.net/jpg/18/56/57/60/360_F_1856576080_4LtT5ItFZuPHduRaIRgrhkZxmSQRkvXE.jpg"
    }
  },
  {
    productName: "Hand-Painted Wall Art",
    description: "Colorful painting for living room decoration.",
    category: "Art",
    price: 1599,
    image: {
      filename: "listingimage",
      url : "https://dessineart.com/cdn/shop/files/Image-1-Mughal-Motifs-Madhubani-Style-08-tile_2048x.jpg?v=1739012069"
    }
  },
  {
    productName: "Bamboo TableLamp",
    description: "Eco-friendly bamboo lamp with modern design.",
    category: "Lighting",
    price: 1199,
    image: {
      filename: "listingimage",
      url:"https://m.media-amazon.com/images/I/917rccDO1YL.jpg"
    }
  },
  {
    productName: "Terracotta Tea Cup Set",
    description: "Traditional handmade terracotta tea cups (set of 4).",
    category: "Kitchen",
    price: 599,
    image: {
      filename: "listingimage",
      url:"https://brownliving.in/cdn/shop/files/terracotta-maharaja-tea-cup-set-of-6-handcrafted-natural-clay-cups-tc-3-the-handicraftian-8391664.jpg?v=1763573379"
    }
  },
  {
    productName: "Macrame Wall Hanging",
    description: "Boho style handmade macrame wall decor.",
    category: "Home Decor",
    price: 899,
    image: {
      filename: "listingimage",
      url:"https://i.etsystatic.com/24528021/r/il/c3fd73/3973359140/il_570xN.3973359140_jiq7.jpg"
    }
  },
  {
    productName: "Handmade Leather Wallet",
    description: "Premium handmade leather wallet for daily use.",
    category: "Accessories",
    price: 999,
    image: {
      filename: "listingimage",
      url:"https://m.media-amazon.com/images/I/717s0ERM2EL._AC_UY1100_.jpg"
    }
  },
  {
    productName: "Crochet Baby Blanket",
    description: "Soft crochet blanket handmade for babies.",
    category: "Baby Products",
    price: 1299,
    image: {
      filename: "listingimage",
      url:"https://thispixiecreates.com/wp-content/uploads/2021/05/331909865_1161224397888496_5232097217820412555_n-min.jpg"
    }
  },
  {
    productName: "Wooden Photo Frame",
    description: "Hand-carved wooden frame for your memories.",
    category: "Home Decor",
    price: 549,
    image: {
      filename: "listingimage",
      url:"https://5.imimg.com/data5/SELLER/Default/2022/3/HX/LP/OC/40050390/personalized-wooden-photo-frame-design-krishna-500x500.jpg"
    }
  },
  {
    productName: "Handmade Soap Set",
    description: "Organic herbal soaps made by hand.",
    category: "Beauty",
    price: 399,
    image: {
      filename: "listingimage",
      url:"https://cdn.pixabay.com/photo/2020/03/13/03/58/handmade-soap-4926841_1280.jpg"
    }
  },
  {
    productName: "Beaded Necklace",
    description: "Colorful handmade bead necklace.",
    category: "Jewelry",
    price: 699,
    image: {
      filename: "listingimage",
      url:"https://i.pinimg.com/474x/b8/a0/2c/b8a02c3c778dd52cb6209b6c808f6863.jpg"
    }
  },
  {
    productName: "Handcrafted Dream Catcher",
    description: "Traditional dream catcher for home decoration.",
    category: "Home Decor",
    price: 499,
    image: {
      filename: "listingimage",
      url:"https://cdn01.pinkoi.com/product/qrcCJzAZ/3/640x530.jpg"
    }
  },
  {
    productName: "Pottery Flower Vase",
    description: "Elegant handmade pottery vase.",
    category: "Home Decor",
    price: 899,
    image: {
      filename: "listingimage",
      url:"https://images.pexels.com/photos/4207475/pexels-photo-4207475.jpeg?cs=srgb&dl=pexels-karola-g-4207475.jpg&fm=jpg"
    }
  },
  {
    productName: "Handmade Notebook",
    description: "Recycled paper notebook crafted by hand.",
    category: "Stationery",
    price: 299,
    image: {
      filename: "listingimage",
      url:"https://m.media-amazon.com/images/I/712qHUhCjzL.jpg"
    }
  },
  {
    productName: "Embroidered Cushion Cover",
    description: "Hand-embroidered cushion cover with traditional design.",
    category: "Home Decor",
    price: 649,
    image: {
      filename: "listingimage",
      url:"https://images.woodenstreet.de/image/cache/data/eyda/embroidered-cotton-cushion-covers-set-of-2-green18-x-18-inch/30-5/24-750x650.jpg"
    }
  },
  {
    productName: "Handmade Key Holder",
    description: "Wooden key holder for wall mounting.",
    category: "Home Decor",
    price: 399,
    image:  {
      filename: "listingimage",
      url:"https://i.ytimg.com/vi/5GYBETdKgbU/maxresdefault.jpg"
    }
  },
  {
    productName: "Knitted Wool Cap",
    description: "Warm handmade wool cap for winter.",
    category: "Clothing",
    price: 499,
    image: {
      filename: "listingimage",
      url:"https://static.vecteezy.com/system/resources/thumbnails/073/265/041/small/cozy-knitted-winter-hat-with-pine-cones-and-berries-bokeh-lights-background-blurred-lights-photo.jpeg"
    }
  },
  {
    productName: "Handmade Rakhi Set",
    description: "Traditional rakhi set made with beads and threads.",
    category: "Festival",
    price: 249,
    image: {
      filename: "listingimage",
      url:"https://traditionalrakhi.com/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-26-at-14.31.14-1.jpeg"
    }
  },
  {
    productName: "Clay Diyas Pack",
    description: "Set of 10 handmade clay diyas for festivals.",
    category: "Festival",
    price: 299,
    image: {
      filename: "listingimage",
      url:"https://m.media-amazon.com/images/I/81RpLF7ywsL._AC_UF1000,1000_QL80_.jpg"
    }
  },
  {
    productName: "Handmade Tote Bag",
    description: "Cotton tote bag with hand-painted design.",
    category: "Bags",
    price: 599,
    image:  {
      filename: "listingimage",
      url:"https://i.ytimg.com/vi/ocw8LqnrJ6I/maxresdefault.jpg"
    }
  },
  {
    productName: "Resin Art Coasters",
    description: "Set of 4 handmade resin art coasters.",
    category: "Home Decor",
    price: 799,
    image:  {
      filename: "listingimage",
      url:"https://i.ytimg.com/vi/MEZsBtJ215E/maxresdefault.jpg"
    }
  },
  {
    productName: "Handmade Bracelet",
    description: "Simple and elegant handmade bracelet.",
    category: "Jewelry",
    price: 349,
    image: {
      filename: "listingimage",
      url:"https://www.shutterstock.com/image-photo/black-bracelet-eye-onyx-hematite-600nw-2658369989.jpg"
    }
  },
];

module.exports = { data: sampleListing};