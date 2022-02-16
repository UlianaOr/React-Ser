import Card from './components/Card';
import Header from './components/Heder';
import Drawer from './components/Drawer';

function App() {
  return <div className='wrapper'>
   
      <Drawer />
  


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
       
      <Card />
      
    
    
    

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
