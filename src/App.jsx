import { useEffect, useState } from "react"
import { getTickets } from "./services/ticketService.js"

export const App = () => {
const [allTickets, setAllTickets] = useState([])
const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)

  useEffect(() => {
    getTickets().then((ticketsArray) => {
    setAllTickets(ticketsArray)
    console.log("tickets set!")
  })
  }, []) //ONLY runs on initial render of component BECAUSE its empty

  useEffect(() => {
    console.log("Show Emergency Changed")
  }, [showEmergencyOnly])

  return (
    <div className="tickets-container">
      <h2>TIckets</h2>
      <div>
        <button className="filter-btn btn-primary" onClick={() => {
          setShowEmergencyOnly(true)}
        }
          >Emergency</button>
      </div>
      <div>
        <button className="filter-btn btn-info" onClick={() => {
          setShowEmergencyOnly(false)
        }}
        >Show All</button>
      </div>
      <article className="tickets">
        {allTickets.map((ticket) => {
          return (
            <section className="ticket" key={ticket.id}>
              <header className="ticket-info">#{ticket.id}</header>
              <div>{ticket.description}</div>
              <footer>
                <div>
                  <div className="ticket-info">emergency</div>
                  <div>{ticket.emergency ? "yes" : "no"}</div>
                </div>
              </footer>
            </section>
          )
        })}
      </article>
    </div>
  )
}
