    import React from "react";


    const ContactPage = ()=>{


    return <div className='P-contact'>
            <div>
                <h2> Contact Us</h2>
            </div>
        <div className="P-display-flex">
        <div className="P-bg-form">
            <div className='P-form'>
                <label>
                    <input name={'name'} className='P-input' type="text" placeholder='Your Name'/>
                </label>
            </div>
            <div className='P-form'>
                <label>
                    <input  name={'email'} className='P-input' type="email" placeholder='Email'/>
                </label>
            </div>
            <div className='P-form'>
                <label>
                    <input name={'subject'} className='P-input' type="text" placeholder='Subject'/>
                </label>
            </div>
            <div className ='P-form'>
                <label>
                    <textarea name="message" placeholder="Message" className="P-textarea"/>
                </label>
            </div>
            <button>Send Message</button>
        </div>
        <div>
        <div className="P-map">
            <iframe src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contacts-info">
            <div className="Phone">
                <p>12345 Street, New York, USA</p>
                <p>info@example.com</p>
                <p>+012 345 67890</p>
                <p>dgvdsgsdg</p>
            </div>
        </div>
        
        </div>
    </div>
    </div>
    
}
export default ContactPage