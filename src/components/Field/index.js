import "./Field.css";

const Field = ({type = 'text', label, placeholder, value, whenChanged, required = false}) => {
    
    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input type={type} value={value} onChange={event => whenChanged(event.target.value)} required={required} placeholder={placeholder}/>
        </div>
    )
}

export default Field