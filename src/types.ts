export type Inputs =
  | "left_press"
  | "left_release"
  | "right_press"
  | "right_release"
  | "jump"
  | "jump_release";

export type Data = {
  nameNL: string;
  nameEN: string;
  en: string;
  nl: string;
  ec: number;
};

export type Lang = "en" | "nl";

export type Translations = Record<Lang, Record<string, string>>;

export type Location = {
  x: number;
  y: number;
};
