import { useEffect, useState } from "react"
import { getTickets } from "../../services/ticketService"
import "./Tickets.css"
import { Ticket } from "./Ticket"

export const TicketList = () => {
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
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} name="joe" key={ticketObj.id}/>
        })}
      </article>
    </div>
  )
}