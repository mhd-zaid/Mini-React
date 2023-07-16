import page1 from "../pages/page1.js";
import page2 from "../pages/page2.js";
import page404 from "../pages/404.js";
import LinkComponent from "../component/linkComponent.js";

const linkComponent = new LinkComponent({ text: "Hello, World!" });

const main = {
  tag: "div",
  children: [
    {
      tag: "header",
      children: [
        {
          tag: "h1",
          children: ["Main Page"],
        },
      ],
      component: linkComponent.display({
        text: "Lien vers la page1",
        link: "/page1",
      }),
    },
  ],
};

export default {
  "/": main,
  "/page1": page1,
  "/page2": page2,
  "*": page404,
};
