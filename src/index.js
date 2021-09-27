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

makeSentence2(dog);
