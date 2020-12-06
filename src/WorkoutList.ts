import type Exercice from "./Exercice";
import Workout from "./Workout";

export default class WorkoutList {
  workouts: Map<number, Workout>;

  constructor(sets) {
    this.workouts = new Map();
    sets = sets.filter((set) => set.Date);
    sets.forEach((set) => (set.Date = new Date(set.Date).getTime()));

    sets.forEach((set) => {
      const {
        Date: workoutDate,
        "Workout Name": workoutName,
        ...setData
      } = set;
      if (!this.workouts.has(set.Date)) {
        this.workouts.set(workoutDate, new Workout(workoutName, workoutDate));
      }
      this.workouts.get(workoutDate).addSet(setData);
    });
  }

  sortByDate() {
    // workouts.sort((w1, w2) => w1.date.valueOf() - w2.date.valueOf());
  }
}
