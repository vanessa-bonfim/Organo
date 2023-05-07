import "./Employee.css"

const Employee = ({employee, boxColor}) => {
    console.log(boxColor);

    return (
        <div className="employee">
            <div className="employee__header" style={{backgroundColor: boxColor}}>
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