const COUNTED_TOPICS = ['smart city', 'arts funding', 'transportation'];

const termTopics = (interviews) => interviews.reduce((counts, interview) => {
  const responseIndex = COUNTED_TOPICS.indexOf(interview);

  if (responseIndex === -1) return counts;

  const newCounts = [...counts];
  newCounts[responseIndex]++;
  return newCounts;
}, [0, 0, 0]);
