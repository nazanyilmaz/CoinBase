import millify from "millify";
import { Link } from "react-router-dom";

millify;

const CardView = ({ data }) => {
  //console.log(data);
  return (
    <Link
      to={`/coin/${data.id}`}
      className="coin-card d-flex flex-column justify-content-between border rounded p-3 text-decoration-none text-white"
    >
      <div>
        <h3>{data.name}</h3>
        <h6 className="text-warning">{data.symbol}</h6>
        <p>${millify(data.priceUsd)}</p>
      </div>
      <p className="mt-2">
        <span>Daily Change Percent(24Hr): </span>
        <span
          className={`fw-bold ${data.changePercent24Hr >= 0 ? "up" : "down"}`}
        >
          {" "}
          %{Number(data.changePercent24Hr).toFixed(2)}
        </span>
      </p>
    </Link>
  );
};

export default CardView;
