import './App.css';
import { BrowserRouter,
  Routes, 
  Route } from "react-router-dom";
import CreateComponent from './page/create/create.component';
import PersonComponent from './page/person/person.component';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateComponent/>}/>
          <Route path="/*" element={<PersonComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
