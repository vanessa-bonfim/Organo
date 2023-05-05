import { useState } from "react";
import Button from '../Button'
import Dropdown from '../Dropdown'
import FieldText from '../FieldText'
import './Form.css'

const Form = (props) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSaving = (event) => {
        event.preventDefault();
        /* console.log('Form submetido =>', name, role, image); */
        props.whenRegisteredEmployee({
            id: `${Date.now()}-${name}`,
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={whenSaving}>
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
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Time"
                    items={props.team}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form