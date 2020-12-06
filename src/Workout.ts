import type Exercice from "./Exercice";

export default class Workout {
  name: String;
  date: Date;

  exercices: Exercice[];

  constructor(name: String, date: Date) {
    this.name = name;
    this.date = date;
  }

  addSet(set: {
    "Exercice Name";
    Reps;
    RPE;
    "Set Order";
    Weight;
    "Weight Unit";
    Notes;
  }) {
    const exercice = this.exercices.find(
      (exercice) => exercice.name === set["Exercice Name"]
    );
    // exercice?.
  }

  static sortByDate(workouts: Workout[]) {
    workouts.sort((w1, w2) => w1.date.valueOf() - w2.date.valueOf());
  }
}
