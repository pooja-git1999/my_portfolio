import React from 'react'
import './contact.css'

export default function ContactForm() {
    return (
        <>
            <section id="contact">
                <h1 class="section-heading mb50px">
                    <span>
                        <i class="far fa-address-card"></i>
                    </span>
                    <span> Contact </span>
                </h1>
                <div id="contact-container">

                    <div id="contact-form-container">
                        <form id="contact-form">
                            <input id="input-name" name="name" type="text" placeholder="Your Name" />
                            <input id="input-email" name="input-email" type="text" required placeholder="Your Email" />
                            <textarea
                                id="input-message" name="input-message" rows="2" cols='40'
                                placeholder="Message" />
                            <button class="sub-btn" type="submit">SEND MESSAGE</button>
                        </form>
                    </div>
                    <div id="my-details-container">

                        <h3> Get In touch </h3>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. </p>

                        <h3> My Address </h3>
                        <div class="my-details-info-container">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Delhi, India</span>
                        </div>
                        <div class="my-details-info-container">
                            <i class="fas fa-mobile-alt"></i>
                            <span>9999999999</span>
                        </div>
                        <div class="my-details-info-container">
                            <i class="far fa-envelope"></i>
                            <span>myemail@gmail.com</span>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}
