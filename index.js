const express = require("express");
const app = express();
const cors = require("cors");
const { connectToMongoDb } = require("./database/connection");
const { createServer } = require("http");
const { appRoutes } = require("./router");

const router = express.Router();

appRoutes(router)
const PORT = 4000;

const server = createServer(app);
server.listen(PORT, () => {
    console.log("server running on PORT ", PORT);
})

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST",
    credentials: true
}));
app.use(express.json());
app.use("/base", router);

connectToMongoDb();