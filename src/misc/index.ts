export const round = (number: number): number => Math.round(number * 1e6) / 1e6;

export const radToAngle = (rad: number): number => (rad * 180) / Math.PI;

export const angleToRad = (angle: number): number => (angle * Math.PI) / 180;

export const randomRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const radiansDelta = (prev: number, cur: number): number => {
  // Convert negative radians to positive 2PI format
  if (prev < 0) prev = 2 * Math.PI - Math.abs(prev);
  if (cur < 0) cur = 2 * Math.PI - Math.abs(cur);

  let delta;
  if (prev < cur)
    // Fix if prev rad is before 0 and cur is after
    delta = Math.abs(prev + (Math.PI * 2 - cur));
  else delta = Math.abs(prev - cur);

  return delta;
};

export const getType = (item: any): string => {
  if (Array.isArray(item)) return "array";
  if (typeof item === "object") return "object";
  if (typeof item === "number") return "number";
};
