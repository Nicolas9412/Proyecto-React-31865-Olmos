import { db } from "./index";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { Producto } from "../../models/producto";
import { runTransaction } from "firebase/firestore";

const addOrdenCompra = async (orden) => {
  try {
    await runTransaction(db, async (transaction) => {
      for (const item of orden.cart) {
        const product = await getProductById(item.id);
        if (item.quantity >= product.stock) {
          throw new Error("No hay stock suficiente");
        } else {
          const stockRestante = product.stock - item.quantity;
          const productStockActualizado = { ...product, stock: stockRestante };
          const { id, ...data } = productStockActualizado;
          const productDoc = { ...data };
          transaction.set(doc(db, "products", id), productDoc);
        }
      }
    });
    console.log("Transaction successfully committed!");
    await addDoc(collection(db, "orders"), { ...orden });
  } catch (e) {
    console.log("Transaction failed: ", e);
  }
};

const getProductById = async (id) => {
  const productRef = doc(db, "products", id);
  const productSnap = await getDoc(productRef);
  const productData = productSnap.data();
  return new Producto(
    productSnap.id,
    productData.title,
    productData.description,
    productData.category,
    productData.brand,
    productData.pictureUrl,
    productData.price,
    productData.stock
  );
};

export { addOrdenCompra };
