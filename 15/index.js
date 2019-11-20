const finalPosition = (moves) => {
  const DIRECTIONS = {
    north: [0, 1],
    south: [0, -1],
    east: [1, 0],
    west: [-1, 0],
  }

  return moves.reduce(([posX, posY], move) => {
    const [moveX, moveY] = DIRECTIONS[move];
    return [posX + moveX, posY + moveY];
  }, [0, 0])
}
