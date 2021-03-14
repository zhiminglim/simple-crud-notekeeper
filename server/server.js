const port = process.env.PORT || 3001;
require('dotenv').config({ path: "../.env" });


const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const http = require("http");

const server = http.createServer(app);



// ------------ START of Database Default Setup ------------ //
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected...")).catch(err => console.log(err));

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});


const Note = mongoose.model("Note", noteSchema);

// ------------ End of Database Default Setup ------------ //



// middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

/* 
  As our react app is using routing, simply using the middleware is not going to work 
  because we're starting server from Express, so the request will always go to Express 
  and there will not be any route for handling that.
  After adding the code below, when the request comes to the server and there isn't 
  any routes to handle that here, we will send the index.html file from build folder 
  to handle that and display the client-side route page.
*/
app.use((req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});




server.listen(port, function () {
  console.log(`Server started on port ${port}.`);
})
