import { useEffect, useState } from "react"
import { getTickets } from "./services/ticketService.js"
import "./App.css"

export const App = () => {
const [allTickets, setAllTickets] = useState([])
const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
const [filteredTickets, setFilteredTickets] = useState([])

  useEffect(() => {
    getTickets().then((ticketsArray) => {
    setAllTickets(ticketsArray)
    console.log("tickets set!")
  })
  }, []) //ONLY runs on initial render of component BECAUSE its empty

  useEffect(() => {
    if (showEmergencyOnly === true) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets]) //not showEmergencyOnly. allTickets because the state is depending on allTickets to render intially

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
        {filteredTickets.map((ticket) => {
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
