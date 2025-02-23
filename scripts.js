// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. ForEach
names.forEach((name, index) => {
  console.log(name);
  console.log(provinces[index]);
  console.log(`${name} (${provinces[index]})`);
});

// 2. Uppercase
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

// 3.Name Lengths
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// 4. Sorting

const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

//5. Filter Cape 
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

//6.Finding S
const containsS = names.map(name => name.includes('S'));
console.log(containsS);
const anyS = names.some(name => name.includes('S'));
console.log(anyS);
