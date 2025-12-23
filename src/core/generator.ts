export function generateRandomDigits(length: number = 4): string {
  let result = "";
  const digits = "0123456789";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    result += digits[randomIndex];
  }

  return result;
}
