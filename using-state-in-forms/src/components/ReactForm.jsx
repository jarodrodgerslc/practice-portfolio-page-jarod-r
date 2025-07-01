import { useState } from "react";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (<div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>User Form</h1>
        <form>
            <label>
                Name:
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Feedback:
                <textarea
                    id="feedback"
                    type="text"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit"></input>
        </form>
        <h2>Preview</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Feedback: {formData.feedback}</p>
        <p>Character Counter: {formData.feedback.length}</p>
    </div>

    );

}

export default UserForm