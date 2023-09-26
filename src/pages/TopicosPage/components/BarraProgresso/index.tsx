interface BarraProgressoProps{
    porcentagem: number;
}
export function BarraProgresso({porcentagem}: BarraProgressoProps){
    const estiloBarraProgresso = {
        width: '80%',
        backgroundColor: '#d3d3d3',
        borderRadius: 40,
    }
    const estiloProgresso = {
        width: porcentagem + "%",
        backgroundColor: porcentagem < 50 ? '#FF7F7F' : '#6AC17D',
        borderRadius: 40,
        transition: 'width 1s ease, background-color 1s ease',
        padding: '0.25rem',
    }

    const estiloTexto = {
        color: '#30475E',
        fontWeight: 'bold',
    }

    return (
        <div style={estiloBarraProgresso}>
            <div style={estiloProgresso}>
                <span style={estiloTexto}>{porcentagem.toFixed(2)}%</span>
            </div>
        </div>
    )
}