import axios from "axios";
import { SiCoinmarketcap } from "react-icons/si";
import { MdEventAvailable, MdPriceChange } from "react-icons/md";
import { FaPercent } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";

export default class DetailModel {
  constructor(coin) {
    // coin verilerini class'tan alıncak örneğin içine gönderelim
    this.coin = coin;

    console.log(coin);

    // detay verilerinden oluşan bir dizi hazirlayalim
    this.infoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Market Cap",
        value: coin?.detail?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply",
        value: coin?.detail?.maxSupply,
      },
      {
        icon: <MdPriceChange />,
        label: "Price",
        value: coin?.detail?.priceUsd,
      },
      {
        icon: <FaPercent />,
        label: "Change for 24hr. (%)",
        value: coin?.detail?.changePercent24Hr,
      },
      {
        icon: <RiStockFill />,
        label: "Volume for 24hr.",
        value: coin?.detail?.volumeUsd24Hr,
      },
    ];

    //graficte kullanilacak veriler
    //console.log(coin.history);
    this.graphicData = {
      labels: coin?.history?.map((i) => new Date(i.date).toLocaleDateString()),
      datasets: [
        {
          id: 1,
          label: "Price",
          data: coin?.history?.map((i) => i.priceUsd),
          borderColor: "#cc9004",
          backgroundColor: "#cc9004",
        },
      ],
    };
  }

  static async getCoin(id) {
    // Birden fazla api isteğini aynı anda atma
    const response = await Promise.all([
      axios.get(`https://api.coincap.io/v2/assets/${id}`),

      axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`),
    ]);

    return {
      detail: response[0].data.data,
      history: response[1].data.data,
    };
  }

  // api'dan hem fiyat hem detay verisini alalim
}
