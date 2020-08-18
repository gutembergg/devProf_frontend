import React, { useState } from 'react'

import PageHeaders from '../../components/PageHeaders'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import WarningIcon from '../../assets/images/icons/warning.svg'
import api from '../../services/api'

import MultiSelect from 'react-multi-select-component'

import './styles.css'

function TeacherFrom() {
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

  const [languages, setLanguages] = useState([])
  const options = [
    { value: 'PHP', label: 'PHP', lang: 'PHP' },
    { value: 'Java', label: 'Java', lang: 'Java' },
    { value: 'JavaScript', label: 'JavaScript', lang: 'JavaScript' },
    { value: 'Python', label: 'Python', lang: 'Python' },
    { value: 'CMS', label: 'CMS', lang: 'CMS' },
    { value: 'HTML', label: 'HTML', lang: 'HTML' }
  ]

  function handleLanguages() {
    const lang = languages.map(({ value, label, ...rest }) => rest)
    console.log(lang)
  }
  function scheduleItemsValue(position, field, value) {
    const updatedField = scheduleItems.map((scheduleItem, index) => {
      if (position === index) {
        return { ...scheduleItem, [field]: value }
      }
      return scheduleItem
    })
    setScheduleItems(updatedField)
  }

  function addSchedule() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }

  async function handleCreateClass(e) {
    e.preventDefault()

    handleLanguages()

    await api
      .post('/users', {
        name,
        avatar,
        whatsapp,
        languages,
        technologies,
        cost: Number(cost),
        schedule: scheduleItems
      })
      .then(response => {
        alert('Registed OK!!!!!!')
      })
      .catch(err => {
        alert('Error register ')
        console.log(err)
      })
  }

  console.log(languages)

  return (
    <div id="page-teacher-form">
      <PageHeaders title="Incroyable que vous voulez donner des cours." />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Entrez vous données</legend>
            <Input name="name" label="Name" value={name} onChange={e => setName(e.target.value)} />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Vous cours</legend>
            <MultiSelect
              options={options}
              value={languages}
              onChange={setLanguages}
              labelledBy={'Select'}
            />
            <Textarea
              name="technologies"
              label="Technologies"
              value={technologies}
              onChange={e => setTechnologies(e.target.value)}
            />
            <Input
              name="cost"
              label="Prix par heure"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horaires disponible
              <button type="button" onClick={addSchedule}>
                {' '}
                + Nouveau horaire
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Jour de la semaine"
                    value={scheduleItem.week_day}
                    onChange={e => scheduleItemsValue(index, 'week_day', e.target.value)}
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
                  <Input
                    name="from"
                    label="De"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => scheduleItemsValue(index, 'from', e.target.value)}
                  />
                  <Input
                    name="to"
                    label="Jusqu'a"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => scheduleItemsValue(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}
          </fieldset>
          <footer>
            <p>
              <img src={WarningIcon} alt="warning" />
              Important ! <br />
              Remplissez tout les champs
            </p>
            <button type="submit">Valider</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherFrom
