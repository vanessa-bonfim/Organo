import "./Employee.css"

const Employee = ({name, role, image, boxColor}) => {
    console.log(boxColor);

    return (
        <div className="employee">
            <div className="employee__header" style={{backgroundColor: boxColor}}>
                <img src={image} alt={name} />
            </div>
            <div className="employee__footer">
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Employee