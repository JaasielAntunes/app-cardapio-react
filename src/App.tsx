import './App.css'

function App() {
  const data = [];

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data.map(foodData => <Card/>)}
      </div>
    </div>
  )
}

export default App
