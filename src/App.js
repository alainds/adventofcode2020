
import './App.css';
import jour1 from "./days/jour1"
import jour2 from "./days/jour2"
import jour3 from "./days/jour3"
import jour4 from "./days/jour4"
import jour5 from "./days/jour5"

function App() {
  const tableauResultats = [ jour5(), jour4(), jour3(), jour2(), jour1() ]
  return (
    <div className="App">
      <header className="App-header">
       <table>
         {
           tableauResultats.map((jour, i) =>{
             return <tr>
               <td>{"jour" + (jour.length + 2 - i)}</td>
               <td>{jour[0]}</td>
               <td>{jour[1]}</td>
               </tr>
           })
         }

       </table>
      </header>
    </div>
  );
}

export default App;
