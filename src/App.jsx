import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import data from './data'

function App(props) {

const dataCard = data.map(item => {
  return (
    <MainContent
      key={item.id}
      {...item}
    />
  )
})

  return (
    <div className="App">
      <Header />
      {dataCard}
    </div>
  )
}

export default App
