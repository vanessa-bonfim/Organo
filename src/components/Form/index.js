import { useState } from "react";
import Button from '../Button'
import Dropdown from '../Dropdown'
import FieldText from '../FieldText'
import './Form.css'

const Form = ({whenRegisteredEmployee, teams}) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSaving = (event) => {
        event.preventDefault();
        console.log('Form submetido =>', name, role, image, team);
        whenRegisteredEmployee({
            name,
            role,
            image,
            team
        })
    }
    return (
        <section className='form-container'>
            <form className="form" onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <FieldText
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    whenChanged={value => setRole(value)}
                />
                <FieldText
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    whenChanged={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Time"
                    items={teams}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button text='Criar Card'/>
            </form>
        </section>
    )
}

export default Form