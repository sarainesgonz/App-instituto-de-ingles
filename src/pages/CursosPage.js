import React from "react";
import '../styles/CursosPage.css'

const CursosPage = (props) => {
    return (
        <main className="contenedor">
            <h2>Nuestros cursos</h2>

            <div className="curso">
                <div className="curso_image">
                    <img src="images/curso1.jpg" alt="curso 1" />
                </div>
                <div className="curso_info">
                    <h3>English conversation through play and arts</h3>
                    <p>Integer sit amet ultrices nibh. Suspendisse laoreet dignissim magna, sed dignissim erat facilisis at. Nulla a nibh vestibulum, elementum lacus ut, convallis felis. Vivamus faucibus ligula vitae finibus sodales. Aenean ultricies pellentesque odio eget ornare.</p>
                </div>
            </div>
            
            <div className="curso">
                <div className="curso_image">
                    <img src="images/curso3.jpg" alt="curso 3" />
                </div>
                <div className="curso_info">
                    <h3>English for academic purposes</h3>
                    <p>Integer sit amet ultrices nibh. Suspendisse laoreet dignissim magna, sed dignissim erat facilisis at. Nulla a nibh vestibulum, elementum lacus ut, convallis felis. Vivamus faucibus ligula vitae finibus sodales. Aenean ultricies pellentesque odio eget ornare.</p>
                </div>
            </div>

            <div className="curso">
                <div className="curso_image">
                    <img src="images/curso4.jpg" alt="curso 4" />
                </div>
                <div className="curso_info">
                    <h3>English for travellers</h3>
                    <p>Integer sit amet ultrices nibh. Suspendisse laoreet dignissim magna, sed dignissim erat facilisis at. Nulla a nibh vestibulum, elementum lacus ut, convallis felis. Vivamus faucibus ligula vitae finibus sodales. Aenean ultricies pellentesque odio eget ornare.</p>
                </div>
            </div>

            <div className="curso">
                <div className="curso_image">
                    <img src="images/curso5.jpg" alt="curso 5" />
                </div>
                <div className="curso_info">
                    <h3>Online classes for everyone</h3>
                    <p>Integer sit amet ultrices nibh. Suspendisse laoreet dignissim magna, sed dignissim erat facilisis at. Nulla a nibh vestibulum, elementum lacus ut, convallis felis. Vivamus faucibus ligula vitae finibus sodales. Aenean ultricies pellentesque odio eget ornare.</p>
                </div>
            </div>


        </main>
    )
}

export default CursosPage;