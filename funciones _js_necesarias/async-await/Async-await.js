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
const getEmpleado = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    console.log(empleado);
    empleado ? resolve(empleado) : reject(`No existe empledo con id:${id}`);
  }));
};

const getSalario = (id) => {
  return (promesa = new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    console.log(salario);
    salario ? resolve(salario) : reject(`No existe empledo con id:${id}`);
  }));
};

const id = 1;

const getInfoUsuario = async (id) => {
  const empleado = await getEmpleado();
  const salario = await getSalario();
  return `El salario del empleado ${empleado} es de $${salario}`;
};

getInfoUsuario().then((msg) => {
  console.log(msg);
});
