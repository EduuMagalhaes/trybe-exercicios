import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar','Tomar Cafe','Estudar','Almoçar','Estudar','Jantar','Dormir',];
const elementsLi = tasks.map((element) => Task(element));

function App() {
  return (
    <ul>
      { elementsLi }
    </ul>
  );
}

export default App;
