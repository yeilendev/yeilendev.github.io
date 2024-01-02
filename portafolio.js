const inicio = document.getElementById("Inicio");
const body = document.getElementsByTagName("body");
const skills = document.getElementById("skills");
const proyectos = document.getElementById("proyectos");
const contacto = document.getElementById("contactos");

inicio.addEventListener("click", () => {
  window.scroll(0, 0);
});
skills.addEventListener("click", () => {
  window.scroll(0, 401);
});
proyectos.addEventListener("click", () => {
  window.scroll(0, 856);
});
contacto.addEventListener("click", () => {
  window.scroll(0, 1000);
});
