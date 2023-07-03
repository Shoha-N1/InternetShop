import "./Card.scss"

export default function Card({children, cardClass}){
  return (
    <div className={`${cardClass} card` }>
      {children}
    </div>
  )
}