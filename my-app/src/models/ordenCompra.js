export class OrdenCompra {
  constructor(
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
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.email = email;
    this.direccion = direccion;
    this.ciudad = ciudad;
    this.provincia = provincia;
    this.codigoPostal = codigoPostal;
    this.cart = cart;
    this.total = total;
  }
}
