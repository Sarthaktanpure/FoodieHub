const Joi = require("joi");

module.exports.restaurantSchema = Joi.object({
  restaurant: Joi.object({
    title: Joi.string().required().min(3).max(100),

    description: Joi.string().required().min(10).max(500),

    cuisine: Joi.string().required().min(3).max(50),

    priceRange: Joi.string().valid("₹", "₹₹", "₹₹₹", "₹₹₹₹").required(),

    location: Joi.string().required().min(2).max(100),

    rating: Joi.number().min(1).max(5).default(1),
    image: Joi.object({
      url: Joi.string().allow("", null),
    }).optional(),
  }).required(),
});

// Signup validation
module.exports.userSchema = Joi.object({
  user: Joi.object({
    username: Joi.string().min(3).max(20).required().messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username must be less than 20 characters",
    }),

    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Enter a valid email",
        "string.empty": "Email is required",
      }),

    password: Joi.string().min(6).max(30).required().messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password must be less than 30 characters",
      "string.empty": "Password is required",
    }),
  }).required(),
});

module.exports.contactSchema = Joi.object({
  contact: Joi.object({

    name: Joi.string()
      .trim()
      .min(3)
      .max(50)
      .required(),

    email: Joi.string()
      .trim()
      .email()
      .required(),

    subject: Joi.string()
      .trim()
      .min(3)
      .max(100)
      .required(),

    message: Joi.string()
      .trim()
      .min(10)
      .max(500)
      .required(),

  }).required()
});