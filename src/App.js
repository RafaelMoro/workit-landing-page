import './styles/App.scss';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button text="Apply for access!" />
      <Button text="Apply for access!" secondary />
    </div>
  );
}

export default App;
