export default function HTMLDivCreator(name: string, content: string) {
    document.querySelector<HTMLDivElement>(name)!.innerHTML = content
  }
  