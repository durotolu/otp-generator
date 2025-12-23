# OTP Generator – TypeScript OTP Generator SDK

A lightweight, reusable **JavaScript/TypeScript SDK** for generating numeric One-Time Passwords (OTPs).  
Built with **TypeScript** and bundled using **tsup**, supporting both **CommonJS** and **ES Modules**.
ARTICLE: https://medium.com/@jyc.dev/how-to-build-and-publish-your-own-javascript-sdk-with-typescript-step-by-step-guide-2860345719ef


---

## ✨ Features

- 🔢 Generate numeric OTPs of any length
- 📦 Dual support for **CJS** and **ESM**
- 🧠 Fully typed with TypeScript
- ⚡ Bundled with `tsup`
- 🧪 Easy local testing with `tsx`
- 🚀 Ready for npm publishing

---

## 📦 Installation

```bash
npm install otp-npm-test
# or
yarn add otp-npm-test
# or
pnpm add otp-npm-test
```

## Usage

### ES Modules

```typescript
import { generateRandomDigits } from "otp-npm-test";

// Generate a 4-digit OTP (default)
const otp = generateRandomDigits();
// Generate a 6-digit OTP
const otp6 = generateRandomDigits(6);

console.log(otp);   // e.g. "4827"
console.log(otp6);  // e.g. "941260"
```

### CommonJS

```typescript
const { generateRandomDigits } = require("otp-npm-test");

console.log(generateRandomDigits()); // e.g. "4827"
```

## API Reference

#### `generateRandomDigits(length?: number): string`

Generates a random numeric OTP.

- `length` (optional): The length of the OTP to generate. Defaults to 4.
- Returns: A string containing random numeric digits.

## Development

### Install dependencies
`npm install`

### Build the SDK
`npm run build`

### Watch mode (build + test)
`npm run dev`

Runs:

- tsup --watch
- tsx watch test-folder/script.ts

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

👤 **durotolu**

- GitHub: [@durotolu](https://github.com/durotolu)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/durotolu/otp-generator/issues).

## Show your support

Give a ⭐️ if this project helped you!