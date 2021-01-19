import React, { useContext } from 'react';
import AppContext from "./context/index";

const Test = () => {

   const {port, setPort} = useContext(AppContext);

  return (
    <div>
      port is {port}
    </div>
  )
}

export default Test;