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
            <h2 className="mt-5 mb-4">
              <strong>Étudiant</strong>
            </h2>
            <div className="text-etudiant">
              <p>
                Recherchez le langage, le jour et l'horaire quand vous voulez avoir votre cours et
                trouvez les Développeurs disponibles avec les paramètres de votre recherche. Faites
                autant de recherches que vous voulez. Ensuite vous n'avez plus qu'à trouvez le
                développeur qui vous intéresse, cliquez sur contacter pour lui envoyer un message
                par Whatsapp. Si vous utilisez votre desktop, l'application Whatsapp pour le web
                doit être installée.{' '}
                <a
                  className="ml-2"
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.whatsapp.com
                </a>{' '}
              </p>
            </div>
            <div>
              <h2 className="mt-5">
                <strong>Professeur</strong>
              </h2>

              <div className="mt-4">
                <h4 className="mb-3">
                  <i>Données personnelles</i>
                </h4>
                <p>
                  Remplissez le formulaire d'inscription avec votre prénom, avatar (téléchargez
                  votre image/photo), whatsapp (entrez votre numéro de téléphone avec le même format
                  indiqué dans le formulaire.
                </p>

                <h4 className="mt-4 mb-3">
                  {' '}
                  <i>Informations sur vos cours</i>{' '}
                </h4>

                <ul>
                  <li>
                    <strong>
                      <i>- Languages:</i>
                    </strong>{' '}<br/>
                    Entrez les langages de programmations qui vous souhaitez enseigner.
                  </li>
                  <li>
                    <strong>
                      <i>- Technologies:</i>
                    </strong>{' '}<br/>
                    Une brève description de toutes les compétences que vous avez dans les langages
                    de programmations choisis, ex: framework, plates-formes, logiciels et approches.{' '}
                  </li>
                  <li>
                    {' '}
                    <strong>
                      <i>- Prix:</i>
                    </strong>{' '}<br/>
                    Entrez le prix convenable pour vous, vous êtes libres de négocier.
                  </li>
                  <li>
                    {' '}
                    <strong>
                      <i>- Horaires:</i>
                    </strong>{' '}<br/>
                    Choisissez les jours où vous êtes disponible ainsi que l'horaire, vous pouvez
                    choisir un horaire par jour.
                  </li>
                </ul>
              </div>

              <div className="mt-5">
                <h2 className="mb-4">
                  <strong>Suggéstions</strong>
                </h2>

                <p>
                  Pour les cours online vous pouvez utiliser VScode avec l'extension Live Share pour
                  les partages d'écran et audio.
                </p>
                <div id="vscode-logo" className="mt-5">
                  <img src={vscode} alt="vscode" />
                </div>
                <div id="liveshare" className="mt-5">
                  <img src={liveShare} alt="liveshare" />
                </div>
                <div className="text-center mt-5">
                  <strong>Administration</strong>
                </div>
                <div className="text-center">gmascarenhas3001@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions
