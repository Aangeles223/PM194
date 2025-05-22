// Crea una función obtenerDatos() que simule una llamada a una API con setTimeout y
// usar async/await para esperar el resultado.

function simularPeicionAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Datos obtenidos correctamente");
    }, 5000);
  });
}

async function obtenerDatos() {
  try {
    const resultado = await simularPeicionAPI();
    console.log(resultado);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

obtenerDatos();
