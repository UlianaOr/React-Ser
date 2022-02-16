import Card from './components/Card';
import Header from './components/Heder';

function App() {
  return <div className='wrapper'>
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2><img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/> Корзина</h2>

       <div className="items">
         <Card/>
         <div className="cartItem">
          <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>

          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
         </div>

         <div className="cartItem">
          <img width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers"/>

          <div>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
         </div>
        </div>


        <div className="itog">

          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>

            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          
          <button className="greenButton">Оформить заказ <img src="/img/erl.svg" alt="Erl"/> </button>
          
        </div>
        
      </div>
    </div>


    <Header />

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
