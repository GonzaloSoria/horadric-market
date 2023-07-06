import { Menu } from '../Menu';
import { UserWidget } from '../UserWidget'
import horadricMarket from '../../assets/horadric-market-logo.jpg'
import './header.css'

export const Header = () => {

  return (
    <>
      <header className='header fixed-top container-fluid py-3'>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center'>
            <Menu />
            <img src={horadricMarket} alt="Horadric Market Logo" style={{width: '220px'}}/>
            <div className='d-flex align-items-center'>
              <UserWidget />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}