import { useState } from "react";

export const Register =()=>{

const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
});

const handleInput=(e)=>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]:value,
    })
}

const handleSubmit=(e)=>{
    e.prevertDefault();
    alert(user);
};

    return <>
    <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/registration.jpg" alt="" width="500" height="500" />
                    </div>

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">
                            Registration Form
                        </h1>
                        <br />

                        <form onClick={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"
                                value={user.usermame}
                                onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                                value={user.email}
                                onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone No.:</label>
                                <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off"
                                value={user.phone}
                                onChange={handleInput}/>
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" name="password" placeholder="password" id="password" required autoComplete="off"
                                value={user.password}
                                onChange={handleInput}/>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Register</button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    </section>
    </> 
};