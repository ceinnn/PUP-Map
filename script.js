const areas = document.querySelectorAll("area");
const tooltip = document.getElementById("tooltip");
const tooltipImg = document.getElementById("tooltip-img");
const tooltipTitle = tooltip.querySelector("h3");
const tooltipInfo = tooltip.querySelector("p");

areas.forEach((area) => {
  area.onmouseover = (e) => {
    tooltipImg.src = area.getAttribute("data-img");
    tooltipTitle.textContent = area.getAttribute("data-title");
    tooltipInfo.textContent = area.getAttribute("data-info");

    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.display = "block";
  };

  area.onmousemove = (e) => {
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
  };

  area.onmouseout = () => {
    tooltip.style.display = "none";
  };
});
