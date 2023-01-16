import React from "react";
import "./card.css"
import add from "./49-plus-circle-flat.gif";
import {FiEye} from "react-icons/fi"
import {BsCheck} from "react-icons/bs"
import Popup from "../popup/popup"

function Card(props) {


    


    return(

<div>
{props.reccomend? <Popup rateMovie={props.rateMovie} next={props.next} type={"reccomend"} toast={props.toast} img={props.img} reccomend={props.setrec}/> : ""}
{props.ratepop?< Popup rateMovie={props.rateMovie} next={props.next} type={"rate"}  toast={props.toast} img={props.img} rate={props.setRate}/> : ""}

        <div className={`Card_Container  ${props.reccomend? "opened" : ""} ${props.ratepop? "opened" : ""}`}>




{props.see? <BsCheck className="watchIcon"/> : <FiEye className="watchIcon2"/>}
            


            <div className={`poster   ${props.reccomend? "popopen" : ""} ${props.add1? "added" : ""} ${props.add2? "added2" : ""}  ${props.inanimation? "inanimation" : ""} ${props.between? "between" : ""} ${props.outanimation? "outanimation" : ""}`}>

                <img src={props.img} />

            <div className="details">
                <h3>{props.title}</h3>
                <div className="tags">
                    {
                        props.tags? 
                        props.tags.map(tag =>  <div className={tag}>{tag}</div>)
                        : ""
                    }
                    
                </div>
                <p>{props.description}</p>
                
            </div>
            </div>

    </div>
    </div>

    )
}

export default Card