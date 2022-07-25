const logs = JSON.parse(localStorage.getItem("logs"));
const logs_container = document.getElementById("logs");

logs.forEach((log) => {
  const li = document.createElement("li");
  li.innerText = `${log.nombre} ----- ${log.correo} ----- ${log.fecha} ----- ${log.hora} `;
  logs_container.insertAdjacentElement("beforeend", li);
});
