import { useReducer, useEffect } from 'react'
import chef from './images/chef.png'

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = ['Pizza', 'Spaghetti', 'Salad']

const dishObjects = items.map((dish, i) => ({ id: i, name: dish }))

function Main({dishes, openStatus, onStatus}) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>
          I want to be open!
        </button>
        <h2>Welcome to this beautiful restaurant! {openStatus ? 'We are open!' : 'We are closed.'}</h2>
      </div>
      <main>
        <img src={chef} alt="Chef" height={200} />
        <ul>
          {dishes.map((dish) => 
            <li key={dish.id} style={{ listStyleType: "none"}}>{dish.name}</li>)}
        </ul>
      </main>
    </>
  )
}

function App() {
  const [status, toggle] = useReducer((status) => !status, true)

  useEffect(() => {
    console.log(`The restaurant is now ${status ? 'open' : 'closed'}.`)
  }, [status])

  return (
    <div>
      <h1>The restaurant is currently {status ? 'open' : 'closed'}.</h1>
      <button onClick={toggle}>{status ? 'Close' : 'Open'} Restaurant</button>
      <Header name="Travis" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  )
}

export default App
