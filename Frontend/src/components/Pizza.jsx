import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";

export default function Pizza({ data }) {
  const { color } = useContext(ThemeContext);
  const { addItem } = useContext(CartContext);

  function handleAddItem() {
    addItem(data);
  }
  return (
    <div className="col">
      <div className="card item">
        <img
          src={`http://localhost:3000/images/${data.image}`}
          alt={data.title}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h3 className="card-title">{data.title}</h3>
          <p className="card-text">{data.description}</p>
          <div className="item-price">
            <b>{data.price} ₺</b>
            <button
              className={`btn btn-sm btn-outline-${color}`}
              onClick={handleAddItem}
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
