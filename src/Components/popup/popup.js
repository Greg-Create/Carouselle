import React from "react"
import "./popup.css"
import {AiFillCheckCircle} from "react-icons/ai"
import {useState} from "react"
import ReactStars from "react-rating-stars-component";







function Popup(props){

    
const [select,setSelect] = useState([])

const  objects = [
  {image: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
  name: "John Doe",
  index:0,
  },

  {image: "https://blog.texasbar.com/files/2011/02/ConstanceMims1.jpg",
  name: "Alex Doe",
  index:1,

  },
  {image: "http://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg",
  name: "Ryan Alex",
  index:1,

  }
]

const[valid, setValid] = useState(false);
const[rating,setRating] = useState(0)

function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
  }

async function sendRec(){
    props.reccomend(false)
props.toast("rec")
await timeout(10000)
props.toast("")



}

function toggle(index){
  if(select.includes(index)){
   setSelect(select.filter(function(item){
    return item !== index;
    setValid(true)
   }))
   
   } // only splice array when item is found
      else{
    setSelect(prevArray => [...prevArray, index])
    setValid(true)

  }
  }



function togglehide(index){
    if(select.includes(index)){
        return "checked"
    }else{
        return " checked hidden"
    }
}

function ratingChanged (newRating)  {
    setRating(newRating);
    setValid(true)
  };

  async function sendRev(){
    props.rate(false)
    props.toast("rev")
    props.next()
await timeout(10000)
props.toast("")

  }

return(

    
    props.type == "reccomend" ?
   
    <div className="popup_container"> 
        <img src={props.img} className="minimg" />
        <h3>Reccomend Too</h3>

        <div className="friends_container">
        { objects.map((friend,index)=>(
        
         <div key={index} className="friends" onClick={() => toggle(index)}>
         <img src={friend.image}/>
         <h6>{friend.name}</h6>
         <AiFillCheckCircle className={togglehide(index)}/> 
         </div>
    ))  }
    </div>

    <button className={`reccomend ${valid?"" : "hidden"} `} onClick={sendRec}>Reccomend</button>

       
    </div>

  :<div className="popup_container2"> 
  <h3>Quick Rating</h3>
  <img  className="minimg2"  src={props.img}/>
  <p>Your rating: {rating} stars</p>
  <ReactStars
  className={"rating_stars"}
    count={5}
    onChange={ratingChanged}
    size={30}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  
  <button className={`reccomend ${valid?"" : "hidden"} `} onClick={sendRev} >Rate</button>,

 
</div>      
)
        
}

export default Popup