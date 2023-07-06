import { Dropdown } from 'react-bootstrap'
import userIcon from '../../assets/user-icon.png'
import './user-widget.css'

export const UserWidget = () => {
  const user = true
  let userName = 'EscudoDeRoble'

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='btn-user-menu d-flex align-items-center'>
        <img src={userIcon} alt="" style={{width: '30px'}}/>
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu shadow'>
        {
          user ? 
          <>
            <Dropdown.Item href="#/" className='login mb-0'>@{userName}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/" className='login'>Favoritos</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/" className='logout'>Cerrar sesión</Dropdown.Item>
          </>
          :
          <>
            <Dropdown.Item href="#/" className='login'>Iniciar sesión</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/" className='register'>Registrarse</Dropdown.Item>
          </>
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

