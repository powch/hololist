const {
  JP_GEN_0,
  JP_GEN_1,
  JP_GEN_2,
  JP_GEN_3,
  JP_GEN_4,
  JP_GEN_5,
  JP_GEN_GAMERS,
  JP_HOLOSTARS,
  ID_GEN_1,
  ID_GEN_2,
  EN_GEN_1,
} = require("../constants");

const getBranchName = (userName) => {
  if (JP_GEN_0.includes(userName)) {
    return "JP0";
  }

  if (JP_GEN_1.includes(userName)) {
    return "JP1";
  }

  if (JP_GEN_2.includes(userName)) {
    return "JP2";
  }

  if (JP_GEN_3.includes(userName)) {
    return "JP3";
  }

  if (JP_GEN_4.includes(userName)) {
    return "JP4";
  }

  if (JP_GEN_5.includes(userName)) {
    return "JP5";
  }

  if (JP_GEN_GAMERS.includes(userName)) {
    return "GAMERS";
  }

  if (JP_HOLOSTARS.includes(userName)) {
    return "HOLOSTARS";
  }

  if (ID_GEN_1.includes(userName)) {
    return "ID1";
  }

  if (ID_GEN_2.includes(userName)) {
    return "ID2";
  }

  if (EN_GEN_1.includes(userName)) {
    return "EN1";
  }

};

module.exports = {
  getBranchName,
};
