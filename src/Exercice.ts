interface LiftingSet {
  weight: number;
  unit: String;
  reps: number;
  rpe?: number;
  notes?: String;
}

export default class Exercice {
  name: String;
  sets: LiftingSet[];

  addSet(set: LiftingSet) {
    this.sets.push(set);
  }
}
