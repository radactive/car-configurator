import { Canvas } from '@react-three/fiber'
import './App.css'
import Viewer from './components/viewer'
import { CustomizationProvider } from './contexts/Customization'

function App() {

  function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', top: 40, fontSize: '72px' }}>Customize Your Way</div>
      </div>
    )
  }

  return (
    <CustomizationProvider>
      <div className="App">
        <Viewer />
      </div>
    </CustomizationProvider>
  )
}

export default App
