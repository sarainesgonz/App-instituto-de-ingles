import React from "react";

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedades shadow">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <div className="img_txt">
                <img className="img" alt="" src={imagen} />
                <div className="txt" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            
        </div>
    );
}

export default NovedadItem;