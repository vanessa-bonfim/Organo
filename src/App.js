import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Ux e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([]);

  const whenNewEmployeeAdded = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner />
      <Form team={teams.map(team => team.name)} whenRegisteredEmployee={employee => whenNewEmployeeAdded(employee)}/>
      {teams.map(team => <Team 
      key={team.name} 
      name={team.name} 
      backgroundColor={team.secondaryColor} 
      boxColor={team.primaryColor}
      employees={employees.filter(employee => employee.team === team.name)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
