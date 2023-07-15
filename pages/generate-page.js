import generate_element from "./generate-element.js";

export default function generatePage() {
  const pageFound = this.routes[this.getPathname()] ?? this.routes["*"];
  console.log(pageFound);
  if (!pageFound) return;

  let elem = generate_element(pageFound);

  if (this.rootElement.firstChild) {
    this.rootElement.replaceChild(elem, this.rootElement.firstChild);
  } else {
    this.rootElement.appendChild(elem);
  }
}
