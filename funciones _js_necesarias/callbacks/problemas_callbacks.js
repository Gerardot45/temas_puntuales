//Serán datos que simularemos como una BBDD
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
const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  //si esxite el empleado, no es null, no es undefined
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`El empleado con id = ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario; //de aquí tengo el salario
  //el signo de interrogación nos indica que nos
  //si esxite el empleado, no es null, no es undefined
  if (salario) {
    callback(null, salario);
  } else {
    callback(`El salario con id = ${id} no existe`);
  }
};

// getEmpleado(1, (err, empleado) => {
//   if (err) {
//     console.log("ERROR");
//     return console.log(err);
//   }
//   console.log("empleado encontrado");
//   console.log(empleado);
// });

getSalario(1,(err, salario)=>{
    console.log(salario )
})
