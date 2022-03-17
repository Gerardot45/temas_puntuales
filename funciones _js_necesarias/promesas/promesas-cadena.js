const empleados = [
  {
    id: 1,
    nombre: "Gerardo",
  },
  {
    id: 2,
    nombre: "Karen",
  },
  {
    id: 3,
    nombre: "Linda",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
  {
    id: 3,
    salario: 2000,
  },
];

/**
 *
 * @param {int} id
 * @returns Un objeto
 */

//el problema con los callback, es que no diferencian entre diferentes tipos de datos
const getEmpleado = (id) => {
  //Resolve, es algo que se ejecutará cuando todo salga correctamente
  //Reject, nos mandará e irá al catch
  return (promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id);
    empleado ? resolve(empleado) : reject(`No existe empledo con id:${id}`);
  }));
};

const getSalario = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id);
    salario ? resolve(salario) : reject(`No existe empledo con id:${id}`);
  }));
};

const id = 1;
let nombre;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

getEmpleado(id)
    .then((empleado) => {
        nombre = empleado
        return getSalario(id);
    });
