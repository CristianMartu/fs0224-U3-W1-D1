import logo from './logo.svg'
import './App.css'
import Button from './components/Button'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main>
        <Button text="PUSH ME" />
        <div>
          <ImageComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_jr94DgO1cRa2sHM5CCox47ipuAwytXNHtSIqCyyFQhEXhWJD0dXruRxV5OSK1qs0Ow&usqp=CAU" alt="image" />
        </div>
      </main>
    </div>
  )
}

export default App
