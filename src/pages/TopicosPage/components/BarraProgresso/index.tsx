interface BarraProgressoProps{
    porcentagem: number;
}
export function BarraProgresso({porcentagem}: BarraProgressoProps){
    const estiloBarraProgresso = {
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        height: '20px'
    }
    const estiloProgresso = {
        width: porcentagem + "%",
        backgroundColor: porcentagem < 50 ? '#FF7F7F' : '#6AC17D',
        borderRadius: 40,
        transition: 'width 1s ease, background-color 1s ease',
        padding: '0.11rem',
        height: '20px'
    }

    const estiloTexto = {
        color: '#30475E',
        fontWeight: 'bold'
    }

    return (
        <div style={estiloBarraProgresso}>
            <div style={estiloProgresso}>
                <span style={estiloTexto}>{porcentagem.toFixed(2)}%</span>
            </div>
        </div>
    )
}