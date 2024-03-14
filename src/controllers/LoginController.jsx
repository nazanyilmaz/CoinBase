import { useFormik } from "formik";
import { schema } from "../schema";
import LoginView from "../views/LoginView";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();
  //formik'in tum ozellliklerini kullanmamizi saglayan hook
  const formik = useFormik({
    initialValues: {
      //formda tutlacak ilk veriler
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },
    //validasyon semasi tanimlamaliyiz cunku veriler semadakilere uygunmu diye bakar ve error statinde hatalari ekler ve bunu yup kutupanesi ile olusturuyoruz.
    validationSchema: schema,
    //forma gonderilince calisacak olan fonksiyondur ve otomotik sayfa yenilemyei engeller 1.parametre olarak formdaki verileri 2.parametre ise formda calisacak aksiyonlari alir
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
