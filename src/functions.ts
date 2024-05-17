export const HTMLDivCreator = (name: string, content: string) => {
  document.querySelector<HTMLDivElement>(name)!.innerHTML = content;
};

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
