import "./styles.css";
import { obj } from "./object";
import { useReducer } from "react";
import { reducer } from "./reducer";
import { getSortedData } from "./getSortedData";
import { getFilteredData } from "./getFilteredData";

export default function App() {
  const [
    { sortBy, showEntireInventory, showFastDeliveryOnly },
    dispatch
  ] = useReducer(reducer, {
    sortBy: "none",
    showEntireInventory: false,
    showFastDeliveryOnly: false
  });

  const sortedData = getSortedData([...obj.arr], sortBy);
  const filteredData = getFilteredData(
    sortedData,
    showEntireInventory,
    showFastDeliveryOnly
  );
  return (
    <div className="App">
      <fieldset>
        <legend>sort by:</legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          />
          price - low to high
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          />
          price - high to low
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() =>
              dispatch({ type: "SORT", payload: "RATING_HIGH_TO_LOW" })
            }
            checked={sortBy && sortBy === "RATING_HIGH_TO_LOW"}
          />
          rating - high to low
        </label>
      </fieldset>
      <fieldset>
        <legend>filter:</legend>
        <label>
          <input
            type="checkbox"
            name="filter"
            onChange={() =>
              dispatch({ type: "FILTER", payload: "showEntireInventory" })
            }
            checked={showEntireInventory}
          />
          include out of stock
        </label>
        <label>
          <input
            type="checkbox"
            name="filter"
            onChange={() =>
              dispatch({ type: "FILTER", payload: "showFastDeliveryOnly" })
            }
            checked={showFastDeliveryOnly}
          />
          show items with fast delivery
        </label>
      </fieldset>
      <ul>
        {filteredData.map(({ id, name, price, rating, inStock, delivery }) => (
          <li
            style={{
              listStyle: "none",
              padding: "1em",
              border: "1px solid black",
              margin: "1em"
            }}
            key={id}
          >
            <div>{name}</div>
            <div>price: &#8377; {price}</div>
            <div>avg rating: {rating}</div>
            {inStock ? <div>in stock</div> : <div>out of stock</div>}
            <div>{delivery}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
