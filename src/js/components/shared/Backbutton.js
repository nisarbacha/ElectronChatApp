import React from 'react'
import { useNavigate } from "react-router-dom";


function Backbutton() {

  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)} className="btn btn-outline-primary ml-2">
        GoBack
      </button>
    </>
  )
}

export default Backbutton