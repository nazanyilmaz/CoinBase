import { FaBitcoin } from "react-icons/fa";
import CardView from "./CardView";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const MainView = ({ coins, setPage }) => {
  const navigate = useNavigate();
  return (
    <div className="container-xl mt-5">
      <h3 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome, Coins List</span>
      </h3>
      <h4>
        Coinba<span className="text-warning">Ƨ</span>e is a secure online
        platform for buying, selling, transferring and storing cryptocurency.
      </h4>
      <div className="d-flex gap-4 justify-content-around my-5">
        {coins?.slice(0, 3)?.map((data) => (
          <CardView data={data} key={data.id} />
        ))}
      </div>

      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <th>#</th>
          <th>Coin</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>% Changes (24hr)</th>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr onClick={() => navigate(`/coin/${coin.id}`)} key={coin.id}>
              <td>{coin.rank}</td>
              <td>
                <span className="fw-bold text-warning">{coin.symbol} </span>
                <span> {coin.name}</span>
              </td>
              <td>$ {millify(coin.priceUsd)}</td>
              <td>$ {millify(coin.marketCapUsd)}</td>
              <td>$ {millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr > 0 ? "up" : "down"}>
                % {Number(coin.changePercent24Hr).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center my-3">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="more-btn"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default MainView;
