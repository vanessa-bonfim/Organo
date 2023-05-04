import "./FieldText.css";

const FieldText = (props) => {

    const modifyPlaceholder = `${props.placeholder}...`

    /* let value = "Vanessa B" */

    /* const [value, setValue] = useState('Vanessa B') */

    const whenTyped = (event) => {

        /* setValue(event.target.value); */
        /* console.log(value); */

        props.whenChanged(event.target.value)
    }
    
    return (
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder={modifyPlaceholder}/>
        </div>
    )
}

export default FieldText