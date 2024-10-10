

import { Card } from '../Card/Card'
import { Filtr } from '../Filtr/Filtr'
import { Header } from '../Header/Header'
import s from './Catalog.module.css'


export function Catalog() {
    return (
        <>
            <div className="container">
                <h2>Каталог товаров</h2>
                <Filtr></Filtr>
                <div className={s.cards}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </>
    )
}