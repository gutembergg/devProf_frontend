import React, { useState } from 'react'

import PageHeaders from '../../components/PageHeaders'
import Select from '../../components/Select'
import Input from '../../components/Input'
import TeacherItem from '../../components/TeacherItem'
import api from '../../services/api'

import './styles.css'

function TeacherList(props) {
  const [searchTeachers, setSearchTeachers] = useState()
  const [languages, setLanguages] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  async function searchTeacher(e) {
    e.preventDefault()

    try {
      const response = await api.get('/users', {
        params: {
          languages,
          week_day,
          time
        }
      })
      setSearchTeachers(response.data)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  return (
    <>
      <div id="page-teacher-list">
        <PageHeaders textMargin="teacher-list" title="Voici les Devs disponibles.">
          <form onSubmit={searchTeacher} id="search-teacher">
            <div className="row">
              <div className="col-md-3">
                <Select
                  classeWeekDay="select_block"
                  name="languages"
                  label="Langages"
                  value={languages}
                  onChange={e => setLanguages(e.target.value)}
                  options={[
                    { value: 'PHP', label: 'PHP' },
                    { value: 'Java', label: 'Java' },
                    { value: 'JavaScript', label: 'JavaScript' },
                    { value: 'Python', label: 'Python' },
                    { value: 'CMS', label: 'CMS' },
                    { value: 'HTML', label: 'HTML' }
                  ]}
                  required
                />
              </div>

              <div className="col-md-3">
                <Select
                  classeWeekDay="select_block"
                  name="week_day"
                  label="Jour de la semaine"
                  value={week_day}
                  onChange={e => setWeek_day(e.target.value)}
                  options={[
                    { value: '0', label: 'Dimanche' },
                    { value: '1', label: 'Lundi' },
                    { value: '2', label: 'Mardi' },
                    { value: '3', label: 'Mercredi' },
                    { value: '4', label: 'Jeudi' },
                    { value: '5', label: 'Vendredi' },
                    { value: '6', label: 'Samedi' }
                  ]}
                  required
                />
              </div>

              <div className="col-md-3">
                <Input
                  type="time"
                  name="time"
                  label="Horaire"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-3">
                <button type="submit">Search</button>
              </div>
            </div>
          </form>
        </PageHeaders>
        <div style={{ marginTop: '10rem' }}></div>
      </div>

      <div className="container">
        {searchTeachers &&
          searchTeachers.map(teacher => {
            return (
              <div key={teacher.id} className="d-flex justify-content-center">
                <TeacherItem language={languages} teachers={teacher} />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default TeacherList
