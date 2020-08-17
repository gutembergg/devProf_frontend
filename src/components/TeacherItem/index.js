import React from 'react'

import whatsapIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1BsEAN0Vk6Nvt43U51iOjW3J-ACLVkveOxw&usqp=CAU"
          alt=""
        />
        <div>
          <strong>teacher.name</strong>
          <span>teacher.subject</span>
        </div>
      </header>
      <p>teacher.bio</p>
      <footer>
        <p>
          Prix/heure<strong>teacher.cost fr</strong>
        </p>
        <a target="blank">
          <img src={whatsapIcon} alt="whatsapp" />
          Contacter
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
