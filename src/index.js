import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import SeriesData from "./SeriesData";
import './index.css';

ReactDOM.render(
  <>
    <h1 className="heading">List Of Top Netflix Series</h1>

    {SeriesData.map((value) => {
      return (
        <Card
          cardImge={value.cardImge}
          tilte={value.tilte}
          seriesName={value.seriesName} 
          link={value.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import * as name from './App';

// ReactDOM.render(
//   <>
//     <ol>
//       <li>{name.programe}</li>
//       <li>{name.myname()}</li>
//       <li>{name.default}</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );
// -------------------------------------------------------------------
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App';

// ReactDOM.render(
//     <App/>,
//   document.getElementById("root")
// );

// ----------------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const google = "//google.com"
// const img = "https://picsum.photos/200/200/";

// const style = {
//   color: "#f58020",
//   textTransform: "capitalize",
//   textAlign: "center",
//   fontWeight: "bold",
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "10px 10px",
// }

// ----------------------------------------------------------------

// let date = new Date().getHours();
// let wish;

// const style = {};

// if (date > 6 && date < 12) {
//   wish = "Good Morning";
//   style.color = "green";
// } else if (date > 12 && date < 6) {
//   wish = "Good Evening";
//   style.color = "orange";
// } else {
//   wish = "Good Night";
//   style.color = "black";
// }

// ReactDOM.render(
//   <>
//     <div>
//       <h1>
//         Hello sir, <span style={style}>{wish}</span>
//       </h1>
//     </div>
//   </>,
//   document.getElementById("root")
// );

// ----------------------------------------------------------------------

// const img = "https://picsum.photos/200/300/";
// const google = "//google.com"

// ReactDOM.render(
//   <>
//     <h1 contentEditable="true">My name is Zeo</h1>
//     <a href={google} target="_blank">
//     <img src={img} alt="didn't got" />
//     </a>
//   </>,
//   document.getElementById("root")
// );

// ------------------------------------------------------------------------

// import React from "react";
// import ReactDOM from "react-dom";

// const date = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();
// ReactDOM.render(
//   <>
//     <h1>Hello, my name is zeo</h1>
//     <p>Current Date is = {date}</p>
//     <p>Current time is = {time}</p>
//   </>,
//   document.getElementById("root")
// );
