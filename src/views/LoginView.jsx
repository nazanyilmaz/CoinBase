import { inputs } from "../constant";
import InputFieldview from "./InputFieldview";

const LoginView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container  my-5" style={{ maxWidth: "700px" }}>
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img src="/c-logo.png" height={60} className="header-img" />

          <span className="header-name ">
            Coinba<span className="text-warning">Ƨ</span>e
          </span>
        </h2>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data) => (
            <InputFieldview formik={formik} data={data} />
          ))}

          <button type="submit" className="btn btn-warning fw-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
