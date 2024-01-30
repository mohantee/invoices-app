function genRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function genRandomString(length: number) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charLength = chars.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

export function genInvoiceId() {
  const randomString = genRandomString(2);
  const randomNumber = genRandomNumber(1000, 10000);

  const invoiceId = randomString + randomNumber;
  return invoiceId;
}
