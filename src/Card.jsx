import { directive } from '@babel/types';
import React from 'react';


function Card(props){
    return (
        <>
        <div className="allcards">
            <div className="card">
                <img src={props.imgsrc} alt="Series Photo" className='card_img'/>
                <div className="card_info">
                    <h3 className="seriesname">{props.sname}</h3>
                    <span className="card_category">{props.where}</span>
                    <a href={props.slink} target="_blank">
                    <button> Watch Now </button>
                    </a>
                    <a href={props.know} target="_blank">
                    <button> Know More </button>
                    </a>
                </div>
            </div>
        </div>
          </>
    );
  };

export default Card;