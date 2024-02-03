import React from "react";
import Card from './Card';
import "./index.css";
import SeriesData from "./SeriesData";

const App = () => {
  return (
    <>
    <div className="Headdiv">
      <h2 className='mainHeading'> BEST WEB SERIES </h2>
    </div>

    <hr id="hrtag"/>
    {SeriesData.map(
      function ncard(val){
        return (
          <Card
            key={val.id}
            imgsrc= {val.series_image}
            where= {val.platform}
            sname= {val.series_name}
            slink= {val.link}
          />
        )

      }
    )
  }
    
  </>
  
  );
}

export default App;
