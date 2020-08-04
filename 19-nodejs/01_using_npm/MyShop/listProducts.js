var f = require('faker');

for (var i = 0; i < 10; i++) {
    console.log(f.fake("{{commerce.productName}} - {{commerce.price}}"));
}
