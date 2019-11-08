const smartGarbage = (trash, bins) => ({ ...bins, [trash]: bins[trash] + 1 });
