import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import AddTask from './AddTask';
import { useState } from 'react';

function App() {

  const [obj, setObj] = useState(() => {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [isOpen, setOpen] = useState(false);

  
  const handleClick = () => {
    setOpen(!isOpen);
  };
  
  const removeTask = (name)=>{
    setObj(obj.filter((elem) => elem.name !== name));
  }

  const changeState = (name)=>{
    const newObj = obj.map((elem)=> elem.name !== name ? elem  : { ...elem, isChecked: !elem.isChecked });
    setObj(newObj);
    localStorage.setItem('data' , JSON.stringify(newObj));
  }

  return (
    <div className="App">
      <Header />
      <Container obj={obj} removeTask={removeTask} changeState={changeState} />
      <Footer handleClick={handleClick} />
      {isOpen && <AddTask handleClick={handleClick} addTask={setObj} tasks={obj} closeAddTask={handleClick} />}
    </div>
  );
}

export default App;
