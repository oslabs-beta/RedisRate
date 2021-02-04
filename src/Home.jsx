import React, { useContext } from 'react';
import AppContext from "./context/index";

const Home = () => {

   const {port, ipaddress} = useContext(AppContext);


  return (
    <div id="homeFont">
      <h3>Your Redis instance is running at<br></br> 
        Port: {port}<br></br>
        IP Address: {ipaddress}
      </h3>
    </div>
  )
}

export default Home;