import routes from "./../router/routes.js";
import HistoryRouter from "./../router/history-router.js";

export function generatePages() {
  const root = document.getElementById("root");
  HistoryRouter(routes, root);
}
