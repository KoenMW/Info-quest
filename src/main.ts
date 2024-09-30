import router, {
  Routes,
  getFile,
  getParam,
  setRoutes,
} from "vanilla-js-ts-router";
import "./style.css";
import { setLocal } from "./core/const";

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
  setLocal(!!getParam("local"));
  setRoutes(routes);
  router(true, true);
};

init();
