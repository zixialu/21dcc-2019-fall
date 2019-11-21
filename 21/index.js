const chooseRecipe = (bakeryA, bakeryB, recipes) => (
  recipes
    .find(({ ingredients: [a, b]}) => (
      (bakeryA.includes(a) && bakeryB.includes(b)) ||
      (bakeryB.includes(a) && bakeryA.includes(b))
    ))
    .name
);
