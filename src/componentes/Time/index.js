import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const colorBackground = {backgroundColor: props.corDeFundo}

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={colorBackground}>
            <h3 style={{borderColor: props.corDestaque}} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                <Colaborador
                corDoCard={props.corDestaque}
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                />)}
            </div>
        </section>
        :''
    )
}

export default Time