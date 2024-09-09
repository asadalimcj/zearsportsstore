const mongoose = require("mongoose");

const mongoDB = async () => {
  const mongoseUrl =
    "mongodb+srv://asadalimcj:w3OyL66kT4eMnaz1@zearsports.w5h4a.mongodb.net/zearsports?retryWrites=true&w=majority&appName=zearsports";

  try {
    // Connect to MongoDB
    await mongoose.connect(mongoseUrl);
    console.log("Successfully connected to MongoDB");

    //Define a schema and model for your collection
    const itemSchema = new mongoose.Schema({}, { collection: "itemData" });
    const Item = mongoose.model("Item", itemSchema);
    const fetchedData = await Item.find({});

    if (fetchedData) {
      const catagorySchema = new mongoose.Schema(
        {},
        { collection: "itemCatagory" }
      );
      const catagory = mongoose.model("catagory", catagorySchema);
      const catagoryData = await catagory.find({});
      global.ZearData = fetchedData;
      console.log(global.ZearData);
      global.catagories = catagoryData;
      console.log(global.catagories);
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
