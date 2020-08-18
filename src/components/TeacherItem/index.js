import React from 'react'
import { Link } from 'react-router-dom'

import whatsapIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = ({ teachers }) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1BsEAN0Vk6Nvt43U51iOjW3J-ACLVkveOxw&usqp=CAU"
          alt=""
        />
        <div>
          <strong>{teachers.name}</strong>
          <span>teachers.languages</span>
        </div>
      </header>
      <p>{teachers.technologies}</p>
      <footer>
        <p>
          Prix/heure<strong>{teachers.cost} fr</strong>
        </p>
        <Link to="blank">
          <img src={whatsapIcon} alt="whatsapp" />
          Contacter
        </Link>
      </footer>
    </article>
  )
}

export default TeacherItem
