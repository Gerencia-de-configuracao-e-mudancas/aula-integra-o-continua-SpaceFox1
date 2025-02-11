function soma(...param) {
  return param.reduce((a, b) => a + b);
}

module.exports = soma;
