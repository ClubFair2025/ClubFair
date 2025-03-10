import catSound from "../assets/mp3/cat.mp3";
import lionSound from "../assets/mp3/lion.mp3";
import goatSound from "../assets/mp3/goat.mp3";
import cowSound from "../assets/mp3/cow.mp3";

export interface AnimalSound {
  id: number;
  name: string;
  sound: HTMLAudioElement;
}

export const animalSounds: AnimalSound[] = [
  { id: 1, name: "Cat", sound: new Audio(catSound) },
  { id: 2, name: "Lion", sound: new Audio(lionSound) },
  { id: 3, name: "Goat", sound: new Audio(goatSound) },
  { id: 4, name: "Cow", sound: new Audio(cowSound) },
];

export const preloadSounds = () => {
  animalSounds.forEach((animal) => {
    animal.sound.load();
  });
};
