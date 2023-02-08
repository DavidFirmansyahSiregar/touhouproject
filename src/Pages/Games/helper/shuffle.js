// import EmberSVG from "../img/ember.svg";
// import NodeSVG from "../img/node.svg";
// import ReactSVG from "../img/react.svg";
// import VueSVG from "../img/vue.svg";
// import SvelteSVG from "../img/svelte.svg";
// import AngularSVG from "../img/angular.svg";
import Reimu from "../img/reimu1.jpg";
import Sakuya from "../img/sakuya1.jpg";
import Komano from "../img/komano1.png";
import Aya from "../img/aya1.png";
import Alice from "../img/alice1.png";
import Verra from "../img/verra.jpeg"

export const createMatrix = () => {
  const images = [Reimu, Sakuya, Komano, Aya, Alice, Verra];  
  const distinct = ["Reimu", "Sakuya", "Komano", "Aya", "Alice", "Verra"];
  const matrix = [];
  for (let i = 0; i < distinct.length; i++) {
    const cell = {
      face: distinct[i],
      image: images[i],
    };
    let pair = [cell, cell];
    matrix.push(...pair);
  }
  // shuffle array
  for (let i = matrix.length - 1; i > 0; i--) {
    let randomPos = Math.floor(Math.random() * (i + 1));
    [matrix[i], matrix[randomPos]] = [matrix[randomPos], matrix[i]];
  }
  return matrix.map((cell, index) => ({
    ...cell,
    id: index,
    revealed: false,
  }));
};
