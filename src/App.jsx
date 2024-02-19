// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Survey from './components/Survey'
import Result from './components/Result'
import Setting from './components/Setting';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Question5 from './components/Question5';
import Question6 from './components/Question6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/Q1" element={<Question1/>}></Route>
        <Route path="/Q2" element={<Question2/>}></Route>
        <Route path="/Q3" element={<Question3/>}></Route>
        <Route path='/Q4' element={<Question4/>}></Route>
        <Route path='/Q5' element={<Question5/>}></Route>
        <Route path='/Q6' element={<Question6/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
