interface BarraProgressoProps{
    porcentagem: number;
    saldoLikes: number;
}
export function BarraProgresso({porcentagem, saldoLikes}: BarraProgressoProps){
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
                <span>{saldoLikes}</span>
            </div>
        </div>
    )
}