const countTickets = (tickets) => tickets.reduce(
  (counts, colour) => ({ ...counts, [colour]: counts[colour] + 1 }),
  {red: 0, green: 0, blue: 0},
)

const bestOdds = (tickets, raffleEntries) => {
  const ticketCounts = countTickets(tickets);

  const [[bestColour]] = Object.entries(raffleEntries)
    .map(([colour, entries]) => [colour, ticketCounts[colour] / entries])
    .sort(([, entries1], [, entries2]) => entries2 - entries1);

  return `You have the best odds of winning the ${bestColour} raffle.`
}
