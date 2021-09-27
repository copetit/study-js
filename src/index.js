const dog = {
  name: "mungmung",
  age: "2"
};

function makeSentence(dog) {
  const text = `${dog.name} is ${dog.age} old`;
  console.log(text);
}

function makeSentence2(dog) {
  // 객체 구조 분해 (객체 비 구조화 할당)
  const { name, age } = dog;
  const text = `${name} is ${age} old`;
  console.log(text);
}

// getter
// 특정 값을 조회할 때 설정한 함수고 연산된 값을 반환
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("SUM");
    return this.a + this.b;
  }
};
// console.log(numbers);
// numbers.a = 4;
// console.log(numbers);

// setter

const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log("calculate");
    this.sum = this._a + this._b;
  },
  get a() {
    console.log("get A");
    return this._a;
  },
  get b() {
    console.log("get B");
    return this._b;
  },
  set a(value) {
    console.log("change A");
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log("change B");
    this._b = value;
    this.calculate();
  }
};
console.log("-----");
console.log(numbers2.sum);
numbers2.a = 5;
// numbers2.b = 7;
// numbers2.a = 9;
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log(numbers2.sum);
console.log("-----");

const cat = {
  _name: "kitty",
  get name() {
    console.log(`get name ${this._name}`);
    return `${this._name} is cute`;
  },
  set nameChange(value) {
    console.log(" name changing..");
    this._name = value;
  }
};

cat.nameChange = "pupu";
console.log(cat.name);
