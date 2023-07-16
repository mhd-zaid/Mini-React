import MyComponent from "../component/myComponent.js";
import LinkComponent from "../component/linkComponent.js";

const linkComponent = new LinkComponent({ text: "Hello, World!" });

const myComponent = new MyComponent({ text: "Hello, World!" });
// MiniReact.createElement ("div", { id: "myDiv" }, [
//   MiniReact.createElement(LinkComponent, { text: "mylink" }),
//   MiniReact.createElement("p", { id: "myP" }, ["Hello, World!"]),
// ]);
const page1 = {
  tag: "div",
  children: [
    {
      tag: "header",
      children: [
        {
          tag: "h1",
          events: {
            click: () =>
              fetch("https://jsonplaceholder.typicode.com/todos/1")
                .then(response => response.json())
                .then(json => console.log(json)),
          },
          children: ["Page 1"],
        },
      ],
      component: linkComponent.display({
        text: "page2",
        link: "/page2",
      }),
    },
    {
      tag: "main",
      children: [
        {
          component: myComponent.display({ text: "Salut, le monde!" }),
        },
      ],
    },
  ],
};

export default page1;
