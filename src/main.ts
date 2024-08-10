import router, { Routes, getFile, setRoutes } from "vanilla-js-ts-router";
import "./style.css";

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

setRoutes(routes);
router(true);
