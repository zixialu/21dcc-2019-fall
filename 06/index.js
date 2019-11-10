const voterTurnout = (voterSignatures, voterIds) => {
  if (voterSignatures.length !== voterIds.length) return false;

  const fraudulentVote = voterSignatures.find(
    (signature, index) => signature !== voterIds[index]
  );
  if (fraudulentVote) return "FRAUD!";

  return "All clear, we can count the votes!";
}
