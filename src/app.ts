type Item = "Apple" | "Orange";

const itemCosts = {
  Apple: 60,
  Orange: 25,
};

function calculateCheckoutAmount(cartItems: Item[]) {
  let totalAmount = 0;
  const itemsHash = {
    Apple: 0,
    Orange: 0,
  };

  for (let i = 0; i < cartItems.length; i++) {
    itemsHash[cartItems[i]]++;
  }

  totalAmount =
    itemsHash.Apple * itemCosts.Apple + itemsHash.Orange * itemCosts.Orange;

  return totalAmount;
}

function formatAmount(amount: number) {
  if (amount > 100) {
    return `£${amount / 100}`;
  } else {
    return `${amount}p`;
  }
}

const cart: Item[] = ["Apple", "Apple", "Orange", "Apple"];
const amount = calculateCheckoutAmount(cart);

console.log(formatAmount(amount));
