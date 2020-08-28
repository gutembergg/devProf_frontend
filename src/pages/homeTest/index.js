import React from 'react'
import Pagehedetest from '../../components/pagehedTest'

import Select from '../../components/Select'
import Input from '../../components/Input'

const HomeTest = () => {
  return (
    <div>
      <Pagehedetest title="Voici les Devs disponibles.">
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
      </Pagehedetest>
    </div>
  )
}

export default HomeTest
