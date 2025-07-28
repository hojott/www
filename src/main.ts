import header from "./header.ts";
import frontpage from "./frontpage.ts";
import bottombar from "./bottombar.ts";
import { paddingAdjustor, HTMLPage } from "./functions.ts";

const displayPage = (header: HTMLPage, body: HTMLPage, bottombar: HTMLPage) => {  
  header.applyContent();
  document.querySelector<HTMLDivElement>(header.id)!.style.display="initial";
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
      displayPage(header, frontpage, bottombar);
      break;
    case "/test":
      displayPage(header, header, header);
      break;
    default:
      displayPage(header, frontpage, bottombar);
      break;
  }
}

main();