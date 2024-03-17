import HomeBackground from './components/home_comps/homeBackground';
import './components/home_comps/home_styling.css'

function App() {
  return (
    <div>
      <HomeBackground
        left={true}>
        <h1>MEIO CÃO</h1> 
      </HomeBackground>
      <HomeBackground
        left={true}>
        <h1>MEIO CÃO</h1> 
      </HomeBackground>
    </div>
  );
}

export default App;
