import "./Home.css"

import { useState } from "react";  //states
import Header from "../components/Header";  //componentes
import { Link } from "react-router-dom";

function Home() {

  const [contador, setContador] = useState<number>(-1)  //declaration of varible states 

  function btnClick(){
    setContador(contador + 1)  //how to change the state
  }

  return (
    <>
      <Header title="Hello New World"/>
      <Header title="Hello New Age"/>
      <button onClick={btnClick}>Click Me! Please!</button>  
      <p>{contador} clicks! </p>
      <Link to="/cadastro">Go to Forms</Link>
  
    </>
  )
}

export default Home;