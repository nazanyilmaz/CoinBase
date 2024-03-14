import axios from "axios";

// anasayfanın model katmanı
export default class MainModel {
  // api'dan coin verilerini al
  static async getCoins(page) {
    try {
      const params = {
        offset: (page - 1) * 13, // kac veri atlanacak
        limit: 13, // kac veri alinacak
      };
      const res = await axios.get("https://api.coincap.io/v2/assets", {
        params,
      });

      //console.log(res.data);

      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}

// classlarin icinde ki bir metoda erismek icin new yazarak yeni bir ornegini olusturuyoruz ama basina static yazarsak new ile yeni bir ornek olusturmaya gerek kalmadan icindeki metoda ulasabiliriz
////const model = new MainModel();
//model.getCoins();
