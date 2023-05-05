import Employee from '../Employee';
import './Team.css'

const Team = (props) => {
    const background = { backgroundColor: props.backgroundColor };

    return (
        props.employees.length > 0 && <section className='team' style={background}>
            <h3 style={{ borderColor: props.boxColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => <Employee  key={employee.name} name={employee.name} role={employee.role} image={employee.image} />)}
            </div>
        </section>
    )
}

export default Team