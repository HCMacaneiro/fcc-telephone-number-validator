function telephoneCheck(str) {
    const digitRegex = /\d/g;
    const nonDigitRegex = /[!?*a-zA-Z#]/g;
    const negRegex = /^(?=\d{2} )/;
    let paraCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        paraCount += 1;
      } else if (str[i] === ")") {
        paraCount -= 1;
      }
    }
    if (str.match(digitRegex).length > 11 || str.match(digitRegex).length < 10) {
      return false;
    } else if (str.match(digitRegex).length === 11 && str[0] !== "1") {
      return false;
    } else if (nonDigitRegex.test(str)) {
      return false;
    } else if (paraCount !== 0) {
      return false;
    } else if (str[0] === "(" && str[str.length - 1] === ")") {
      return false
    } else if (negRegex.test(str)) {
      return false;
    }
    return true;
  }
  
  telephoneCheck("55 55-55-555-5");