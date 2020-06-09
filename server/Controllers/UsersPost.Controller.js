const createError = require("http-errors");
const axios = require("axios");
const _ = require("lodash");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const getResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("getResponse", getResponse);
      res.status(200).send(JSON.stringify(getResponse.data));
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  getAllPosts: async (req, res, next) => {
    try {
      const getResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log("getResponse", getResponse);
      res.status(200).send(JSON.stringify(getResponse.data));
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  getAllUsersPosts: async (req, res, next) => {
    try {
      const posts = (
        await axios.get("https://jsonplaceholder.typicode.com/posts")
      ).data;
      const users = (
        await axios.get("https://jsonplaceholder.typicode.com/users")
      ).data;

      const merge = _.map(posts, function (item) {
        return _.assign(
          _.pick(
            _.find(users, { id: item.userId }),
            "name",
            "username",
            "company"
          ),
          item
        );
      });

      res.status(200).send(JSON.stringify(merge));
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
};
