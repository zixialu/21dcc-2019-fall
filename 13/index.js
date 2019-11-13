const toggleLights = (lights, lightsAreOn) => lights.map(
  ({ id }) => ({ id, on: !lightsAreOn })
);

const lightsOn = lights => toggleLights(lights, false);

const lightsOff = lights => toggleLights(lights, true);
