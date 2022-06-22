import React from "react"
import Header from "./Header"
import Main from "./Main"
import MountFuji from "./mount-fuji.png"
import OperaHouse from "./opera-house.png"
import Norway from "./norway.png"
export default function App(){
  return(
    <div>
      <Header />
      <Main 
      country="Japan"
      img={`${MountFuji}`}
      place="Mount Fuji"
      date="12 Jan, 2021 - 24 Jan, 2021"
      info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />
      <Main 
      country="Australia"
      img={`${OperaHouse}`}
      place="Sydney Opera House"
      date="27 May, 2021 - 8 Jun, 2021"
      info="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
      />
      <Main 
      country="Norway"
      img={`${Norway}`}
      place="Geirangerfjord"
      date="01 Oct, 2021 - 18 Nov, 2021"
      info="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </div>
  )
}