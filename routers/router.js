const express = require("express");
const router = express.Router();

// Header роутер
const {
  getHeaderData,
  postHeaderData,
} = require("../controllers/headerDataController");

router.route("/header").get(getHeaderData).post(postHeaderData);

// Hero роутер
const {
  getHeroData,
  postHeroData,
} = require("../controllers/heroDataController");

router.route("/hero").get(getHeroData).post(postHeroData);

// Brands роутер
const {
  getBrandsData,
  postBrandsData,
} = require("../controllers/brandsDataController");

router.route("/brands").get(getBrandsData).post(postBrandsData);

// Future Here роутер
const {
  getFutureHereData,
  postFutureHereData,
} = require("../controllers/futureHereDataController");

router.route("/future-here").get(getFutureHereData).post(postFutureHereData);

// WhatIsGpt роутер
const {
  getWhatIsGptData,
  postWhatIsGptData,
} = require("../controllers/whatIsGptDataController");

router.route("/what-is-gpt").get(getWhatIsGptData).post(postWhatIsGptData);

// Exceeding роутер
const {
  getExceedingData,
  postExceedingData,
} = require(../controllers/exceedingDataController)

router.route("/exceeding").get(getExceedingData).post(postExceedingData);

// Registration роутер
const {
  getRegistrationData,
  postRegistrationgData,
} = require(../controllers/registrationDataController)

router.route("/registration").get(getRegistrationData).post(postRegistrationgData);

// Blog роутер
const {
  getBlogData,
  postBlogData,  
} = require(../controllers/blogDataController)

router.route("/blog").get(getBlogData).post(postBlogData);

// Step роутер
const {
  getStepData,
  postStepData,  
} = require(../controllers/stepDataController)

router.route("/blog").get(getStepData).post(postpostStepDatalogData);

// Foolder роутер
const {
  getFoolderData,
  postFoolderData,  
} = require(../controllers/foolderDataController)

router.route("/blog").get(getFoolderData).post(postFoolderData);

module.exports = router;
