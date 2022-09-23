type Item = "Apple" | "Orange";

type CheckoutOptions = {
  buyOneGetOneApples?: boolean;
  threeForThePriceTwoOranges?: boolean;
};

const itemCosts = {
  Apple: 60,
  Orange: 25,
};

function calculateCheckoutAmount(
  cartItems: Item[],
  checkoutOptions: CheckoutOptions = {
    buyOneGetOneApples: false,
    threeForThePriceTwoOranges: false,
  }
) {
  let totalAmount = 0;
  const itemsHash = {
    Apple: 0,
    Orange: 0,
  };

  for (let i = 0; i < cartItems.length; i++) {
    itemsHash[cartItems[i]]++;
  }

  if (checkoutOptions.buyOneGetOneApples) {
    itemsHash.Apple = Math.ceil(itemsHash.Apple / 2);
  }
  if (checkoutOptions.threeForThePriceTwoOranges) {
    itemsHash.Orange = Math.ceil(itemsHash.Orange * (2 / 3));
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
const amount = calculateCheckoutAmount(cart, {
  buyOneGetOneApples: true,
  threeForThePriceTwoOranges: true,
});

console.log(formatAmount(amount));
