import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [employees, setEmployees] = useState([]);

  const whenNewEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form whenRegisteredEmployee={employee => whenNewEmployeeAdded(employee)}/>
    </div>
  );
}

export default App;
