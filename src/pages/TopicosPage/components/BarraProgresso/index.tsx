interface BarraProgressoProps{
    porcentagem: number;
}
export function BarraProgresso({porcentagem}: BarraProgressoProps){
    const estiloBarraProgresso = {
        height: '20px',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
    }
    const progresso = {
        width: porcentagem + "%",
        height: '20px',
        backgroundColor: porcentagem < 50 ? 'red' : 'green',
        borderRadius: 40,
    }

    return (
        <div style={estiloBarraProgresso}>
            <div style={progresso}>
                <span>{porcentagem.toFixed(2)}%</span>
            </div>
        </div>
    )
}