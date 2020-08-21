import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'

import './style.css'

const HomeTest = () => {
  const [connections, setConnections] = useState('')

  useEffect(() => {
    api.get('/connections').then(resp => {
      const response = resp.data.total
      setConnections(response)
    })
  }, [])
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
        <p style={{ fontSize: '2rem' }} id="total-connection" className="text-center mt-4">
          <span style={{ marginRight: '1rem' }}>Total de connexions </span> {connections}
          <img src={purpleHeartIcon} alt="purpleHeart"></img>
        </p>
      </div>
    </div>
  )
}

export default HomeTest
