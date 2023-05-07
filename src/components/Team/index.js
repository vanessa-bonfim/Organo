import Employee from '../Employee';
import './Team.css'

const Team = ({team, employees}) => {
    console.log(employees.length);
    return (
        employees.length > 0 && <section className='team' style={{backgroundImage: 'url(/img/fundo.png)', backgroundColor: team.primaryColor}}>
            <h3 style={{ borderColor: team.boxColor }}>{team.name}</h3>
            <div className='employees'>
                {employees.map((employee, i) => <Employee key={i} employee={employee} boxColor={team.secondaryColor}/>)}
            </div>
        </section>
    )
}

export default Team