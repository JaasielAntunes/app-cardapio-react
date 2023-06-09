import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <>
      <br />
      <div className="container">
        <h1>Cardápio</h1>
        <div className="card-grid">
          {Array.isArray(data) && data.map(foodData =>
            <Card
              key={foodData.id}
              price={foodData.price}
              title={foodData.title}
              imgUrl={foodData.imgUrl}
            />)}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button className="btn-novo" onClick={handleOpenModal}>Cadastrar Novo</button>
      </div>
    </>
  )
}

export default App;
