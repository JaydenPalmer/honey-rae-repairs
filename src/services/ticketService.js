export const getTickets = () => {
    return fetch("http://localhost:8088/serviceTickets").then(res => res.json())
}