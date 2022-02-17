import './App.css';

const tasks = [
  'Estudar',
  'Fazer Exercícios',
  'Fazer Projetos'
];

const Task = (task) => {
  return (
    <li>{task.value}</li>
  );
}

function App() {
  return (
    <ul>
      {tasks.map((task, index) => <Task key={index} value={task}/>)}
    </ul>
  );
}

export default App;
