import { useState } from "react";
import Button from '../Button'
import Dropdown from '../Dropdown'
import Field
 from '../Field'
import './Form.css'

const Form = ({ whenRegisteredEmployee, teams, whenRegisterTeam }) => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')

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
            <form className="form form__employee" onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field                
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <Field                
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    whenChanged={value => setRole(value)}
                />
                <Field                
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
                <Button text='Criar Card' />
            </form>

            <form className="form form__team" onSubmit={(event) => {
                event.preventDefault();
                whenRegisterTeam({name: nameTeam, color: colorTeam})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field                
                    required
                    label="Nome do time"
                    placeholder="Digite o nome do time"
                    value={nameTeam}
                    whenChanged={value => setNameTeam(value)}
                />
                <Field                
                    required
                    type='color'
                    label="Cor do time"
                    placeholder="Digite a cor do time"
                    value={colorTeam}
                    whenChanged={value => setColorTeam(value)}
                />
                <Button text='Criar Time' />
            </form>
        </section>
    )
}

export default Form