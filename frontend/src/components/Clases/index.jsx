import './clases.css'

export const Clases = () => {
  return (
    <>
        <section className="clases-container container-fluid py-5 text-uppercase">
            <div className="container">
                <h2 className='clases-title'>Objetos para todas las clases</h2>
                <div className="row py-5 my-5">
                    <div className="col-3">
                        <div className="card-container shadow">
                            <img className='card-img' src="https://diablo4.wiki.fextralife.com/file/Diablo-4/diablo_4_druid_class_fextralife_wiki_guide_200px.png.png" alt="" />
                            <h3 className='card-title py-3'>Druida</h3>
                            <p className='card-copy'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione.</p>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className="card-container shadow">
                            <img className='card-img'  src="https://diablo4.wiki.fextralife.com/file/Diablo-4/diablo_4_barbarian_class_fextralife_wiki_guide_200px.png" alt="" />
                            <h3 className='card-title py-3'>Barbaro</h3>
                            <p className='card-copy'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione.</p>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className="card-container shadow">
                            <img className='card-img'  src="https://diablo4.wiki.fextralife.com/file/Diablo-4/diablo_4_necromancer_class_fextralife_wiki_guide.png" alt="" />
                            <h3 className='card-title py-3'>Nigromante</h3>
                            <p className='card-copy'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione.</p>
                        </div>
                    </div>
                    <div className="col-3">
                    <div className="card-container shadow">
                            <img className='card-img'  src="https://diablo4.wiki.fextralife.com/file/Diablo-4/diablo_4_sorceress_class_fextralife_wiki_guide_200px.png" alt="" />
                            <h3 className='card-title py-3'>Hechicera</h3>
                            <p className='card-copy'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
