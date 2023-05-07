import "./Dropdown.css";

const Dropdown = ({label, items, value, whenChanged, required =  false }) => {

    return (<div className="dropdown">
            <label>{label}</label>
            <select onChange={event => whenChanged(event.target.value)} required={required} value={value}>
                <option></option>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown