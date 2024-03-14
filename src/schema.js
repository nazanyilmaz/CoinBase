//yup kutuphanesinden olusturulur. ve hepsini import edilmeli *ile yuptaki herseyi import eder.
import * as yup from "yup";

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//bu bir validasyon semasinir
//formdaki inputlarin dogrulugunu kontrol etmek icin kosullarin tanimlandigi sema
//kosullar yazilirken once kosulun tipini ytanimlayan yup fonk. cagirilir
export const schema = yup.object().shape({
  //email icin kosullar
  email: yup.string().email().required(),

  //yas icin kosullar
  age: yup.number().min(18).max(100).integer().required(),

  //password icin kosullar //matches(regex) sifre yukarida belirlitilen regex e uygunmu fiye check eder
  password: yup
    .string()
    .min(5)
    .matches(regex, "password is not strong")
    .required(),
  //oneOf kontrol edilen deger ile inpuutaki degerin esitligini kontrol eder
  //ref() farkli bir inputtaki veriye ulasmayi saglar
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "password confrim is not match")
    .required(),
});
