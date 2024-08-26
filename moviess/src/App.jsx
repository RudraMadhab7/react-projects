import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import moviesData from"./data.json";
function App() {

  return (
    <div className='App'>
       <Header/>
       <div className='main'>
        {
          moviesData.map((element)=>{
            return(
            <Movie 
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />)
          })
        }
       
       </div>
    </div>
  )
}

export default App
