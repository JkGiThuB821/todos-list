import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Todo from './MyComponents/Todo';
import Footer from './MyComponents/Footer';


function App() {
  //create an array of todos
  let todos = [
    {sno:1,
      title: "Go to place1",
      desc: "Get the work done"
    },
    {sno:2,
      title: "Go to place2",
      desc: "Get the work done2"
    },
    {sno:3,
      title: "Go to place3",
      desc: "Get the work done3"
    }
  ]
  return (
    <>
    <Header title = "My Todos List" searchBar = {true}/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}

export default App;
