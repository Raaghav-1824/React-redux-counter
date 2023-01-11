import React from "react";
import { IncNumber, DecNumber } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="mainDiv">
      {/* <span> */}
      <div>
        <button onClick={() => dispatch(IncNumber())} className="btn">
          +
        </button>
      </div>

      <div>
        <input className="input" value={myState} />
      </div>

      <div>
        <button onClick={() => dispatch(DecNumber())} className="btn">
          -
        </button>
      </div>
      {/* </span> */}
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// function App(props) {
//   const mystyle = {
//     border: "3px solid green"
//   };

//   const [fname, setfName] = useState();
//   const [lname, setlName] = useState();

//   function handlefChange(event) {
//     return setfName(event.target.value);
//   }
//   function handlelChange(event) {
//     return setlName(event.target.value);
//   }

//   return (
//     <div>
//       <h1 className="Heading">
//         {" "}
//         HI {fname}
//         {lname}! Here are your books.
//       </h1>
//       <ul>
//         <li style={{ border: "3px solid yellow", color: "red" }}>
//           Psychology of Money
//         </li>
//         <input
//           onChange={handlefChange}
//           placeholder="Enter your firstName"
//           value={fname}
//         />
//         <input
//           onChange={handlelChange}
//           placeholder="Enter your lastName"
//           value={lname}
//         />
//         <li style={mystyle}>Subtle art of not giving a fuck</li>
//         <li>Atomic Habits</li>
//       </ul>
//     </div>
//   );
// }

// export default App;
