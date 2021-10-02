const Joke = require("../models/jokes.model");

// const healthcheck = (req, res) => {
//   res.send("this is set up correctly, nice!");
// };

const findAlljokes = (req, res) => {
  Joke.find()
    .then((alljokes) => res.json({ joke: alljokes }))
    .catch((err) => res.json({ message: "uh oh", error: err }));
};

// module.exports.findAllUsers = (req, res) => {
//     User.find()
//       .then(allDaUsers => res.json({ users: allDaUsers }))
//       .catch(err => res.json({ message: "Something went wrong", error: err }));
//   };

const newJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json({ joke: newJoke }))
    .catch((err) => res.json({ message: "uh oh", error: err }));
};

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//       .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//       .catch(err => res.json({ message: "Something went wrong", error: err }));
//   };

const findOneJoke = (req, res) => {
  Joke.findOne({ _id: req.params._id })
    .then((oneJoke) => res.json({ joke: oneJoke }))
    .catch((err) => res.json({ message: "uh oh", error: err }));
};

// module.exports.findOneSingleUser = (req, res) => {
// 	User.findOne({ _id: req.params.id })
// 		.then(oneSingleUser => res.json({ user: oneSingleUser }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

const updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    .then((updateOneJoke) => res.json({ joke: updateOneJoke }))
    .catch((err) => res.json({ message: "uh oh", error: err }));
};

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//       .then(updatedUser => res.json({ user: updatedUser }))
//       .catch(err => res.json({ message: "Something went wrong", error: err }));
//   };

const deleteJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params._id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "uh oh", error: err }));
};

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//       .then(result => res.json({ result: result }))
//       .catch(err => res.json({ message: "Something went wrong", error: err }));
//   };

module.exports = {
  //   healthcheck,
  findAlljokes,
  newJoke,
  findOneJoke,
  updateJoke,
  deleteJoke,
};
