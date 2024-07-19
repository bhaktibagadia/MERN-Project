import { useState } from "react";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5000/user/form/update-info";

const defaultAdditionalForm={
    name: "",
    location: "",
    bloodGroup: "",
    isFit: false,
}

export const AdditionalInfo = () => {
    const [info, setInfo] = useState(defaultAdditionalForm);

    const { token } = useAuth();

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        setInfo({
            ...info,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(info),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                alert("Information Updated Successfully");
                setInfo(defaultAdditionalForm);
            } else {
                const errorData = await response.json();
                alert(errorData.message);
            }
        } catch (error) {
            console.log(error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <section>
            <div className="container">
                <h1>Additional Information</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={info.name} onChange={handleInput} required />
                    </div>
                    <div>
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location" id="location" value={info.location} onChange={handleInput} required />
                    </div>
                    <div>
                        <label htmlFor="bloodGroup">Blood Group:</label>
                        <input type="text" name="bloodGroup" id="bloodGroup" value={info.bloodGroup} onChange={handleInput} required />
                    </div>
                    <div>
                        <label htmlFor="isFit">Fit to Donate Blood:</label>
                        <input type="checkbox" name="isFit" id="isFit" checked={info.isFit} onChange={handleInput} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
};
