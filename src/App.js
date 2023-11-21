import { useState } from "react";
import { data } from "./data";
import './App.css';

function App(){
const  [gifts, setGifts]=useState(data)
const removeGift=(id)=>{
  let newGifts=gifts.filter(gift=>gift.id !==id);
  setGifts(newGifts)
}


return(
<div>

<div className="container">
  <h1>🤶CHRISTMAS LIST OF {gifts.length} GIFTS🎁</h1>
</div>

{gifts.map((element=>{
  const {id, gift, image}=element;

  return(<div key={id}>
    <div className="container">
      <h2>{id} - {gift}</h2>
    </div>
    <div className="container">
      <img src={image}width="400px"alt="gift"/>
    </div>
    <div className="container">
      <button onClick={()=>removeGift(id)}>REMOVE</button>
    </div>
    </div>
  )
}))}
<div className="container">
  <button onClick={()=> setGifts([])}>DELETE ALL</button>
</div>
</div>

)
  } 

export default App;