document.write("----- comm js start #1<br>");

function testFunc() {
    document.write("-----");
}



function CheckWeight(name, height, weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;

    this.minWeight;
    this.maxWeight;
}

CheckWeight.prototype.getInfo = function () {
    var str = "";
    str += "이름:" + this.userName + ", ";
    str += "키:" + this.userHeight + ", ";
    str += "몸무게:" + this.userWeight + "<br>";

    return str;
}

CheckWeight.prototype.getResult = function () {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if (this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
        return "정상" + "<br>";
    } else if (this.userWeight < this.minWeight) {
        return "미달" + "<br>";
    }
    else if (this.userWeight >= this.maxWeight) {
        return "둥땡이" + "<br>";
    }
}


 var jang = new CheckWeight("장보리", 168, 62);
var kang = new CheckWeight("강남길", 168, 112);

console.log(jang);
console.log(jang.minWeight +"/"+ jang.maxWeight + "<br>");

document.write(jang.getInfo());
document.write(jang.getResult());

console.log(jang.minWeight +"/"+ jang.maxWeight + "<br>");

console.log(jang);

console.log(kang);

document.write(kang.getInfo());
document.write(kang.getResult());

console.log(kang);

document.write(jang.getInfo === kang.getInfo);

document.write("<br>----- comm js end #1");

