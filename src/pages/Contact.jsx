import { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {
    username: "",
    email: "",
    message: ""
}

export const Contact = () => {
    const [contact, setContact] = useState(defaultContactFormData);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    }

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setContact({
                username: user.username,
                email: user.email,
                message: ""
            });
        }
    }, [user]);

    const handleSubmit =async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact",{
                method: "POST",
                headers: {
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(contact),
            });
            if(response.ok){
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert('Message sent successfully!');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact Us</h1>
                </div>
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/contact.jpg" alt="" width="600" height="600"/>
                    </div>

                    <div className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    value={contact.message}
                                    onChange={handleInput}
                                    cols="30"
                                    rows="10"
                                ></textarea>
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3908650294934!2d79.05904737495487!3d21.17662638268406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1a8970c08e9%3A0xfe4a9c97e7e671cb!2sShri%20Ramdeobaba%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1720785201293!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
            </section>
        </>
    );
};
