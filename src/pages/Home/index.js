import React from 'react'
import { Link } from 'react-router-dom'

import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
//import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './style.css'

const HomeTest = () => {
  return (
    <div id="container-home">
      <div className="d-flex justify-content-center">
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-self-center">
            <div id="logo-container">
              <h1 className="title-dev">DevProf</h1>
              <p className="sub-title">Votre plateforme d'études online</p>
            </div>
          </div>

          <div className="col-md-6">
            <img src={landingImg} alt="landingImg" className="img-hero" />
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-between buttons_container mt-4">
        <div className="buttons_container">
          <Link to="/study">
            <button id="btnEtudier" type="button">
              <img className="mr-3" src={studyIcon} alt="study icon" />
              Etudier
            </button>
          </Link>
          <Link to="/give-classes">
            <button id="btnDonner" type="button">
              <img className="mr-3" src={giveClassesIcon} alt="give-classes icon" />
              Donner cours
            </button>
          </Link>
        </div>
      </div>
      <div style={{ fontSize: '2rem' }} className="text-center text-white mr-5 mt-4">
        Create account
      </div>
    </div>
  )
}

export default HomeTest
