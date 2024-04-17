import ProfileCard from './ProfileCard'
import AlexaImg from './assets/alexa.png';
import CortanaImg from './assets/cortana.png';
import SiriImg from './assets/siri.png'

function App() {
 
  return (
    <>
      <h1>Personal Digital Assistant</h1>

      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg}/>
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImg}/>
      <ProfileCard title="Siri" handle="@siri01" image={SiriImg}/>
     </>
  )
}

export default App
