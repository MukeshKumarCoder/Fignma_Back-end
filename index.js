const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
const { connectDB } = require("./Config/DB");
const userRoutes = require("./Routes/userRoutes");
const projectRoutes = require("./Routes/projectRoutes.js");
const designFIleRoute = require("./Routes/designFileRoutes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:3000", credentials: true },
});

const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Routes
app.use("/auth", userRoutes);
app.use("/projects", projectRoutes);
app.use("/design-file", designFIleRoute);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
