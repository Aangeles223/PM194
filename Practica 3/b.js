// b.
// 1.Crea una función verificarUsuario(usuario) que retorne una promesa.
// 2. Si el nombre de usuario es "admin", la promesa se resuelve con "Acceso concedido", si no,
// se rechaza con "Acceso denegado".

function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

verificarUsuario("admin")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });
