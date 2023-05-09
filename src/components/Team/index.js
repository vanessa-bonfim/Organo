import hexToRgba from 'hex-to-rgba';
import Employee from '../Employee';
import './Team.css'

const Team = ({ team, employees, whenDelete, changeColor, whenFavorite }) => {
    return (
        employees.length > 0 && <section className='team' style={{ backgroundImage: 'url(/img/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input
                onChange={event => changeColor(event.target.value, team.id)}
                value={team.color}
                type='color'
                className='team__input-color'
            />
            <h3 style={{ borderColor: team.color }}>{team.name}</h3>
            <div className='employees'>
                {employees.map((employee, i) => {
                    return (
                        <Employee
                        key={i}
                        employee={employee}
                        boxColor={team.color}
                        color={team.color}
                        whenDelete={whenDelete}
                        whenFavorite={whenFavorite}
                        />
                        );
                })}
            </div>
        </section>
    )
}

export default Team