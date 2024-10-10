import { Link } from 'react-router-dom'
import s from './Card.module.css'

export function Card() {
    return (
        <>
            <div className={s.card}>
                <div className={s.imgBox}>
                    <img src="/src/assets/Card.png" alt="" />
                </div>
                <h4>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</h4>
                <div className={s.price_btn}>
                    <p className={s.price}>335 ₽</p>
                    <Link to='/' className={s.btn}>Добавить в корзину</Link>
                </div>
            </div>
        </>
    )
}