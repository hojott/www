import { HTMLDivCreator } from "./functions.ts";
import "./style.css";

const bottombar = HTMLDivCreator(
  "#bottombar",
  `
  <div>
    <p class="smallprint">
      <a href=https://orteil.dashnet.org/cookieclicker>This</a>
      site uses cookies. By being on this site you accept that
      (and even if you don't I can't do a lot about it)
    </p>
    <div class="ads">
      <img class=ad src=/ads/stoplivarhate.gif />
      <img class=ad src=/ads/ruohonleikkaus.gif />
      <img class=ad src=/adspace.png />
      <img class=ad src=/adspace.png />
      <img class=ad src=/adspace.png />
      <img class=ad src=/adspace.png />
    </div>
  </div>
`
);

export default bottombar;