import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import PageHeaders from '../../components/PageHeader'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import MultiSelect from 'react-multi-select-component'
import InputTime from '../../components/InputTime'
import { GiMedallist } from 'react-icons/gi'
import { store } from 'react-notifications-component';

import api from '../../services/api'

import './styles.css'

function TeacherFrom() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [avatar2, setAvatar2] = useState([])

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
    languages.map(({ value, label, ...rest }) => rest)
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

  function deleteSchedule(position) {
    const scheduleDeleted = scheduleItems.filter((item, index) => index !== position)
    setScheduleItems(scheduleDeleted)
  }

  async function handleCreateClass(e) {
    e.preventDefault()

    ///////////////////////////////////////////////////////////////////

    const formData = new FormData()
    formData.append('file', avatar2)
    formData.append('name', name)
    formData.append('whatsapp', whatsapp)
    formData.append('languages', JSON.stringify(languages))
    formData.append('technologies', technologies)
    formData.append('cost', Number(cost))
    formData.append('schedule', JSON.stringify(scheduleItems))

    ///////////////////////////////////////////////////////////////////

    handleLanguages()

    await api
      .post('/users', formData)
      .then(response => {
        store.addNotification({
          title: "Registré",
          message: "Vous êtes enregistré avec succès",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000
          }
        });
        history.push('/study')
      })
      .catch(err => {
        store.addNotification({
          title: "Erreur",
          message: "Erreur de l'enregistrement",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000
          }
        });
      })
  }

  function handleFile(e) {
    const selectedFile = e.target.files[0]
    setAvatar2(selectedFile)
  }

  return (
    <div id="page-teacher-form">
      <PageHeaders
        titleMargin="form"
        textMargin="teacher-form"
        title="Incroyable que vous voulez donner des cours."
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Entrez vos données</legend>

            <Input
              placeholderName="ex: Ada Lovelace"
              name="name"
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />

            <Input
              placeholderName="ex: 41712345678"
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
              required
            />

            <label style={{ marginRight: '1rem', fontSize: '1.4rem' }}>Avatar</label>
            <input className="inputfile" type="file" name="file" onChange={handleFile} required />
          </fieldset>

          <fieldset>
            <legend>Vos cours</legend>

            <p>Languages</p>
            <MultiSelect
              className="multi-select"
              options={options}
              value={languages}
              onChange={setLanguages}
              labelledBy={'Sélectionnez'}
              required
            />

            <Textarea
              placeholderName="ex: ReactJs, React Native, Angular, NodeJs, Synfony, Laravel, MongoDB, Express, Postgres..."
              name="technologies"
              label="Technologies"
              value={technologies}
              onChange={e => setTechnologies(e.target.value)}
              required
            />
            <Input
              placeholderName="ex: 50"
              name="cost"
              label="Prix par heure"
              value={cost}
              onChange={e => setCost(e.target.value)}
              required
            />
          </fieldset>

          <fieldset>
            <div className="d-flex justify-content-between align-items-center schedule-flex">
              <p className="col-md-6">Horaires disponible</p>
              <button className="col-md-4 mb-3" type="button" onClick={addSchedule}>
                {' '}
                + Nouveau horaire
              </button>
            </div>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index}>
                  <div className="schedule-item">
                    <Select
                      classeWeekDay="select_block_teacher_form"
                      className="schedule-champ"
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
                    <InputTime
                      name="from"
                      label="De"
                      type="time"
                      value={scheduleItem.from}
                      onChange={e => scheduleItemsValue(index, 'from', e.target.value)}
                    />
                    <InputTime
                      name="to"
                      label="Jusqu'a"
                      type="time"
                      value={scheduleItem.to}
                      onChange={e => scheduleItemsValue(index, 'to', e.target.value)}
                    />
                  </div>
                  <p
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                    className="closeIcon"
                    onClick={() => deleteSchedule(index)}
                  >
                    X
                  </p>
                </div>
              )
            })}
          </fieldset>
          <footer>
            <p>
              <GiMedallist size="3rem" color="#8257e5" style={{ marginRight: '1.4rem' }} />
              Merci pour votre participation !
            </p>
            <button type="submit">Valider</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherFrom
