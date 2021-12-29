export default () => {
  const array = ["a", "b", "c", "d"];
  console.log(array.includes("a"));

  const obj = {
    a: 1,
    b: 2,
  };
  const newObj = { ...obj, c: 3 };
  console.log(newObj);
  console.log("this is module");
};
