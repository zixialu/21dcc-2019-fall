const busTimes = buses => Object.entries(buses)
  .reduce((times, [name, { distance, speed }]) => (
    { ...times, [name]: distance / speed }
  ), {});
