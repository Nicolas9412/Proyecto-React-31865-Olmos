import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", productId);

    getDoc(docRef)
      .then((doc) => {
        const productFormatted = { id: doc.id, ...doc.data() };
        setProduct(productFormatted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        <h3>Cargando...</h3>
      </div>
    );
  }

  return <ItemDetail {...product} />;
};

export default ItemDetailContainer;
