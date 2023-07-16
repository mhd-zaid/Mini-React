export function HashLink(title, href) {
    return {
      tag: "a",
      attributes: {
        href: "#" + href,
      },
      children: [title],
    };
  }
  
  export default function HashRouter(routes, rootElement) {
    const router = {
      routes: routes,
      rootElement: rootElement,
      getPathname: function () {
        return window.location.hash.slice(1);
      },
    };
  
    window.onhashchange = generatePage.bind(router);
    generatePage.call(router);
  }