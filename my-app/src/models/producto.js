export class Producto {
  constructor(
    id,
    title,
    description,
    category,
    brand,
    pictureUrl,
    price,
    stock
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.brand = brand;
    this.pictureUrl = pictureUrl;
    this.price = price;
    this.stock = stock;
  }
}
