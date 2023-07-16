import generatePage from "../pages/generate-page.js";

export function Link(title, href) {
  return {
    tag: "a",
    attributes: {
      href,
      onClick: function (event) {
        event.preventDefault();
        window.history.pushState({}, "", href);
      },
    },
    children: [title],
  };
}

export default function HistoryRouter(routes, rootElement) {
  const router = {
    routes: routes,
    rootElement: rootElement,
    getPathname: function () {
      return window.location.pathname;
    },
  };

  const oldPushState = window.history.pushState;
  window.history.pushState = function (data, title, url) {
    oldPushState.call(window.history, data, title, url);
    window.dispatchEvent(new Event("popstate"));
    // ou generatePage();
  };

  window.onpopstate = generatePage.bind(router);
  generatePage.call(router);
}