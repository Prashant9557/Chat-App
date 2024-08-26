const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://Atlas1:AtlasDb123@cluster0.dutjo7q.mongodb.net/?retryWrites=true&w=majority", // Replace 'myDatabase' with your actual database name
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log("Error:", err));

mongoose.set("strictQuery", true);
