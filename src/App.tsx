import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TopicosPage } from './pages/TopicosPage'

function App() {
  return (
   <div className="container">
      <Header/>
      <main>
        <TopicosPage/>
      </main>
      <Footer/>
   </div>
  )
}

export default App
