export type Inputs =
  | "left_press"
  | "left_release"
  | "right_press"
  | "right_release"
  | "jump"
  | "jump_release";

export type Data = {
  name: string;
  en: string;
  nl: string;
  gained: boolean;
  ec: number;
};

export type Lang = "en" | "nl";

export type Translations = Record<Lang, Record<string, string>>;
