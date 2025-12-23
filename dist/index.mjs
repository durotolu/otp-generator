// src/core/generator.ts
function generateRandomDigits(length = 4) {
  let result = "";
  const digits = "0123456789";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    result += digits[randomIndex];
  }
  return result;
}
export {
  generateRandomDigits
};
//# sourceMappingURL=index.mjs.map