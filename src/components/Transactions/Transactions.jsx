import css from './Transactions.module.css'

export const Transactions = ({ items }) => {
    return (
        <table className={css.transactions}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(el =>
                <tr key={el.id}>
                    <td>{el.type}</td>
                    <td>{el.amount}</td>
                    <td>{el.currency}</td>
                </tr>)}
            </tbody>
        </table>
    )
}
