import "./FieldText.css";

const FieldText = (props) => {

    const modifyPlaceholder = `${props.placeholder}...`
    
    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input required={props.required} placeholder={modifyPlaceholder}/>
        </div>
    )
}

export default FieldText