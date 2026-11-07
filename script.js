
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");

// Mostrar y ocultar contraseña
togglePassword.addEventListener("click", () => {
  const visible = password.type === "text";

  password.type = visible ? "password" : "text";
  togglePassword.textContent = visible ? "Mostrar" : "Ocultar";

  togglePassword.setAttribute(
    "aria-label",
    visible ? "Mostrar contraseña" : "Ocultar contraseña"
  );
});

// Validación del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const correo = email.value.trim();
  const clave = password.value;

  message.className = "message";

  // Verificar campos obligatorios
  if (!correo || !clave) {
    mostrarMensaje(
      "Todos los campos son obligatorios.",
      "error"
    );
    return;
  }

  // Verificar formato del correo
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formatoCorreo.test(correo)) {
    mostrarMensaje(
      "El formato del correo no es válido.",
      "error"
    );
    email.focus();
    return;
  }

  // Verificar longitud de contraseña
  if (clave.length < 8) {
    mostrarMensaje(
      "La contraseña debe contener mínimo 8 caracteres.",
      "error"
    );
    password.focus();
    return;
  }

  // Confirmación de validación
  mostrarMensaje(
    "Validación exitosa. Formulario de demostración.",
    "success"
  );
});

// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {
  message.textContent = texto;
  message.className = `message ${tipo}`;
}
