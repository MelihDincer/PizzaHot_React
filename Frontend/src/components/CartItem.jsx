export default function CartItem({ item, onIncrease, onDecrease }) {
  return (
    <li className="cart-item border-bottom p-2">
      <p>
        {item.title} - {item.quantity * item.price}
      </p>
      <div className="d-inline-flex align-items-center gap-2 border rounded px-2 py-1 bg-light">
        <button
          className="btn btn-sm btn-outline-danger px-2 py-0"
          onClick={onDecrease}
          style={{ width: "30px", height: "30px" }}
        >
          −
        </button>

        <span
          className="fw-bold fs-6"
          style={{ minWidth: "24px", textAlign: "center" }}
        >
          {item.quantity}
        </span>

        <button
          className="btn btn-sm btn-outline-success px-2 py-0"
          onClick={onIncrease}
          style={{ width: "30px", height: "30px" }}
        >
          +
        </button>
      </div>
    </li>
  );
}
