// import from project
import './App.css';
import Header from './components/Header';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4/Step4';
import Time_Money from './components/Time_Money/Time_Money';
import Step5 from './components/Step5/Step5.jsx';
import Step6 from './components/step6/Step6';
import Modal from './components/UI/Modal/Modal';

function App() {
  return (
      <div className="App">
        <Modal>
            <Header></Header>
            <main>
              <Step1></Step1>
              <Step2></Step2>
              <Step3></Step3>
              <Step4></Step4>
              <Time_Money></Time_Money>
              <Step5></Step5>
              <Step6></Step6>
            </main>
        </Modal>
      </div>
  );
}

export default App;
