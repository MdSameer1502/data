const products = [
    {
        id: 1,
        name: "Navy Dupion Kurta Set",
        price: 1380,
        category: "Kurta",
        images: [
            "images/kurta1-image2.png",
            "images/kurta1-image1.png",
            "images/kurta1-image3.png",
        ],
        image: "images/kurta1-image2.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire.The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone.Ideal for weddings, celebrations, or festive gatherings.",
        specs: [
            "Top Fabric- Dupion",
            "Top colour- Navy",
            "Line Fabric- NA",
            "Bottom Fabric- Dupion",
            "Bottom colour- Light Golden",
            "Bottom type- Churidar",
            "Disclaimer Note- Slight variation in colour/Print/Design may vary."
        ],
        featured: true
    },
    {
        id: 2,
        name: "Navy Dupion Kurta Set",
        price: 1700,
        category: "Kurta",
        images: [
            "imageskurta2-image1.png",
            "images/kurta2-image2.png",
            "images/kurta2-image3.png",
        ],
        image: "images/kurta2-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire.The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone.Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden ", "Top Fabric: Dupion", "Bottom Fabric: Dupion"],
        featured: true
    },

    // --------------------------------------------------
    // Below are 24 new products (IDs 3 to 26)
    // --------------------------------------------------

    {
        id: 3,
        name: "Maroon Dupion Kurta Set",
        price: 1700,
        category: "Kurta",
        images: [
            "images/kurta3-image1.png",
            "images/kurta3-image2.png",
            "images/kurta3-image3.png",
        ],
        image: "images/kurta3-image1.png",
        description: "Festive Ready: Maroon Dupion Kurta Set Make a statement at your next event with this elegant attire.The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone.Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Maroon", "Bottom Color: Light golden", "Top Fabric: Dupion", "Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 4,
        name: "Maroon Dupion Kurta Set",
        price: 1650,
        category: "Kurta",
        images: [
            "images/kurta4-image2.png",
            "images/kurta4-image3.png",
        ],
        image: "images/kurta4-image1.png",
        description: "Festive Ready: Maroon Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Maroon", " Bottom Color: Light golden","Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 5,
        name: "Navy Dupion Kurta Set",
        price: 1650,
        category: "Kurta",
        images: [
            "images/kurta5-image1.png",
            "images/kurta5-image2.png",
            "images/kurta5-image3.png",
        ],
        image: "images/kurta5-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", " Bottom Color: Light golden ","Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: true
    },
    {
        id: 6,
        name: "Navy Dupion Kurta Set",
        price: 1650,
        category: "Kurta",
        images: [
            "images/kurta5-image1.png",
            "images/kurta6-image2.png",
            "images/kurta6-image3.png",
        ],
        image: "images/kurta6-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: [" Top Color: Navy", "Bottom Color: Light golden","Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 7,
        name: "Bottle green Dupion Kurta Set",
        price: 1750,
        category: "Kurta",
        images: [
            "images/kurta7-image1.png",
            "images/kurta7-image2.png",
            "images/kurta7-image3.png",
        ],
        image: "images/kurta7-image1.png",
        description: "Festive Ready: Bottle green Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Bottle green", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 8,
        name: "Navy Dupion Kurta Set",
        price: 1750,
        category: "Kurta",
        images: [
            "images/kurta8-image1.png",
            "images/kurta8-image2.png",
            "images/kurta8-image3.png",
        ],
        image: "images/kurta8-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: [" Top Color: Navy", "Bottom Color: Light golden "," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 9,
        name: "Navy Dupion Kurta Set",
        price: 1700,
        category: "Kurta",
        images: [
            "images/kurta9-image1.png",
            "images/kurta9-image2.png",
            "images/kurta9-image3.png",
        ],
        image: "images/kurta9-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: true
    },
    {
        id: 10,
        name: "Navy Dupion Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta10-image1.png",
            "images/kurta10-image2.png",
            "images/kurta10-image3.png",
        ],
        image: "images/kurta10-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 11,
        name: "Navy Dupion Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta11-image1.png",
            "images/kurta11-image2.png",
            "images/kurta11-image3.png",
        ],
        image: "images/kurta11-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 12,
        name: "Navy Dupion Kurta Set",
        price: 1850,
        category: "Kurta",
        images: [
            "images/kurta12-image1.png",
            "images/kurta12-image2.png",
            "images/kurta12-image3.png",
        ],
        image: "images/kurta12-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 13,
        name: "Navy Dupion Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta13-image1.png",
            "images/kurta13-image2.png",
            "images/kurta13-image3.png",
        ],
        image: "images/kurta13-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 14,
        name: "Navy Dupion Kurta Set",
        price: 1530,
        category: "Kurta",
        images: [
            "images/kurta14-image1.png",
            "images/kuxrta14-image2.png",
            "images/kurta14-image3.png",
        ],
        image: "images/kurta14-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 15,
        name: "Navy Dupion Kurta Set",
        price: 1900,
        category: "Kurta",
        images: [
            "images/kurta15-image1.png",
            "images/kurta15-image2.png",
            "images/kurta15-image3.png",
        ],
        image: "images/kurta15-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 16,
        name: "Navy Dupion Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta16-image1.png",
            "images/kurta16-image2.png",
            "images/kurta16-image3.png",
        ],
        image: "images/kurta16-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 17,
        name: "Navy Dupion Kurta Set",
        price: 1750,
        category: "Kurta",
        images: [
            "images/kurta17-image1.png",
            "images/kurta17-image2.png",
            "images/kurta17-image3.png",
        ],
        image: "images/kurta17-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 18,
        name: "Navy Dupion Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta18-image1.png",
            "images/kurta18-image2.png",
            "images/kurta18-image3.png",
        ],
        image: "images/kurta18-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 19,
        name: "Navy Dupion Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta19-image1.png",
            "images/kurta19-image2.png",
            "images/kurta19-image3.png",
        ],
        image: "images/kurta19-image1.png",
        description: "Festive Ready: Navy Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Navy", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 20,
        name: "Bottle green Dupion Kurta Set",
        price: 1700,
        category: "Kurta",
        images: [
            "images/kurta20-image1.png",
            "images/kurta20-image2.png",
            "images/kurta20-image3.png",
        ],
        image: "images/kurta20-image1.png",
        description: "Festive Ready: Bottle green Dupion Kurta Set Make a statement at your next event with this elegant attire. The Dupion used for the top provides a fine drape and subtle sheen, while the Dupion bottom complements it perfectly in Light golden  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: [" Top Color: Bottle green", "Bottom Color: Light golden"," Top Fabric: Dupion","Bottom Fabric: Dupion"],
        featured: false
    },
    {
        id: 21,
        name: "Black Cotton Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta21-image1.png",
            "images/kurta21-image2.png",
            "images/kurta21-image3.png",
        ],
        image: "images/kurta21-image1.png",
        description: "Festive Ready: Black Cotton Kurta Set Make a statement at your next event with this elegant attire. The Cotton used for the top provides a fine drape and subtle sheen, while the Cotton bottom complements it perfectly in White  tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Black", "Bottom Color: White "," Top Fabric: Cotton","Bottom Fabric: Cotton"],
        featured: false
    },
    {
        id: 22,
        name: "White Cotton Kurta Set",
        price: 1800,
        category: "Kurta",
        images: [
            "images/kurta22-image1.png",
            "images/kurta22-image2.png",
            "images/kurta22-image3.png",
        ],
        image: "images/kurta22-image1.png",
        description: "Festive Ready: White Cotton Kurta Set Make a statement at your next event with this elegant attire. The Cotton used for the top provides a fine drape and subtle sheen, while the Cotton bottom complements it perfectly in White tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: [" Top Color: White", " Bottom Color: White","Top Fabric: Cotton","Bottom Fabric: Cotton"],
        featured: true
    },
    {
        id: 23,
        name: "Black Cotton Kurta Set",
        price: 1900,
        category: "Kurta",
        images: [
            "images/kurta23-image1.png",
            "images/kurta23-image2.png",
            "images/kurta23-image3.png",
        ],
        image: "images/kurta23-image1.png",
        description: "Festive Ready: Black Cotton Kurta Set Make a statement at your next event with this elegant attire. The Cotton used for the top provides a fine drape and subtle sheen, while the Cotton bottom complements it perfectly in White tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: [" Bottom Color: White", " Top Fabric: Cotton","Bottom Fabric: Cotton"],
        featured: false
    },
    {
        id: 24,
        name: "White Cotton  Kurta Set",
        price: 1900,
        category: "Kurta",
        images: [
            "images/kurta24-image1.png",
            "images/kurta24-image2.png",
            "images/kurta24-image3.png",
        ],
        image: "images/kurta24-image1.png",
        description: "Festive Ready: White Cotton  Kurta Set Make a statement at your next event with this elegant attire. The Cotton  used for the top provides a fine drape and subtle sheen, while the Cotton bottom complements it perfectly in White tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: White", "Bottom Color: White","Top Fabric: Cotton ","Bottom Fabric: Cotton"],
        featured: false
    },

    // last two
    {
        id: 25,
        name: "Half white Cotton Kurta Set",
        price: 2000,
        category: "Kurta",
        images: [
            "images/kurta25-image1.png",
            "images/kurta25-image2.png",
            "images/kurta25-image3.png",
        ],
        image: "images/kurta25-image1.png",
        description: "Festive Ready: Half white Cotton Kurta Set Make a statement at your next event with this elegant attire. The Cotton used for the top provides a fine drape and subtle sheen, while the Cotton  bottom complements it perfectly in Half white tone. Ideal for weddings, celebrations, or festive gatherings.",
        specs: ["Top Color: Half white", " Bottom Color: Half white"," Top Fabric: Cotton","Bottom Fabric: Cotton"],
        featured: true
    },
   
];
