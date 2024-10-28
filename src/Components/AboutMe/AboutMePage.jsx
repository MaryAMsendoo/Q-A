import { useState } from "react";
import Data from "./Data";
import '../AboutMe/style.css'

 function AboutMePage() {
  // define current state
  const [selection, setSelection] = useState([]);

  // function to toggle selection
  const handleSelection = (current) => {
    if(selection.includes(current)){
      setSelection(selection.filter((id) => id !== current));
    } else{
      // if it's not, add it to the selection array
      setSelection([...selection, current]);
    }
  };

  return (
    <div className="container">
      <div className="sub_container">
      <h1>RANDON QUESTIONS PEOPLE USUALLY ASK.</h1>
        {/* to validate array */}
        {Data && Data.length > 0 ? (
            // passing a parameter hold a data  values
          Data.map((dataItem) => (
            // setting key to update the UI 
            <div key={dataItem.id} className="items">
                {/* calling the function to handle selection when click the tile  */}
              <div
                className="title"
                onClick={() => handleSelection(dataItem.id)}
              >
                {/* displaying the Titile which is the question  */}
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {/* checking for condition to display the answer  */}
              {selection.includes(dataItem.id) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default AboutMePage;