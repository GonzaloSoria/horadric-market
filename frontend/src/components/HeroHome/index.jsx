import { data } from '../../data/data'
import diabloIV from '../../assets/diabloiv-logo.png'
import druid from '../../assets/druid.png'
import './hero-home.css'

export const HeroHome = () => {
  return (
    <>
        <section className="hero-container container-fluid py-5 mt-5">
            <div className="container mt-5">
                <div className="row py-5">
                    <div className="col-6">
                        <img src={diabloIV} alt="Diablo IV" style={{width: '150px'}}/>
                        <h1 className='hero-home-title text-uppercase mb-5'>{data.home.hero.title}</h1>
                        <div>
                            <a href="#" className='iniciar-sesion'>Iniciar sesión</a>
                            <a href="#" className='btn-view-objetcs ms-3'>{data.home.hero.btnCopy}</a>
                        </div>  
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
