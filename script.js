
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const visible = password.type === "text";

  password.type = visible ? "password" : "text";
  togglePassword.textContent = visible ? "Mostrar" : "Ocultar";
  togglePassword.setAttribute(
    "aria-label",
    visible ? "Mostrar contraseña" : "Ocultar contraseña"
  );
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const correo = email.value.trim();
  const clave = password.value;

  message.className = "message";

  if (!correo || !clave) {
    mostrarMensaje("Completa todos los campos.", "error");
    return;
  }

  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoCorreo.test(correo)) {
    mostrarMensaje("Ingresa un correo válido.", "error");
    return;
  }

  if (clave.length < 8) {
    mostrarMensaje(
      "La contraseña debe tener al menos 8 caracteres.",
      "error"
    );
    return;
  }

  mostrarMensaje(
    "Validación completada correctamente (demostración).",
    "success"
  );
});

function mostrarMensaje(texto, tipo) {
  message.textContent = texto;
  message.className = `message ${tipo}`;
}
