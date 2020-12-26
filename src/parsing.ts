// TODO : change parsingOptions from {src,...} to {from, to, ...}

type ParsingOptions<S, F> = { src: S; parser?: (arg0: S) => F; optional?: boolean };
// other solution :
// interface parsingOptions {
//   [key: string]: { src: string; parser?: (s: string) => any; optional?: boolean };
// }

function checkNotEmptyString(str: string) {
  return str ? str : undefined;
}

export class ParsingError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

function parse(optionsList: Record<any, ParsingOptions<any, any>>) {
  const res = {};
  for (const key in optionsList) {
    const options = optionsList[key];
    res[key] = options.parser ? options.parser(options.src) : options.src;
    if (!res[key] && res[key] !== 0) {
      if (options.optional) {
        delete res[key];
      } else {
        throw new ParsingError(`${key} is missing/invalid in "${options.src}"`);
      }
    }
  }
  return res;
}

interface StandaloneSet {
  date: number;
  workoutName: string;
  exerciseName: string;
  index: number;
  weight?: number;
  unit?: string;
  reps?: number;
  RPE?: number;
  notes?: string;
}

export function parseSet(set: Record<string, any>) {
  return parse({
    date: { src: set.Date, parser: Date.parse },
    workoutName: { src: set["Workout Name"], parser: checkNotEmptyString },
    exerciseName: { src: set["Exercise Name"], parser: checkNotEmptyString },
    index: { src: set["Set Order"], parser: Number.parseInt },
    weight: { src: set.Weight, parser: Number.parseInt, optional: true },
    unit: { src: set["Weight Unit"], parser: checkNotEmptyString, optional: true },
    reps: { src: set.Reps, parser: Number.parseInt, optional: true },
    RPE: { src: set.RPE, parser: Number.parseInt, optional: true },
    notes: { src: set.Notes, parser: checkNotEmptyString, optional: true },
  }) as StandaloneSet;
}
