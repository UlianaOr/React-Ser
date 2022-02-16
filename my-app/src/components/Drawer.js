function Drawer () {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
        <h2><img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/> Корзина</h2>

       <div className="items">
         
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
    );
}

export default Drawer;