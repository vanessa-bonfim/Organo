import "./FieldText.css";

const FieldText = ({label, placeholder, value, whenChanged, required = false}) => {
    
    return (
        <div className="field-text">
            <label>{label}</label>
            <input value={value} onChange={event => whenChanged(event.target.value)} required={required} placeholder={placeholder}/>
        </div>
    )
}

export default FieldText