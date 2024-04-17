import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImg from './assets/alexa.png';
import CortanaImg from './assets/cortana.png';
import SiriImg from './assets/siri.png'

function App() {
 
  return (
    <>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <p className='title'>Personal Digital Assistants</p>
          </div>
        </section>

        <div className='container'>
          <section className='section'>
            <div className='columns'>
              <div className="column is-3">
                  <ProfileCard  title="Alexa" handle="@alexa99" image={AlexaImg} desc="Amazon's virtual assistant. Voice-controlled. Controls smart home devices, plays music, sets reminders, and more."/>
              </div>
              <div className="column is-3">
                  <ProfileCard  title="Cortana" handle="@cortana32" image={CortanaImg} desc="Microsoft's virtual assistant. Voice-activated. Performs tasks, provides information, and organizes schedules."/>
              </div>
              <div className="column is-3">
                  <ProfileCard  title="Siri" handle="@siri01" image={SiriImg} desc="Apple's virtual assistant. Activated by voice. Handles tasks, answers questions, and controls Apple devices."/> 
              </div>
            </div>
          </section>
        </div>
     </>
  )
}

export default App
