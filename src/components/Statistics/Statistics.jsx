import css from './Statistics.module.css'
import getRandomHexColor from './getRandomHexColor'


export const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
        {{ title } && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statsList}>
            {stats.map(el =>
                <li key={el.id} className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}}>
                    <span className={css.label}>.{el.label}</span>
                    <span className={css.percentage}> {el.percentage}%</span>
                </li>)}
        </ul>
    </section>)
}

