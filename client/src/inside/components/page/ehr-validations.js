export default {
  time24: function (time) {
    return (/^([0-2]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time))
  },
  TIME24_ERROR: (key) => `${key} must be a time in 24h format`,
}