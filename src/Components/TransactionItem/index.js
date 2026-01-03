import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
          
        >
          <img
            className="delete-img"
            src="https://res.cloudinary.com/dy05m6a1p/image/upload/v1767421703/Screenshot_396_a4euwk.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
