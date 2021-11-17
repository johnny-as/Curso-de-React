function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

var r1 = new Retangulo(3, 4);
var r2 = new Retangulo(7, 2);

function Retangulov2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}
Retangulov2.prototype.area = function () {
  return this.altura * this.largura;
};

var r3 = new Retangulov2(3, 4);
var r4 = new Retangulov2(7, 2);
