import { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import menuIcon from '../../assets/menu-icon3.png'
import './menu.css'

export const Menu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='btn-menu'>
        <img src={menuIcon} alt="menu icon" className='menu-icon'/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} className='offcanvas-bg'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}