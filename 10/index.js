const whereCanIPark = (spots, vehicle) => {
  const VALID_SPOTS = {
    regular: ['R'],
    small: ['R', 'S'],
    motorcycle: ['R', 'S', 'M'],
  };

  let col = -1;
  const row = spots.findIndex(row => {
    col = row.findIndex(spot => VALID_SPOTS[vehicle].includes(spot));
    if (col !== -1) return true;
    return false;
  });

  if (row === -1) return false;
  return [col, row];
}
