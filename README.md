🚀 **Live Demo:** https://foodiehub-z1hk.onrender.com  

FoodieHub is a full-stack restaurant discovery platform built with modern web technologies. It enables users to explore restaurants, read and write reviews, and discover new places using an AI-powered recommendation system.

---

## 📌 Features

- 🔍 Browse and explore restaurants  
- 🤖 AI-powered **Discover** feature for dynamic recommendations  
- 📝 User authentication (Signup/Login)  
- ⭐ Reviews and ratings system  
- 🖼️ Image upload and management  
- 📍 Location-based restaurant listings  
- ⚡ Clean MVC architecture  

---

## 🏗️ Tech Stack

**Frontend**
- EJS
- HTML, CSS, Bootstrap  

**Backend**
- Node.js
- Express.js  

**Database**
- MongoDB
- Mongoose  

**Authentication**
- Passport.js
- express-session  

**Other**
- Multer (file uploads)  
- OpenAI API (AI recommendations)  
- Render (deployment)  

---

## 🧠 Architecture

This project follows the **MVC (Model-View-Controller)** architecture:

- **Models** → MongoDB schemas  
- **Views** → EJS templates  
- **Controllers** → Business logic  

This ensures scalability, maintainability, and clean code structure.

---

## 🤖 AI Discover Feature

The **Discover** feature allows users to search for restaurants based on their preferences.

Even if the data is not available in the database, the system uses AI to generate relevant restaurant suggestions dynamically.

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Sarthaktanpure/FoodieHub.git
cd FoodieHub
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
MONGO_URL=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
SESSION_SECRET=your_secret_key
```

### 4. Run the app

```bash
node app.js
```

---

## 🌐 Deployment

Deployed on Render:
👉 [https://foodiehub-z1hk.onrender.com](https://foodiehub-z1hk.onrender.com)

---

## 📁 Project Structure

```
FoodieHub/
│
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── middleware.js
├── app.js
└── .env (not included)
```

---

## 🚀 Future Improvements

* Advanced search & filters
* Booking system with payments
* Favorites / wishlist feature
* Admin dashboard

---

## 🙌 Acknowledgement

This project was built after completing the *Wanderlust* project, which helped strengthen full-stack development fundamentals.

---

## 📬 Contact

**Sarthak Tanpure**
GitHub: [https://github.com/Sarthaktanpure](https://github.com/Sarthaktanpure)

