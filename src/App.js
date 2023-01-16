import './App.css';
import Card from "./Components/Card/card";
import {useState} from "react"

function App() {

  const [card,setCard] = useState(0)


  const cards =[
    {
      img:"https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg?fit=around%7C634:939&output-quality=90&crop=634:939;center,top",
      title:"Captain Marvel",
      description: "Captain Marvel is a 2019 American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel",
      tags: ["Fantasy", "SciFi"]
    },
  
    {
      img:"https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      title:"The Avengers",
      description: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D.,",
      tags: ["Fantasy"]
    },

    {
      img:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
      title:"Iron Man",
      description: " billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. I",
      tags: ["Fantasy", "Romance"]
    },

    {
      img:"https://collider.com/wp-content/uploads/the-lorax-movie-poster.jpg",
      title: "The Lorax",
      description:"Twelve-year-old Ted (Zac Efron) lives in a place virtually devoid of nature; no flowers or trees grow in the town of Thneedville.",
      tags: ["Fantasy"]
    },

    {
      img: "https://i.imgur.com/TXL4Fru.jpg",
      title: "Dunkirk",
      description:"In May 1940, Germany advanced into France, trapping Allied troops on the beaches of Dunkirk.",
      tags: []
    }


  ]


const [outanimation, setoutAnimation]  = useState(false);
const [inanimation, setinAnimation] = useState(false);
const [between, setBetween] = useState(false);
const [add, setAdd] = useState(false)
const [add1, setAdd1] = useState(false)
const [add2, setAdd2] = useState(false)
const [watchselect, setWatched] = useState(false)
const [reccomendPop, setReccomend] = useState(false)
const[toast, setToast] = useState("")
const[ratePop,setRatepop] = useState(false)
const [ratedMovie,setratedMovie] = useState("")




function timeout(delay: number) {
  return new Promise( res => setTimeout(res, delay) );
}


async function nextImg(props){
  setinAnimation(false)

  if(props=="added")
  {
    setoutAnimation(true)
    setBetween(true)
    setCard(card+1)
    await  timeout(300)
    setoutAnimation(false)
    setBetween(false)
    setinAnimation(true)
  }else{
  setoutAnimation(true)
  await timeout(300)
  setoutAnimation(false)
  setCard(card+1)
  setBetween(true)
  await timeout(150)
  setBetween(false)
  setinAnimation(true)
  setWatched(false)

  }
}


async function addToWatchList(){
  setoutAnimation(false)
  setBetween(false)
  setinAnimation(false)
  setAdd1(true)
  await timeout(500)
  setAdd2(true)
  await timeout(500)
  setAdd1(false)
  setAdd2(false)
  nextImg("added")
}


 async function watched(){
  setRatepop(true)
}



async function next(){
  setWatched(true)
  await timeout(200)
   nextImg()
}


async function reccomend(){
  setReccomend(true)
}

  return (
    <div className="App">

      {toast == "rec"? 
      <div className='toast'> 
        <h4>Succesfully Reccomend Movie</h4>
      </div> : ""}

      {toast == "rev" ? 
      <div className='toast'> 
        <h4>Succesfully Rated Movie</h4>
      </div> : ""}

  <h1>My App</h1>
 <div className='content'>
 <Card rateMovie={setratedMovie} ratepop={ratePop} next={next} setRate={setRatepop} toast={setToast} reccomend={reccomendPop} setrec={setReccomend} see={watchselect} add={add} add1={add1} add2={add2} img={cards[card].img} tags={cards[card].tags} description={cards[card].description} title={cards[card].title} outanimation={outanimation} inanimation={inanimation} between={between} />
 </div>


 <div className='buttons'>
    <div onClick={watched} className="Watched">Watched</div>
    <div onClick={addToWatchList} className="Add">Add</div>
    <div onClick={reccomend}  className='Send'>Reccomend</div>
    <div onClick={nextImg} className="Next">Next</div>


 </div>
    </div>
  );
  }

export default App;
