const persona = {
  nombre: "Isay",
  edad: 37,
  direccion: {
    ciudad: "Qrp",
    pais: "MX",
  },
};

console.log(
  "Me llamo " +
    persona.nombre +
    ", tengo " +
    persona.edad +
    " años" +
    " y vivo en " +
    persona.direccion.ciudad +
    ", " +
    persona.direccion.pais
);
