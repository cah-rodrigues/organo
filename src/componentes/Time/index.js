import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const colorBackground = {backgroundColor: props.corDeFundo}

    return (
        <section className='time' style={colorBackground}>
            <h3 style={{borderColor: props.corDestaque}} >{props.nome}</h3>
            <Colaborador/>
            <Colaborador/>

        </section>
    )
}

export default Time