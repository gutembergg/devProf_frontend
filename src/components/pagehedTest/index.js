import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import Select from '../Select'
import Input from '../Input'

import './styles.css'

const Pagehedetest = ({ title, description }) => {
  return (
    <>
      <div className="page-header">
        <div className="row d-flex justify-content-between">
          <FiArrowLeft
            style={{ marginLeft: '2rem', color: '#f0f0f7', cursor: 'pointer' }}
            size="4rem"
            className="mt-4"
          />
          <div className="text-white mt-4" style={{ marginRight: '4rem', fontSize: '3rem' }}>
            DevProf
          </div>
        </div>
        <div className="container">
          <div className="row d-flex align-self-center title-text">{title}</div>
        </div>
      </div>

      <div className="row header-form d-flex justify-content-center">
        <div className="col-sm-12 col-md-2">
          <Select
            classeWeekDay="select_block"
            name="languages"
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
        <div className="col-sm-12 col-md-2">
          <Select
            classeWeekDay="select_block"
            name="week_day"
            label="Jour"
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
          <Input type="time" name="time" label="Horaire" />
        </div>
        <div className="col-sm-12 col-md-2">
          <button className="btn btn-success">Search</button>
        </div>
      </div>
    </>
  )
}

export default Pagehedetest
