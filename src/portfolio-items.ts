interface PortfolioListInterface {
  [key: string]: PortfolioItem;
}

export interface PortfolioItem {
  name: string,
  link: string,
  description: string
}

const portfolioList: PortfolioListInterface = {
  glogicompiler: {
    name: "Glögicompiler",
    link: "https://github.com/hojott/glogicompiler",
    description: "I tried to make my own compiler at the start of my fresher year. My biggest mistake was probably trying to write it in zsh (yeah, not even bash :D). Still, I got pretty far with it, and at least I ended up doing a lot of shell scripting. I left it at the point where I was supposed to implement variable evaluation, which sounds easier than it actually is."
  },
  victoria2analyzer: {
    name: "victoria2analyzer",
    link: "https://github.com/hojott/victoria2-analyzer",
    description: "Victoria 2 is a grand strategy game from around 2010 by Paradox Interactive, set in the 1800–1900s. If you start a world war in it, you can rack up massive casualties in battles, but normally you never get to see how many died in total. This program parses the savegame file and counts the number of deaths. There exists a Java implementation of something similar, but I couldn’t get it to work on Linux :D The coolest part of this is probably the parser, because the actual save files have no actual format and are an absolute nightmare to go through.",
  },
  kjyrtjbot: {
    name: "kjyrtj-bot",
    link: "https://github.com/hojott/kjyrtj_bot",
    description: "KJYR, the fresher cruise, is Kumpula’s most anticipated event (right after Wappuhoplop). This is just a simple Telegram bot that responds to commands with the number of days left until the cruise. I included it because it’s one of the few programs I actually wrote to completion. Eventually, someone with their own superior kjyrtj-bot made n years ago showed up, and mine was depracated. Still, mine was in use for like 1 or 2 days."
  },
  adventofcode: {
    name: "Advent-of-Code",
    link: "https://github.com/hojott/Advent-of-Code",
    description: "Last Christmas I did Advent of Code in Rust. I didn’t end up finishing it because of course deadlines, but there’s a bunch of Rust algorithms in there."
  },
  www: {
    name: "www",
    link: "https://github.com/hojott/www",
    description: "My website: www.kussi.fi! Nothing too fancy since I hate web development. There’s also a pile of branches in Github that I never finished."
  },
  courses: {
    name: "tira, ohtu, fullstak2007, webtietokanta, ...",
    link: "https://github.com/hojott/",
    description: "Course repos, nothing too special."
  },
  littlescripts: {
    name: "scripts, random-python, resourcepacks, ...",
    link: "https://github.com/hojott/",
    description: "Various little programs and fun stuff."
  },
  birdnest: {
    name: "birdnest",
    link: "https://github.com/hojott/birdnest",
    description: "My application for Reaktor’s summer job, which I made in high school. I wanted to stand out, so I built the site completely without JavaScript :D I didn’t get the job, but when I was later setting up my server I checked out the docker-compose.yml from it — gives you an idea of how my server works."
  },
  nasawallpaper: {
    name: "nasawallpaper",
    link: "https://github.com/hojott/nasawallpaper",
    description: "One of my first projects — fetches NASA’s wallpaper of the day. Later ran into issues because sometimes NASA puts a video there instead :D"
  },
  poppi_downloader: {
    name: "poppi_downloader",
    link: "https://gitlab.paivola.fi/smarttin/poppi_downloader",
    description: "Downloads a big batch of music using yt-dlp, grabbing the links from another site. Has things like comment parsing to avoid injection attacks. This was meant for Päivölä’s “poppi” tradition, where on the morning of finals people blast music from computers all around the building. I left it a bit unfinished since I couldn’t find the error code docs for yt-dlp :D"
  },
  escapingfame: {
    name: "Escaping Fame",
    link: "https://github.com/hojott/escaping-fame",
    description: "Made for a game jam — an anti-dating sim where you have to avoid your fans. If you meet one, you need to escape the situation smoothly so your stress level doesn’t increase. I worked mostly on the movement logic. Made with pygame."
  },
  boxipeli: {
    name: "Boxipeli",
    link: "https://gitlab.paivola.fi/smarttin/life-in-a-box",
    description: "Another game jam game, where you collect items and put them in a cardboard box. Nothing too fancy, but it was fun to make."
  }
}

export default portfolioList