import { HTMLDivCreator } from "../functions.ts";
import portfolioList, {PortfolioItem} from "../portfolio-items.ts"
import "../style.css";

const stylePortfolioItem = (item: PortfolioItem) => {
  return `
  <li>
    <a class=portfolioname href=${item.link}>${item.name}</a>
    <p class="portfoliodesc">${item.description}</p>
  </li>
  `
}

const portfolio = HTMLDivCreator(
  "#portfolio",
  `
  <ul>
    ${Object.keys(portfolioList).map(key => stylePortfolioItem(portfolioList[key])).join("")}
  </ul>
  `
);

export default portfolio;