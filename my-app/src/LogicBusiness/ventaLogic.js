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
  const res = await addOrdenCompra(ordenCompra);
  return res;
};

export { crearOrdenCompra };
