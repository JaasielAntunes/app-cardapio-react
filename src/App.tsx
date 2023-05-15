import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const { data } = useFoodData();

  return (
    <>
      <br />
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {data?.map(foodData =>
            <Card
              key={foodData.id}
              price={foodData.price}
              title={foodData.title}
              imgUrl={foodData.imgUrl}
            />)}
        </div>
      </div>
    </>
  )
}

export default App
