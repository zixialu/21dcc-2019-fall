const pumpkinSpice = money => {
  const ITEMS = {
    pie: { cost: 5, spice: 30 },
    latte: { cost: 3, spice: 15 },
    macaron: { cost: 1, spice: 3 },
  };

  let remainingMoney = money;
  let totalSpice = 0;

  const orders = Object.values(ITEMS).map(({ cost, spice }) => {
    const orders = remainingMoney / cost >> 0; // Integer division
    remainingMoney -= orders * cost;
    totalSpice += orders * spice;
    return orders;
  });

  return [...orders, totalSpice];
}
