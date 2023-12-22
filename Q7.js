// 7. Remove Duplicates

// In an online shopping application, customers can add multiple items to their cart. However, sometimes
// customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
// duplicate items not only make it difficult for the customer to track the items they want to purchase but also
// affect the accuracy of the purchase order.

const cart = [
  "headphone",
  "earphone",
  "headphone",
  "bat",
  "headphone",
  "buds",
  "bat",
];

cart.map((e1, i1) => {
  counter = 0;
  cart.map((e2, i2) => {
    if (e1 === e2) {
      counter++;
      if (counter >= 2) {
        cart.splice(i2, 1);
      }
    }
  });
});

