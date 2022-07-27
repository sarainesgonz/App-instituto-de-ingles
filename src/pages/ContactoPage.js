import React, { useState } from "react";
import '../styles/ContactoPage.css';
import axios from 'axios'; //trabaja peticiones

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <section>
            <h2>Contacto</h2>
            <div className="contacto">
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Contáctanos llenando todos los campos</legend>
                        <div className="campos">
                            <div className="campo">
                                <label>Nombre</label>
                                <input className="text" type="text" placeholder="Tu nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </div>

                            <div className="campo">
                                <label>Teléfono</label>
                                <input className="text tel" type="tel" placeholder="Tu teléfono" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </div>

                            <div className="campo">
                                <label>Email</label>
                                <input className="text" type="email" placeholder="Tu correo" name="email" value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="campo">
                                <label>Mensaje</label>
                                <textarea className="text" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                            </div >
                        </div>
                        <div className="button">
                            <input className="submit" type="submit" value="Enviar"></input>
                        </div>

                    </fieldset>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p className="msg">{msg}</p> : null}

                </form>

                <div className="otros_medios">
                    <h3>Otras vias de contacto</h3>
                    <p>Tambien puedes contactarnos usando los siguientes medios:</p>
                    <ul className="medios">
                        <div className="medio">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>
                            <li>Teléfono: 1234567890</li>
                        </div>
                        <div className="medio">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="4" />
                                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                            </svg>
                            <li>Correo: correo@correo</li>
                        </div>
                        <div className="medio">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                            </svg>
                            <li>WhatsApp</li>
                        </div>
                        <div className="medio">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                            <li>Facebook</li>
                        </div>
                        <div className="medio">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                            <li>Instagram</li>
                        </div>
                        <div className="medio">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                            <li>Twitter</li>
                        </div>

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ContactoPage;