import jquery from "jquery";
import { showBtn } from "./btn/btn";
import './main.css';
import image from "./assets/React-icon.svg.png";

console.log({ jquery });
showBtn();

const picture = document.createElement('img');
picture.setAttribute('src', image)

document.body.appendChild(picture)