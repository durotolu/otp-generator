import { generateRandomDigits } from "../src";

console.log("OTP (default):", generateRandomDigits());
console.log("OTP (6 digits):", generateRandomDigits(6));

import { generateRandomDigits as generateRandomDigitsBuild } from "../dist";

console.log("dist OTP", generateRandomDigitsBuild());
