const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
// const KEY = require("../configs/config.json");

const app = express();
const port = 3123;
console.log('what' , process.env)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/../public")));

app.get("/video", (req, res) => {
    ytApi = process.env.YoutubeApi
  axios
    .get("https://www.googleapis.com/youtube/v3/search?part=snippet", {
      params: {
        eventType: "live",
        type: "video",
        regionCode: "US",
        order: "viewCount",
        videoEmbeddable: "true",
        videoCategoryId: 20,
        maxResults: 1,
        key: ytApi
        // key: KEY.api
      }
    })
    .then(response => {
      console.log("hello there");

      res.send(response.data);
    })
    .catch(error => {
      console.log("Error : " + error);
    });
});

app.listen(port, () => {
  console.log("Listening to " + port);
});

module.exports = {
    firebase = process.env.firebaseConfig,
    gApi = process.env.gApi
}