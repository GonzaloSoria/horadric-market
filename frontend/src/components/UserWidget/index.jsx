import { Dropdown } from 'react-bootstrap'
import userIcon from '../../assets/user-icon.png'
import favIcon from '../../assets/fav-icon.png'
import './user-widget.css'

export const UserWidget = () => {
  let userName = 'EscudoDeRoble'

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='btn-user-menu d-flex align-items-center'>
        <img src={userIcon} alt="" style={{width: '30px'}}/>
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu shadow'>
        <Dropdown.Item href="#/" className='login mb-0'>Perfil</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/" className='login d-flex align-items-center'>
          Favoritos
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/" className='login'>Iniciar sesión</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/" className='register'>Registrarse</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

