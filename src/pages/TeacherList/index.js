import React from 'react'

import PageHeaders from '../../components/PageHeaders'
import Select from '../../components/Select'
import Input from '../../components/Input'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList(props) {
  return (
    <>
      <div id="page-teacher-list">
        <PageHeaders title="Voici les Devs disponibles.">
          <form id="search-teacher">
            <div className="row">
              <div className="col-md-3">
                <Select
                  name="subject"
                  label="Langages"
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

              <div className="col-md-3">
                <Select
                  name="week_day"
                  label="Jour de la semaine"
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

              <div className="col-md-3">
                <Input type="time" name="time" label="Horaire" />
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
        <div className="d-flex justify-content-center">
          <TeacherItem />
        </div>
        <div className="d-flex justify-content-center">
          <TeacherItem />
        </div>
      </div>
    </>
  )
}

export default TeacherList
