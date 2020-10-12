module.exports = function check(str, bracketsConfig) {
  for (let i = str.length ; i>=0 ; i--) {
    for (let n = 0; n < bracketsConfig.length; n++){
      let right = bracketsConfig[n].join('');
      if (str.includes(right)) {
        str = str.replace(right,'');
      }
    }
  }
  return str === "";
}