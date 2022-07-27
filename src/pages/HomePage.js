import React from "react";
import '../styles/HomePage.css'

const HomePage = (props) => {
    return (
        <main>       
            <h2>¡Bienvenidos!</h2>
            <div className="bienvenidos">
                <img src="images/learnenglish.jpg" alt="learn english" />
                <p>Nulla facilisi. Proin eget nisi porttitor, cursus ligula et, hendrerit velit. Phasellus nec eleifend lectus. Sed sed turpis id eros condimentum auctor. Aenean accumsan vulputate felis, eleifend maximus eros dapibus eget. Morbi non purus varius, iaculis lectus ac, blandit metus. Nam imperdiet est sed tincidunt faucibus. Pellentesque congue nunc a interdum efficitur. Morbi a velit tortor. Aenean consectetur, enim ac pretium eleifend, nisl eros viverra ipsum, at lobortis justo est sed lacus. Curabitur viverra magna eget dolor porta euismod. Sed eget ultrices risus, sed commodo nisl. Donec ullamcorper ex ac ex ullamcorper euismod. Nulla nisi nunc, volutpat ut nibh at, cursus tincidunt nunc.</p>
            </div>
            <div className="recomendacion">
                <h3>Nuestros alumnos nos recomiendan:</h3>
                <div className="testimonios">
                    <p>"Donec elementum mauris a tellus bibendum egestas. Fusce lacinia, nibh ac ultricies pulvinar, neque diam pellentesque ligula, non posuere risus diam sit amet ligula." <span>Rosa G.</span></p>
                    <p>"Donec elementum mauris a tellus bibendum egestas. Fusce lacinia, nibh ac ultricies pulvinar, neque diam pellentesque ligula." <span>Matias P.</span></p>
                    <p>"Donec elementum mauris a tellus bibendum egestas. Fusce lacinia, nibh ac ultricies pulvinar" <span>Lina H.</span></p>
                    <p>"Donec elementum mauris a tellus bibendum egestas. Fusce lacinia, nibh ac ultricies pulvinar, neque diam pellentesque ligula, non posuere risus diam sit amet ligula." <span>Vicente M.</span></p>
                </div>
            </div>
            <div className="ubicacion">
                <h3>Ubicación</h3>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <p>Salta Capital</p>
            </div>
            
        </main>
    );
}

export default HomePage;