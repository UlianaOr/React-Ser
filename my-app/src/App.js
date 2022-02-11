function App() {
  return <div className='wrapper'>
    <div className="overlay">
      <div className="drawer"></div>
    </div>


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
      <div className="search-block">
        <img src="/img/search.png" alt="Search"/>
        <input placeholder="Поиск..."/>
      </div>

      <div className="favorit">

        <img src ="/img/heardone.svg" alt="Heard"/>
     </div>


    <div className="todoSneakers">
       

      <div className="card">
       
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="cardPrise" >
          <div>
            <div className="prise">
            <p>Цена:</p>
            </div>
            <b>12 999 руб.</b>
            
          </div>
          <div className="buton1">
             <button>
               <img width={11} height={11} src="/img/plus.png"/>
             </button> 
            </div>
             
          
        </div>
     
     </div>
    
    
    

      <div className="card">
        <img Мужские Кроссовки Nike Blazer Mid Suedessidth={133} height={112} src="/img/sneakers/2.jpg" alt="Sneakers"/>
        <h5>Мужские Кроссовки Nike Air Max 270</h5>
        <div className="cardPrise" >
          <div>
            <div className="prise">
            <p>Цена:</p>
            </div>
            <b>12 999 руб.</b>
            
          </div>
          <div className="buton1">
             <button>
               <img width={11} height={11} src="/img/plus.png"/>
             </button> 
            </div>
             
          
        </div>
     
     </div>

     <div className="card">
        <img Мужские Кроссовки Nike Blazer Mid Suedessidth={133} height={112} src="/img/sneakers/3.jpg" alt="Sneakers"/>
        <h5>Мужские Кроссовки Nike Air Max 270</h5>
        <div className="cardPrise" >
          <div>
            <div className="prise">
            <p>Цена:</p>
            </div>
            <b>12 999 руб.</b>
            
          </div>
          <div className="buton1">
             <button>
               <img width={11} height={11} src="/img/plus.png"/>
             </button> 
            </div>
             
          
        </div>
     
     </div>

     <div className="card">
        <img Мужские Кроссовки Nike Blazer Mid Suedessidth={133} height={112} src="/img/sneakers/4.jpg" alt="Sneakers"/>
        <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
        <div className="cardPrise" >
          <div>
            <div className="prise">
            <p>Цена:</p>
            </div>
            <b>12 999 руб.</b>
            
          </div>
          <div className="buton1">
             <button>
               <img width={11} height={11} src="/img/plus.png"/>
             </button> 
            </div>
             
          
        </div>
     
     </div>
   </div>

     
  </div>  
    
    
</div>
}

export default App;
