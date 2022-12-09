import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
// import "./App.css";
// import SearchButton from "./SearchButton";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
// import SearchResults from "./SearchResults.JS";
import Restaurant from "./Restaurant";

const data = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">CYF Hotel</header> */}
      <Heading />
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer data={data} />
    </div>
  );
};

export default App;
