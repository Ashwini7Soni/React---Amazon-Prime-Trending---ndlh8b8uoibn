import React, {Component, useState} from "react";
import '../styles/App.css';



const App = ({slides}) => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", marginTop: "25%"}}>
        <button data-testid="button-prev" onClick={(event) => {
          if(index > 0) {
            setIndex(index-1);
          }
          
        }} disabled = {(index == 0)? true: false}>Prev</button>
        <div style={{backgroundColor: "green"}}>
          <h1 data-testid="title">{slides[index].title}</h1>
          <p data-testid="text">{slides[index].text}</p>
        </div>
        <button data-testid="button-next" onClick={(event) => {
          if(index < slides.length - 1) {
            setIndex(index+1);
          }
          
        }} disabled = {(index == slides.length - 1)? true: false}>Next</button>
      </div>
      <div style={{textAlign: "center", marginTop: "1rem"}}><button data-testid="button-restart" onClick={() => {
        setIndex(0);
      }} disabled = {(index == 0)? true: false}>Restart</button></div>
    </>
  )
}


export default App;
