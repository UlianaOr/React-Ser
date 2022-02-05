function App() {
  return <div className='wrapper'>
    <header>
      <div className="headerLeft">
      <img width={40} height={40} src="/img/logo.png"/>
      <div className="headerInfo">
        <h3> React Sneakers</h3>
        <p>Магазин лучших кроссовок</p>
      </div>
      </div>
      <ul className="headerRight">
        <li>
          <img width={18} height={18} src="/img/car.png"/>
          <span>
            1205 руб.
            </span>
        </li>
        <li>
        <img width={20} height={20} src="/img/user.png"/>
        </li>
      </ul>
    </header>

    <div className="content">
      <h1>Все кросовки</h1>

      <div className="card">
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
        <p>Мужские кроссовки</p>
        <div className="cardPrise" >
          <div>
            <div className="prise">
            <p>Цена:</p>
            </div>
            <b>12 999 руб.</b>
            
          </div>
             <button>
               <img width={11} height={11} src="/img/plus.png"/>
             </button>
             
          
        </div>
     
     </div>
    
    </div>
    
  </div>
}

export default App;
