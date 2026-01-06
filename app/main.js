
const app = document.getElementById("app");

const modes = ["CALM", "EXECUTE", "CREATE", "ANALYZE"];
let i = 0;

setInterval(() => {
  app.querySelector("p").innerText = `Mode: ${modes[i % modes.length]}`;
  i++;
}, 2000);
