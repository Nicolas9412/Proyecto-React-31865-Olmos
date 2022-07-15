import { useState } from "react";

const Counter = ({ title, onAdd, stock, initial = 0 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    count < stock && setCount(count + 1);
  };

  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex">
        <div>
          <button className="btn btn-danger me-3" onClick={decrement}>
            -
          </button>
        </div>
        <div>
          <p className="fs-3 font-weight-bold">{count}</p>
        </div>
        <div>
          <button className="btn btn-success ms-3" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <button
        className="btn btn-primary fs-5 mt-2"
        onClick={() => count !== 0 && onAdd(count)}
      >
        {title}
      </button>
    </div>
  );
};

export default Counter;
