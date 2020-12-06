import * as D from "io-ts/Decoder";

const StrongAppLiftingSet = D.type({
  Date: D.string,
  "Workout Name": D.string,
  "Exercice Name": D.string,
  "Set Order": D.string,
  Weight: D.string,
  "Weight Unit": D.string,
  Reps: D.string,
  RPE: D.string,
  Notes: D.string,
});

interface LiftingSet {
  weight: number;
  unit: string;
  reps: number;
  rpe?: number;
  notes?: string;
}

export function parseLiftingSet(set: any) {
  const liftingSet = {
    date: new Date(set.Date).getTime(),
    workout: set["Workout Name"],
    exercice: set["Exercise Name"],
    index: set["Set Order"],
    weight: set.Weight,
    unit: set["Weight Unit"],
    reps: set.Reps,
    RPE: set.RPE,
    notes: set.Notes,
  };

  if (!set.Date) {
    throw new Error(`date is missing from this set : ${liftingSet}`);
  }
  for (const key in liftingSet) {
    if (liftingSet[key] === undefined) {
      throw new Error(`${key} is missing from this set : ${liftingSet}`);
    }
  }

  return liftingSet;
}

export const strDateAndTime = (date) => {
  const pad = (s) => (s < 10 ? "0" + s : s);
  const d = new Date(date);

  const dd = pad(d.getDate());
  const mm = pad(d.getMonth() + 1);
  const yyyy = d.getFullYear();
  const day = `${dd}/${mm}/${yyyy}`;

  const time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;

  return `${day} at ${time}`;
};
