import QRCode from "qrcode";

const stripedUrl = (url: string) => {
  const parsed = new URL(url);
  return `${parsed.origin}${parsed.pathname}`;
};

export const setQRCode = async (key: string) => {
  const url = `${stripedUrl(window.location.href)}?route=controller&key=${key}`;
  const data = await QRCode.toDataURL(url);
  const qr = document.querySelector<HTMLImageElement>(`.QR`);
  if (!qr) return;

  qr.src = data;
  qr.addEventListener("click", () => {
    window.open(url, "_blank");
  });
};

export const setModule = (name?: string) => {
  const modals = document.querySelectorAll<HTMLElement>(".module");
  modals.forEach((modal) => {
    modal.style.display = "none";
    if (name && modal.classList.contains(name)) {
      modal.style.display = "flex";
    }
  });
};

export const setRestart = () => {
  setModule("connectionLost");
  const time = document.querySelector<HTMLDivElement>(".time");
  if (!time) return;
  let count = 10;
  time.innerText = count.toString();
  setInterval(() => {
    time.innerText = count.toString();
    if (count <= 0) {
      window.location.reload();
    }
    count--;
  }, 1000);
};
