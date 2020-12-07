import "./App.css"
import jour1 from "./days/jour1"
import jour2 from "./days/jour2"
import jour3 from "./days/jour3"
import jour4 from "./days/jour4"
import jour5 from "./days/jour5"
import jour6 from "./days/jour6"
import jour7 from "./days/jour7"

function App() {
  const tableauResultats = [
    jour7(),
    jour6(),
    jour5(),
    jour4(),
    jour3(),
    jour2(),
    jour1(),
  ]
  return (
    <div className="App">
      <header className="App-header">
        <table>
          {tableauResultats.map((jour, i) => {
            return (
              <tr>
                <td>{"jour" + (tableauResultats.length - i)}</td>
                <td>{jour[0]}</td>
                <td>{jour[1]}</td>
              </tr>
            )
          })}
        </table>
      </header>
    </div>
  )
}

export default App
