import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import AlexaImg from './assets/alexa.png';
import CortanaImg from './assets/cortana.png';
import SiriImg from './assets/siri.png'

function App() {
 
  return (
    <>
      <h1>Personal Digital Assistant</h1>

        <div className='columns'>
          <div className="column is-4">
              <ProfileCard  title="Alexa" handle="@alexa99" image={AlexaImg} desc="Amazon's virtual assistant. Voice-controlled. Controls smart home devices, plays music, sets reminders, and more. Integrates with third-party apps."/>
          </div>
          <div className="column is-4">
              <ProfileCard  title="Cortana" handle="@cortana32" image={CortanaImg} desc="Microsoft's virtual assistant. Voice-activated. Performs tasks, provides information, and organizes schedules. Integrated 
              Customization
              with Windows devices and Microsoft services."/>
          </div>
          <div className="column is-4">
              <ProfileCard  title="Siri" handle="@siri01" image={SiriImg} desc="Apple's virtual assistant. Activated by voice. Handles tasks, answers questions, and controls Apple devices. Integrated with iOS, macOS, and Apple services."/> 
          </div>
         
          
         
        </div>
     </>
  )
}

export default App
