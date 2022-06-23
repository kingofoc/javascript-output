class person {
  constructor(name, height, country) {
    this.name = name;
    this.height = height;
    this.country = country;
  }
}
const mySelf = new person ("Chukwuebuka Kingsley", 5.6, "Nigeria");

var myName = mySelf.name;
var myHeight = mySelf.height;
var myCountry = mySelf.country;

window.alert(`Name: ${myName} \nHeight: ${myHeight} \nCountry: ${myCountry}`);