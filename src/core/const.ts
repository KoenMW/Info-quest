import { Lang } from "../types";

export let local: boolean = false;

export const setLocal = (newLocal: boolean) => {
  local = newLocal;
};

export let lang: Lang = "en";

export const setLang = (newLang: Lang) => {
  lang = newLang;
};

export const bounds = {
  width: 512,
  height: 256,
};
