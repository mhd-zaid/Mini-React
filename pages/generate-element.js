export default function generate_element(structure) {
    const elem = document.createElement(structure.tag);
    if (structure.attributes) {
      for (let attrName in structure.attributes) {
        const attrValue = structure.attributes[attrName];
        if (/^on[A-Z]/.test(attrName)) {
          elem.addEventListener(attrName.slice(2).toLowerCase(), attrValue);
        } else if (attrName.startsWith("data-")) {
          elem.dataset[attrName.slice(5)] = attrValue;
        } else {
          elem.setAttribute(attrName, attrValue);
        }
      }
    }
    if (structure.children) {
      for (let child of structure.children) {
        let childNode;
        if (typeof child === "string") {
          childNode = document.createTextNode(child);
        } else {
          childNode = generate_element(child);
        }
        elem.appendChild(childNode);
      }
    }

    if(structure.component){
      console.log(structure.component)
      elem.appendChild(structure.component)
    }

    if (structure.events) {
      for (let eventName in structure.events) {
        const eventHandler = structure.events[eventName];
        elem.addEventListener(eventName, eventHandler);
      }
    }
    return elem;
  }