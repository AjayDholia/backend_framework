const { mongoose } = require("mongoose");

const mongoConnection = () => {
  const url =
    "mongodb+srv://frienxe81:YEtYd6jjPliDuCnj@cluster0.eiu7aee.mongodb.net/?retryWrites=true&w=majority";

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection established!!");
    })
    .catch((err) => {
      console.log("Connection to DB failed");
      console.log(err.message);
    });
};

module.exports = { mongoConnection };
