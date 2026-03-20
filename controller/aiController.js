const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

module.exports.getDiscover = (req, res) => {
  res.render("ai/discover.ejs", { restaurants: null, errorMessage: null });
};

module.exports.postDiscover = async (req, res) => {
  const { query } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
Return restaurant recommendations in JSON format:
[
  {
    "name": "",
    "cuisine": "",
    "location": "",
    "description": ""
  }
]
`
        },
        {
          role: "user",
          content: query
        }
      ],
    });

    let text = response.choices[0].message.content;

    // convert string → JSON
    let restaurants;

    try {
      restaurants = JSON.parse(text);
    } catch {
      restaurants = [];
    }

    res.render("ai/discover.ejs", { restaurants, errorMessage: null });

  } catch (err) {
    console.log(err);
    let errorMessage = "AI service is temporarily unavailable. Please try again.";
    if (err && (err.status === 429 || err.code === "insufficient_quota")) {
      errorMessage = "AI quota exceeded. Please check your plan and billing details.";
    }
    res.render("ai/discover.ejs", { restaurants: [], errorMessage });
  }
};
