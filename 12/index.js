const isDirty = sample => sample === 'dirty';

const checkAir = (samples, threshold) => (
  samples.filter(isDirty).length / samples.length < threshold ?
    'Clean' :
    'Polluted'
  );
