import { AccountBalanceWalletRounded, Chat, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import './App.css';
import Header from './Components/Header';
import MenuContainer from './Components/MenuContainer';
import { useEffect, useState } from 'react';
import BannerName from './Components/BannerName';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {MenuItems, Items} from './Components/Data'
import ItemCard from './Components/ItemCard';

function App() {
  //menu dish
  const [isMainData, setMainData] = useState(
    Items.filter(element => element.itemId === 'buger01')
  )
  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li');
    
    function setMenuActive(){
      menuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuLi.forEach(n => n.addEventListener('click', setMenuActive));

    //menucard active toggle
    const menuCards = document.querySelector('.rowContainer')
    .querySelectorAll('.rowMenuCard');

    function setMenuCardActive(){
      menuCards.forEach((n)=> n.classList.remove('active'));
      this.classList.add('active');
    }
    menuCards.forEach(n => n.addEventListener('click', setMenuCardActive))
  },[isMainData]);
//seet main dish items on filter
  const setData = (itemId)=>{
    setMainData(Items.filter(element => element.itemId === itemId))
  }
  return (
    <div className="App">
      {/**header Section */}
      <Header/>
      {/**Main container */}
        <main>
          <div className='mainContainer'>
            {/**Banner */}
            <div className='banner'>
              <BannerName name={"Balton"} discount={"20"} link={"#"}/>
              <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337'
              alt=''
              className='bannerPic'/>
            </div>
            <div className='dishContainer'>
              <div className='menuCard'>
                <SubMenuContainer name={"Categoria del Menu"}/>
              </div>
              <div className='rowContainer'>
                {
                  MenuItems && MenuItems.map(data => ( //aqui es donde debemos modificar apra que se conecte ala base de firebase y de resultados poner atencion
                    <div key={data.id} onClick={()=> setData(data.itemId)}>
                    <MenuCard imgSrc={data.imgSrc}
                     name={data.name}
                     isActive = {data.id === 1 ? true : false}
                     />                   
                  </div>
                  ))
                }

                              
              </div>
              <div className='dishItemContainer'> 
              {
                isMainData && isMainData.map(data => (
                  <ItemCard 
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc}
                  name={data.name}
                   ratings={data.ratings}
                    price={data.price}/>  
                ) )
              }
         
              </div>
            </div>
          </div>
          <div className='rightMenu'></div>
        </main>
      {/**Bottom menu */}
      <div className='bottomMenu'>
        <ul id='menu'>
          {/**prettier-ignore */}
          <MenuContainer link={'#'} icon ={<HomeRounded/>} isHome/>
          {/**prettier-ignore */}
          <MenuContainer link={'#'} icon ={<Chat/>}/>
          {/**prettier-ignore */}
          <MenuContainer link={'#'} icon ={<AccountBalanceWalletRounded/>}/>
          {/**prettier-ignore */}
          <MenuContainer link={'#'} icon ={<SummarizeRounded/>}/>
          {/**prettier-ignore */}
          <MenuContainer link={'#'} icon ={<Settings/>}/>

          <div className='indicator'></div>          
        </ul>
      </div>

    </div>
  );
}

export default App;
