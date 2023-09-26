import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import style from './style.module.css';

export function Footer(){
    return (
        <footer className={style.footer}>
            <p><AiOutlineCopyrightCircle color='#FFF'/> Desenvolvido pela Equipe SoLaMente.</p>
        </footer>
    )
}