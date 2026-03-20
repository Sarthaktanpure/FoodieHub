const sampleRestaurants = [
  {
    title: "Urban Tadka",
    description: "Modern Indian flavors with a fusion twist.",
    cuisine: "Indian",
    priceRange: "₹₹",
    location: "Pune, Maharashtra",
    geometry: { type: "Point", coordinates: [73.8575, 18.5210] },
    image: {
      url: "https://images.unsplash.com/photo-1604908554164-4c3d2f3d71a3?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Wok Express",
    description: "Quick Chinese bites and street-style noodles.",
    cuisine: "Chinese",
    priceRange: "₹",
    location: "Mumbai, Maharashtra",
    geometry: { type: "Point", coordinates: [72.8785, 19.0755] },
    image: {
      url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Trattoria Roma",
    description: "Authentic Italian dining experience.",
    cuisine: "Italian",
    priceRange: "₹₹₹",
    location: "Bangalore, Karnataka",
    geometry: { type: "Point", coordinates: [77.5960, 12.9725] },
    image: {
      url: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Grill & Chill",
    description: "Burgers, fries and grilled delights.",
    cuisine: "Fast Food",
    priceRange: "₹",
    location: "Delhi, India",
    geometry: { type: "Point", coordinates: [77.1040, 28.7050] },
    image: {
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Sakura Bites",
    description: "Japanese sushi and ramen bar.",
    cuisine: "Japanese",
    priceRange: "₹₹₹",
    location: "Hyderabad, Telangana",
    geometry: { type: "Point", coordinates: [78.4875, 17.3860] },
    image: {
      url: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Brew Haven",
    description: "Cozy café with coffee and desserts.",
    cuisine: "Cafe",
    priceRange: "₹₹",
    location: "Goa, India",
    geometry: { type: "Point", coordinates: [74.1250, 15.3005] },
    image: {
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Royal Tandoor",
    description: "North Indian tandoori specialties.",
    cuisine: "Indian",
    priceRange: "₹₹",
    location: "Jaipur, Rajasthan",
    geometry: { type: "Point", coordinates: [75.7890, 26.9135] },
    image: {
      url: "https://images.unsplash.com/photo-1604908177070-29c4e9b9c0a5?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Dragon Palace",
    description: "Premium Chinese fine dining.",
    cuisine: "Chinese",
    priceRange: "₹₹₹",
    location: "Kolkata, West Bengal",
    geometry: { type: "Point", coordinates: [88.3650, 22.5735] },
    image: {
      url: "https://images.unsplash.com/photo-1604908176887-6c6f8d7cbbff?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Napoli Oven",
    description: "Wood-fired Italian pizzas.",
    cuisine: "Italian",
    priceRange: "₹₹",
    location: "Chennai, Tamil Nadu",
    geometry: { type: "Point", coordinates: [80.2720, 13.0835] },
    image: {
      url: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Chaat Junction",
    description: "Indian street food hub.",
    cuisine: "Street Food",
    priceRange: "₹",
    location: "Ahmedabad, Gujarat",
    geometry: { type: "Point", coordinates: [72.5730, 23.0235] },
    image: {
      url: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Flame BBQ",
    description: "Grilled buffet and barbecue dishes.",
    cuisine: "Barbecue",
    priceRange: "₹₹₹",
    location: "Pune, Maharashtra",
    geometry: { type: "Point", coordinates: [73.8605, 18.5220] },
    image: {
      url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Sweet Cravings",
    description: "Desserts, cakes and waffles.",
    cuisine: "Desserts",
    priceRange: "₹₹",
    location: "Mumbai, Maharashtra",
    geometry: { type: "Point", coordinates: [72.8810, 19.0785] },
    image: {
      url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Dosa Delight",
    description: "South Indian breakfast specials.",
    cuisine: "South Indian",
    priceRange: "₹",
    location: "Bangalore, Karnataka",
    geometry: { type: "Point", coordinates: [77.5980, 12.9735] },
    image: {
      url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Sea Breeze",
    description: "Fresh seafood and coastal cuisine.",
    cuisine: "Seafood",
    priceRange: "₹₹₹",
    location: "Goa, India",
    geometry: { type: "Point", coordinates: [74.1265, 15.3020] },
    image: {
      url: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  },
  {
    title: "Taco Fiesta",
    description: "Mexican tacos and burritos.",
    cuisine: "Mexican",
    priceRange: "₹₹",
    location: "Delhi, India",
    geometry: { type: "Point", coordinates: [77.1060, 28.7060] },
    image: {
      url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=60",
      filename: "restaurantimage"
    }
  }
];

module.exports = { data: sampleRestaurants };