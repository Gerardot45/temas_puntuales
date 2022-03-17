//es un callback
// setTimeout(() => {
//   console.log("hola");
// }, 1000);
/**
 * @param {int} id - Recibe el id de algun usuario en específico
 * @param {function} callback - regresamos el usuario
 */
const getUsuarioById = (id,callback) => {
  const usuario = {
    id,
    nombre:"Gerardo"
  };

  setTimeout(() => {
    callback(usuario)
  }, 1500)
};

getUsuarioById(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase())
});
