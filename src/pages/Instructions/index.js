import React from 'react'

import PageHeader from '../../components/PageHeader'
import liveShare from '../../assets/images/vscodeliveshare.png'
import vscode from '../../assets/images/vscode-logo.png'

import './styles.css'

const Instructions = () => {
  return (
    <div>
      <PageHeader title="Instrutions et suggéstions" titleMargin="instructions" />
      <div className="d-flex justify-content-center">
        <div id="container" className="card">
          <div className="instructions">
            <h1>Instructions d'utilisation</h1>
            <h2 className="mt-5">Étudiant</h2>
            <div className="text-etudiant">
              Recherchez la language, le jour et l'horaire qui vous voulez avoir votre cours et
              trouvez les Devellopeurs disponibles avec les paràmetres de votre recherche. Faites
              combien des recherche vous voulez.
            </div>
            <div>
              <h2 className="mt-5">Professeur</h2>

              <div className="mt-4">
                <h4>
                  <i>Données personnelles</i>
                </h4>
                <p>
                  Remplissez le formulaire d'inscription avec votre prenom, avatar( Suggestion: Vouz
                  pouvez ajouter le lien de votre avatar Github ), whatsapp avec le même format
                  suggéré par le champs du formulaire
                </p>

                <h4 className="mt-4">
                  {' '}
                  <i>Informations sur vos cours</i>{' '}
                </h4>

                <ul>
                  <li>
                    <strong>
                      <i>Languages:</i>
                    </strong>{' '}
                    Entrez les languages de programations qui vous souhaitez enseigner.
                  </li>
                  <li>
                    <strong>
                      <i>Technologies:</i>
                    </strong>{' '}
                    Une bréve description de toutes les competences que vous avez dans les languages
                    de programmations choisis, ex: framework, plataformes, logiciels et approches.{' '}
                  </li>
                  <li>
                    {' '}
                    <strong>
                      <i>Prix:</i>
                    </strong>{' '}
                    Entrez le prix convenable pour vous
                  </li>
                  <li>
                    {' '}
                    <strong>
                      <i>Horaires:</i>
                    </strong>{' '}
                    Choisissez les jours que vous êtes disponible ansi que l'horaire, vous pouvez
                    choisir un horaire par jour.
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <h2>Suggéstions</h2>

                <p>
                  Pour les cours online vous pouvez utliser VScode avec l'extension Live Share pour
                  les partages d'écran et audio.
                </p>
                <div id="vscode-logo" className="mt-5">
                  <img src={vscode} alt="vscode" />
                </div>
                <div id="liveshare" className="mt-5">
                  <img src={liveShare} alt="liveshare" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions
