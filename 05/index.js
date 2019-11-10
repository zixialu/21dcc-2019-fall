const chooseStations = (stations) => {
  const VALID_TYPES = [
    'school',
    'community centre',
  ];
  const MIN_SIZE = 20;

  return stations.reduce((validStations, station) => {
    const [name, size, type] = station;

    if (size < MIN_SIZE || !VALID_TYPES.includes(type)) return validStations;

    return [...validStations, name];
  }, []);
}
