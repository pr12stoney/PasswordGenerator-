function generateRandomPassword(length = 12, includeLowercase = true, includeUppercase = true, includeNumbers = true, includeSymbols = true) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+=-`~[]\{}|;':\",./<>?";

  let allowedChars = "";
  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumbers) allowedChars += numberChars;
  if (includeSymbols) allowedChars += symbolChars;

  if (allowedChars.length === 0) {
    return ""; // No character types selected
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }

  return password;
}

// Example usage:

// Generate a default 12-character password with all character types
const defaultPassword = generateRandomPassword();
console.log("Default Password:", defaultPassword);

// Generate an 16-character password with only lowercase and numbers
const lowercaseNumberPassword = generateRandomPassword(16, true, false, true, false);
console.log("Lowercase & Number Password:", lowercaseNumberPassword);

// Generate an 8-character password with uppercase and symbols
const uppercaseSymbolPassword = generateRandomPassword(8, false, true, false, true);
console.log("Uppercase & Symbol Password:", uppercaseSymbolPassword);

// Generate a 20-character password with all types
const strongPassword = generateRandomPassword(20);
console.log("Strong Password:", strongPassword);

// Generate a password with only numbers
const numericPassword = generateRandomPassword(10, false, false, true, false);
console.log("Numeric Password:", numericPassword);

// Generate an empty password (no character types selected)
const emptyPassword = generateRandomPassword(10, false, false, false, false);
console.log("Empty Password:", emptyPassword);