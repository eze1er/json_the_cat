const { response } = require('express');
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return `("We find an Error!", error)`;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(true, null);
    }
    const breed = data[0];
    let description = breed.description;
    return callback(error, description);;
  });
};

module.exports = { fetchBreedDescription };