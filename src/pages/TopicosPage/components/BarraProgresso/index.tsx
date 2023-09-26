interface BarraProgressoProps {
    porcentagem: number;
}
export function BarraProgresso({ porcentagem }: BarraProgressoProps) {
    const estiloBarraProgresso = {
        width: '80%',
        backgroundColor: '#10381dcc',
        borderRadius: '40px',
        height: '20px',
    };

    const estiloProgresso = {
        width: `${porcentagem}%`,
        backgroundColor: porcentagem < 50 ? '#FF7F7F' : '#6AC17D',
        borderRadius: '40px',
        height: '100%',
        transition: 'width 1s ease, background-color 1s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const estiloTexto = {
        color: '#30475E',
        fontWeight: 'bold',
    }

    const textoPorcentagem =
        porcentagem > 0 ? `${porcentagem.toFixed(2)}%` : '';

    return (
        <div style={estiloBarraProgresso}>
            <div style={estiloProgresso}>
                <span style={estiloTexto}>{textoPorcentagem}</span>
            </div>
        </div>
    );
}