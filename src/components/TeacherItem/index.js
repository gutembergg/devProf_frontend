import React from 'react'

import whatsapIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

import './styles.css'

const TeacherItem = ({ teachers, language }) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teachers.id
    })
  }

  return (
    <article className="teacher-item mb-5">
      <header>
        <img src={teachers.avatar} alt="" />
        <div>
          <strong>{teachers.name}</strong>
          <span>{language}</span>
        </div>
      </header>
      <p>{teachers.technologies}</p>
      <footer>
        <p>
          Prix/heure<strong>{teachers.cost} fr</strong>
        </p>
        <a target="blank" onClick={createNewConnection} href={`https://wa.me/${teachers.whatsapp}`}>
          <img src={whatsapIcon} alt="whatsapp" />
          Contacter
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
