import router, { Routes, getFile, setRoutes } from "vanilla-js-ts-router";
import "./style.css";
import { setupTRINN } from "trinn-remote-control";

const routes: Routes = {
  screen: {
    title: "screen",
    content: getFile("html/screen.html"),
    scripts: [
      () => import("./views/screen").then((module) => module.default()),
    ],
  },
  controller: {
    title: "controller",
    content: getFile("html/controller.html"),
    scripts: [
      () => import("./views/controller").then((module) => module.default()),
    ],
  },
};

const init = async () => {
  await setupTRINN(import.meta.env.VITE_TURN_SERVER_KEY);
  setRoutes(routes);
  router(true, true);
};

init();
