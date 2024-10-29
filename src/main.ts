import router, {
  Routes,
  getFile,
  getParam,
  setRoutes,
} from "vanilla-js-ts-router";
import "./style.css";
import { setLocal } from "./core/const";
import { setTranslation } from "./core/utils";

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
  await router(true, true);

  const langParam = getParam("lang");
  if (langParam && (langParam === "en" || langParam === "nl")) {
    setTimeout(() => {
      setTranslation(langParam);
    }, 1000);
  }
};

init();