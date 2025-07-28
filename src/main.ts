import topbar from "./components/topbar.ts";
import frontpage from "./components/frontpage.ts";
import portfolio from "./components/portfolio.ts"
import bottombar from "./components/bottombar.ts";
import { paddingAdjustor, HTMLPage } from "./functions.ts";

const displayPage = (topbar: HTMLPage, body: HTMLPage, bottombar: HTMLPage) => {  
  topbar.applyContent();
  document.querySelector<HTMLDivElement>(topbar.id)!.style.display="initial";
  body.applyContent();
  document.querySelector<HTMLDivElement>(body.id)!.style.display="initial";
  bottombar.applyContent();
  document.querySelector<HTMLDivElement>(bottombar.id)!.style.display="initial";

  paddingAdjustor(bottombar.id, body.id);
}

const main = () => {
  const page = window.location.pathname;

  switch (page) {
    case "/":
    case "/frontpage":
      displayPage(topbar, frontpage, bottombar);
      break;
    case "/portfolio":
      displayPage(topbar, portfolio, bottombar);
      break;
    default:
      displayPage(topbar, frontpage, bottombar);
      break;
  }
}

main();