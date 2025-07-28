export interface HTMLPage {
  id: string,
  applyContent: (() => void)
}

const HTMLDivApplier = (name: string, content: string) => {
  document.querySelector<HTMLDivElement>(name)!.innerHTML = content;
};

export const HTMLDivCreator = (id: string, content: string) => {
  return ({
    id: id,
    applyContent: () => HTMLDivApplier(id, content)
  })
}


export const paddingAdjustor = (
  dynamicPanel: string,
  paddablePanel: string
) => {
  document.addEventListener("DOMContentLoaded", function () {
    const dynamicElement = document.querySelector<HTMLElement>(dynamicPanel);
    const paddableElement = document.querySelector<HTMLElement>(paddablePanel);
    const adjustPadding = () => {
      if (dynamicElement && paddableElement) {
        const bottomPanelHeight = dynamicElement.offsetHeight;
        paddableElement.style.paddingBottom = bottomPanelHeight + "px";
      }
    };

    adjustPadding();
    window.addEventListener("resize", adjustPadding);
  });
};
