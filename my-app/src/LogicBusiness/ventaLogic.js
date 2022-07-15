import { OrdenCompra } from "../models/ordenCompra";
import { addOrdenCompra } from "../services/firebase/ventaService";

const crearOrdenCompra = async (
  nombre,
  apellido,
  telefono,
  email,
  direccion,
  ciudad,
  provincia,
  codigoPostal,
  cart,
  total
) => {
  const ordenCompra = new OrdenCompra(
    nombre,
    apellido,
    telefono,
    email,
    direccion,
    ciudad,
    provincia,
    codigoPostal,
    cart,
    total
  );
  await addOrdenCompra(ordenCompra);
};

export { crearOrdenCompra };
