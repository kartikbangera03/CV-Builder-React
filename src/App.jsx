import { useEffect } from "react"

function App() {
  useEffect(() => {
    document.title = "CV Builder"
  }, [])

  return <div className="App"></div>
}

export default App
