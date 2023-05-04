import Button from '../Button'
import Dropdown from '../Dropdown'
import FieldText from '../FieldText'
import './Form.css'

const Form = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    const whenSaving = (event) => {
        event.preventDefault();
        console.log('Form submetido');
    }
    return (
        <section className='formulario'>
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <FieldText required={true} label="Nome" placeholder="Digite seu nome" />
                <FieldText required={true} label="Cargo" placeholder="Digite seu cargo" />
                <FieldText label="Imagem" placeholder="Digite o endereço da imagem" />
                <Dropdown required={true} label="Time" items={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form