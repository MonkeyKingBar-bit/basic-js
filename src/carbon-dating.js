const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity != "string") return false;
  
  let t = sampleActivity.split('.').reduce((res,x,i) => i < 2 ? res.concat(x) : res, []).join('.');
  
  if (t>0 && t<15) {
    return Math.ceil(Math.log(MODERN_ACTIVITY/t)/(Math.LN2.toFixed(3)/HALF_LIFE_PERIOD));
  }
  return false; 
};
