import QRCode from "qrcode";
import { Data } from "../types";

const modules = document.querySelectorAll<HTMLElement>(".module");
const time = document.querySelector<HTMLDivElement>(".time");
const qr = document.querySelector<HTMLImageElement>(`.QR`);
const text = document.querySelector<HTMLDivElement>(".text");
const ec = document.querySelector<HTMLDivElement>(".ec");

let currentModule: string = "";

const stripedUrl = (url: string) => {
  const parsed = new URL(url);
  return `${parsed.origin}${parsed.pathname}`;
};

export const setQRCode = async (key: string) => {
  const url = `${stripedUrl(window.location.href)}?route=controller&key=${key}`;
  const data = await QRCode.toDataURL(url);
  if (!qr) return;

  qr.src = data;
  qr.addEventListener("click", () => {
    window.open(url, "_blank");
  });
};

export const setModule = (name: string = "") => {
  if (!modules) return;
  currentModule = name;
  modules.forEach((modal) => {
    modal.style.display = "none";
    if (name && modal.classList.contains(name)) {
      modal.style.display = "flex";
    }
  });
};

export const setRestart = () => {
  if (currentModule === "connectionLost") return;
  setModule("connectionLost");
  if (!time) return;
  let count = 10;
  time.innerText = count.toString();
  setInterval(() => {
    console.log(`count: ${count}`);
    if (count <= 0) {
      time.innerText = "restarting...";
      window.location.reload();
    } else {
      time.innerText = count.toString();
    }
    count--;
  }, 1000);
};

export const setData = (data: Data) => {
  setModule("data");
  if (!text || !ec) return;
  text.innerHTML = data.english;
  ec.innerText = data.ec.toString();
  setTimeout(() => {
    setModule();
  }, 10000);
};

export const setStartScreen = async () => {
  setModule("start-screen");
  const game = (await import("../core/game")).game;

  const start = () => {
    setModule();
    game.scene.resume();
    document.removeEventListener("keydown", start);
  };

  document.addEventListener("keydown", start);
};
