import './styles/App.scss';
import { Header } from './templates/Header/Header';
import { MainBanner } from './templates/MainBanner/MainBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
    </div>
  );
}

export default App; 
