import { writable } from "svelte/store";
import { db } from "./firebase";

export const workouts = writable([]);

export const startRealTimeWorkoutsQuery = (uid: string) => {
  db.collection("workouts")
    .where("uid", "==", uid)
    .orderBy("startingDate", "desc")
    .onSnapshot((querySnapshot) => {
      workouts.set(querySnapshot.docs.map((doc) => doc.data()));
    });
};
