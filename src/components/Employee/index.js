import hexToRgba from 'hex-to-rgba';
import { AiFillCloseCircle } from 'react-icons/ai';
import "./Employee.css"

const Employee = ({ employee, whenDelete, boxColor }) => {
    return (
        <div className="employee">
            <AiFillCloseCircle
                className="employee__delete"
                size={20}
                fontWeight={500}
                style={{ color: hexToRgba(boxColor, '0.6') }}
                onClick={() => whenDelete(employee.id)} />
            <div className="employee__header" style={{ backgroundColor: boxColor }}>
                <img src={employee.image} alt={employee.name} />
            </div>
            <div className="employee__footer">
                <h4>{employee.name}</h4>
                <h5>{employee.role}</h5>
            </div>
        </div>
    )
}

export default Employee