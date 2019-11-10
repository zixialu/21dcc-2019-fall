const castVote = (name, votes) => {
  const CANDIDATES = [
    'Tim',
    'Sally',
    'Beth',
  ];

  const indexToIncrement = CANDIDATES.indexOf(name);

  if (indexToIncrement === -1) throw new Error('Unlisted candidate!');

  const updatedVotes = [...votes];
  updatedVotes[indexToIncrement] += 1;

  return updatedVotes;
}
