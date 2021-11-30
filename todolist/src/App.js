import TodoApplPage from './page/TodoApplPage';
import Header from './Molecules/Header';
import './App.css';
import { Routes,Route} from "react-router-dom";
import Profile from './page/Profile';

function App() {
  return (
    <>
      <div>
      <Header name="Abhijeet Mishra" one="Todo Application" two="Profile"/>
      </div>
      <Routes>
        <Route path='/' element={<TodoApplPage/>}/>
        <Route path='/profile' exact element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
