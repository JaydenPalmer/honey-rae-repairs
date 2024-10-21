import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1 className="welcome">Welcome to your first React Application!</h1>
      <div>This is Amazing!</div>
      <button className="btn-secondary" onClick={handleBtnClick}>Click Me!</button>
      <div>Count: {count}</div>
    </>
  )
}
