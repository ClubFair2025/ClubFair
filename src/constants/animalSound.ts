import catSound from "../assets/mp3/cat.mp3";
import lionSound from "../assets/mp3/lion.mp3";
import tigerSound from "../assets/mp3/tiger.mp3";
import cowSound from "../assets/mp3/cow.mp3";

export interface AnimalSound {
  id: number;
  name: string;
  sound: string;
}

export const animalSounds: AnimalSound[] = [
  { id: 1, name: "Cat", sound: catSound },
  { id: 2, name: "Lion", sound: lionSound },
  { id: 3, name: "Tiger", sound: tigerSound },
  { id: 4, name: "Cow", sound: cowSound },
];
