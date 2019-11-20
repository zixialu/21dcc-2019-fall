const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const BASE_PRICE = 100;
  const PER_KM_PRICE = 25;
  const PEAK_PRICE = 25;
  const PEAK_THRESHOLD = 30;

  const totalFare = BASE_PRICE +
    PER_KM_PRICE * distanceTraveled +
    PEAK_PRICE * (numberOfPeople >= PEAK_THRESHOLD);

  return `$${(totalFare / 100).toFixed(2)}`
}
