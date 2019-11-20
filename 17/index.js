const judgeVegetable = (vegetables, metric) => (
  [...vegetables].sort((a, b) => b[metric] - a[metric])[0].submitter
);
