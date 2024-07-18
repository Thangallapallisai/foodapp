import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://thangallapallisai777:7036268769@cluster0.khwiijv.mongodb.net/food_del')
        .then(() => console.log("DB Connected"))
        //.catch((err) => console.error("DB Connection Error: ", err));
};
