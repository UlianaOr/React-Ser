function Card() {
    return (
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
    );
}

export default Card;