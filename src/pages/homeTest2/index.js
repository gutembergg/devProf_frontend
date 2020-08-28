import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'

const HomeTest2 = () => {
  return (
    <div className="home">
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-6 align-self-center">
            {' '}
            <h1 className="title-dev">DevProf</h1>
            <p id="sub-title">Votre plateforme d'études online</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <img src={landingImg} alt="landingImg" className="img-hero" />
          </div>
        </div>

        <div className="row d-flex home-buttons mt-3">
          <div>
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
          <p className="d-flex align-self-center">connexion</p>
        </div>
      </div>
    </div>
  )
}

export default HomeTest2
