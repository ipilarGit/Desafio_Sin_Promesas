const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";

  try {
    const respuesta_del_fetch = await fetch(url);
    const data = await respuesta_del_fetch.json();
    return data;
  } catch (error) {
    console.log("Ups!!!, ha ocurrido un error:" + error);
  }
};

const imprimirDatos = async () => {
  const datos = await getDatos();
  console.log(datos);
  // Muestra los primeros 20 titulos de albumes
  const datos20 = datos.slice(0, 20);
  console.log(datos20);
  datos20.forEach((dato) => {
    console.log(dato.title);
  });
};

const mostrarMensaje = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      mensaje = "Mensaje Enviado.";
      resolve(mensaje);
    }, 3000);
  });
};

const principal = async () => {
  await imprimirDatos();
  const mensaje = await mostrarMensaje();
  console.log(mensaje);
};

principal();
