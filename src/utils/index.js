const { ethers } = require('ethers')

/**
 * set delay for delayTimes
 * @param {Number} delayTimes - timePeriod for delay
 */
function delay(delayTimes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, delayTimes)
  })
}

/**
 * change data type from Number to BigNum
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
function toBigNum(value, d) {
  return ethers.utils.parseUnits(Numer(value).toFixed(d), d)
}

/**
 * change data type from BigNum to Number
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
function fromBigNum(value, d) {
  return parseFloat(ethers.utils.formatUnits(value, d))
}

module.exports = { delay, toBigNum, fromBigNum }
