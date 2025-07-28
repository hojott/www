import { HTMLDivCreator } from "../functions.ts";
import "../style.css";

const topbar = HTMLDivCreator(
  "#topbar",
  `
  <table class="topbartable">
    <tr>
      <td class="topbarcell">
        <img class="topbarlogo" src="/kissa_transparent.png" width="30" height="30" alt="topbarlogo">
        <a class="topbarname" href="https://www.kussi.fi">kussi.fi</a>
      </td>
      <td class="topbarcell">
        <nav class="topbarnav">
          <a class="topbaritem" href="https://www.kussi.fi/frontpage">Home</a>
          <a class="topbaritem" href="https://www.kussi.fi/portfolio">Portfolio</a>
        </nav>
      </td>
    </tr>
  </table>
  `
);

export default topbar;