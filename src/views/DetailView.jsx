import millify from "millify";
import { Chart as Chartjs } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

const DetailView = ({ model }) => {
  return (
    <div className="overflow-x-hidden">
      <h2 className="text-center gap-3 d-flex justify-content-center">
        <span className="text-decoration-underline ">
          {model?.coin?.detail?.symbol}
        </span>
        <span className="text-warning">{model?.coin?.detail?.name}</span>
      </h2>

      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields?.map((item, i) => (
            <div key={i} className=" rounded  text-center coin-card">
              <span className="fs-3">{item.icon}</span>
              <h4 className="fw-bold">{item.label}</h4>
              <p>{millify(item.value)}</p>
            </div>
          ))}
        </section>
        <section className="col-md-9 d-flex flex-column gap-5 p-5 p-md-4">
          <Line data={model?.graphicData} />
          <Bar data={model?.graphicData} />
        </section>
      </div>
    </div>
  );
};

export default DetailView;
