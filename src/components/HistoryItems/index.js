import './index.css'

const HistoryItems = props => {
  const {historyDetails, onclickDelete} = props
  const {id, title, logoUrl, timeAccessed, domainUrl} = historyDetails

  const onDelete = () => {
    onclickDelete(id)
  }

  return (
    <li className="list-items">
      <div className="everything">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} className="image" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button type="button" className="delete-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-img"
          onClick={onDelete}
          alt="delete"
          testId="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems
