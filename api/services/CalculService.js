module.exports = {

  add: (a,b) => {
    return a + b;
  },
  sub: function(a,b){

    return a - b;
  },
  mul: function(a,b){

    return a * b;
  },
  div: function(a,b){
    return a / b;
  },
  prct: function (a,b){
    return this.mul(this.div(a,100),b);
  },
}
