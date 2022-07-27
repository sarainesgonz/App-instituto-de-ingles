import React from "react";
import '../styles/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <section>
            <h2>Sobre nosotros</h2>
            <div className="nosotros">
                <div className="nosotros_image">
                    <img src="images/teamwork.jpg" alt="Teamwork" />
                </div>
                <div className="nosotros_text">
                    <p>Integer nec tortor eget ligula. Fusce in bibendum mi. Duis ullamcorper fringilla sem vel efficitur. Sed mollis, convallis, dui mi pulvinar magna, sit amet pharetra justo lacus tincidunt justo. Mollis justo et, ultricies massa. Proin eget ipsum vitae leo posuere sodales in id odio. Elementum rutrum, leo velit aliquet neque, non mollis sapien nibh sed sem. Vestibulum pellentesque imperdiet leo, id tempus nulla fermentum nec. Curabitur condimentum elit quis ex malesuada sollicitudin. In mollis vitae purus at finibus. Vivamus pulvinar tempor lacinia. Cras non egestas sem. Nunc nisi nunc, tristique eu ornare sed, interdum non justo.</p>
                    <p>Fusce consequat bibendum condimentum. Proin id tellus vestibulum, mollis justo et, ultricies massa. Proin eget ipsum vitae leo posuere sodales in id odio. Integer convallis, tortor rutrum elementum rutrum, leo velit aliquet neque, non mollis sapien nibh sed sem. Vestibulum pellentesque imperdiet leo, id tempus nulla fermentum nec. Curabitur condimentum elit quis ex malesuada sollicitudin. In mollis vitae purus at finibus. Vivamus pulvinar tempor lacinia. Cras non egestas sem. Nunc nisi nunc, tristique eu ornare sed, interdum non justo.</p>
                </div>
            </div>
        </section>
    )
}

export default NosotrosPage;