const { HOST } = require("../../global");
module.exports = {
  mongoURI:
    "mongodb+srv://reddit-user:reddit1234@reddit-cluster.vvqtv.mongodb.net/reddit-db",
  secret: "",
  frontEnd: "http://" + HOST + ":3000",
  port: 3001,
  SQLhost: "redditdb.cyazxyujehyt.us-west-2.rds.amazonaws.com",
  SQLusername: "admin",
  SQLpassword: "redditpass",
  SQLdb: "Reddit",
  AWSAccessKeyId: "",
  AWSSecretKey: "",
  AWSBucketName: "splitwiseimage",
  redisPort: 6379,
  redisHost: "54.152.180.56",
  redisPass: ""
};
