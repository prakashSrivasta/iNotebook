import React from 'react'
import Notes from "./Notes";
const Home = (props) => {
  const {ShowAlert} = props;
  return (
    <div>
      <Notes showAlert={ShowAlert}/>
    </div>
  )
}

export default Home
