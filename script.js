document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".app-card").forEach(card => {
    card.addEventListener("click", () => {
      const app = card.getAttribute("data-app");
      const platform = detectPlatform();
      redirectToStore(app, platform);
    });
  });
});

function detectPlatform() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
    return "ios";
  } else if (ua.includes("android")) {
    return "android";
  } else {
    return "unknown";
  }
}

function redirectToStore(app, platform) {
  const links = {
    myxl: {
      android: "https://play.google.com/store/apps/details?id=com.apps.MyXL&hl=id",
      ios: "https://apps.apple.com/id/app/myxl-cek-kuota-beli-paket-xl/id683141076"
    },
    axisnet: {
      android: "https://play.google.com/store/apps/details?id=com.axis.net&hl=id",
      ios: "https://apps.apple.com/id/app/axisnet/id497146073?l=id"
    },
    mysf: {
      android: "https://play.google
