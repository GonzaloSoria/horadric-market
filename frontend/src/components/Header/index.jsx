import { Menu } from '../Menu';
import { UserWidget } from '../UserWidget'
import horadricMarket from '../../assets/horadric-market-logo.png'
import './header.css'

export const Header = () => {

  return (
    <>
      <header className='header fixed-top container-fluid py-3 px-5'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
            <Menu />
            <img src={horadricMarket} alt="Horadric Market Logo" style={{width: '220px'}} className='ms-3'/>
            </div>
            <div className='d-flex align-items-center'>
              <UserWidget />
            </div>            
          </div>
      </header>
    </>
  );
}