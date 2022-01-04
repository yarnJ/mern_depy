import './App.css';
import { BrowserRouter,
  Routes, 
  Route } from "react-router-dom";
import CreateComponent from './page/create/create.component';
import PersonComponent from './page/person/person.component';
import SignupComponent from './page/sign/signup.component';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<CreateComponent/>}/>
          <Route path="/*" element={<PersonComponent/>}/>
          <Route path="/signup" element={ <SignupComponent/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
