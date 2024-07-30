const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { MONGODB_URI, PORT } = require("./config");
const userRoutes = require("./routes/user_routes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173", // Development origin
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.json());

mongoose.connect(MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (error) => {
  console.log("Some error while connecting to DB", error);
});

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
