// Use the value below whenever you need the value of Pi
const PI = 3.14159

const sphereVolume = (r) => 4 * PI * r * r * r / 3;

const coneVolume = (r, h) => PI * r * r * h / 3;

const prismVolume = (h, w, d) => h * w * d;

const volumeMethods = {
  sphere: sphereVolume,
  cone: coneVolume,
  prism: prismVolume,
};

const findVolume = ({type, ...params}) => volumeMethods[type](
  // Assumes order of params in object is correct
  ...Object.values(params)
);

const totalVolume = (solids) => solids.reduce(
  (totalVolume, solid) => totalVolume += findVolume(solid),
  0,
);
