import React, { useState } from 'react'
import Loader from 'react-loader-spinner'

import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import Input from '../../components/Input'
import TeacherItem from '../../components/TeacherItem'
import api from '../../services/api'

import './styles.css'

function TeacherList(props) {
  const [searchTeachers, setSearchTeachers] = useState([])
  const [languages, setLanguages] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function searchTeacher(e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await api.get('/users', {
        params: {
          languages,
          week_day,
          time
        }
      })

      setSearchTeachers(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error.response.data.error)
    }
  }

  return (
    <>
      <PageHeader title="Voici les Devs disponibles." titleMargin="list">
        <form onSubmit={searchTeacher}>
          <div className="row header-form d-flex justify-content-center">
            <div className="col-sm-12 col-md-2">
              <Select
                classeWeekDay="select_block"
                className="inputs"
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
              />
            </div>
            <div className="col-sm-12 col-md-2">
              <Select
                classeWeekDay="select_block"
                className="inputs"
                name="week_day"
                label="Jour"
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
              />
            </div>
            <div className="col-sm-12 col-md-2">
              <Input
                className="inputs"
                type="time"
                name="time"
                label="Horaire"
                value={time}
                onChange={e => setTime(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-2">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </div>
          </div>
        </form>
      </PageHeader>

      <div className="d-flex justify-content-center mt-5">
        {isLoading && <Loader type="Circles" color="#8257e5" height={100} width={100} />}
      </div>

      {searchTeachers &&
        searchTeachers.map(teacher => {
          return (
            <div key={teacher.id} className="d-flex justify-content-center">
              <TeacherItem language={languages} teachers={teacher} />
            </div>
          )
        })}
    </>
  )
}

export default TeacherList
