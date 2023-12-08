/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = new Map();
  for (const transaction of transactions) {
    const { category, price } = transaction;

    if (!categoryTotals.has(category)) {
      categoryTotals.set(category, 0);
    }

    categoryTotals.set(category, categoryTotals.get(category) + price);
  }

  const res = Array.from(categoryTotals, ([category, price]) => ({
    category,
    totalSpent: price,
  }));

  return res;
}

module.exports = calculateTotalSpentByCategory;
