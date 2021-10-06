import './App.css';
import TitleBar from './components/TitleBar'
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <div className="app">
      <TitleBar />
      
      <div className="Cards">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
}
// fc665790184e1daf240550642acc635f
// 4f0894de6bc4f399bd1fb53aa4b356a3

export default App;
