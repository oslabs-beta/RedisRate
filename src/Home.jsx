import React, { useContext } from 'react';
import AppContext from "./context/index";

const Home = () => {

   const {port, setPort} = useContext(AppContext);

  return (
    <div>
      TEST HOME
    </div>
  )
}

export default Home;