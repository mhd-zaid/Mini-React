import MyComponent from "../component/myComponent.js";

import LinkComponent from "../component/linkComponent.js";

const linkComponent = new LinkComponent({ text: "Hello, World!" });
const page2 = {
  tag: "div",
  children: [
    {
      tag: "header",
      children: [
        {
          tag: "h1",
          children: ["Page 2"],
        },
      ],
      component: linkComponent.display({
        text: "page1",
        link: "/page1",
      }),
    },
  ],
};

export default page2;
