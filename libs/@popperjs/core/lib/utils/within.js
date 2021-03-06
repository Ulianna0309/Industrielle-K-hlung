import { max as mathMax, min as mathMin } from "./math.d.ts";
export default function within(min, value, max) {
  return mathMax(min, mathMin(value, max));
}