import { useState } from "react";


const SurveyForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        ageGroup: "",
        interesets: [],
        feedback: "",
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        if(type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                interesets:checked ? [...prevData.interesets, value] : prevData.interesets.filter((interest) => interest !== value)
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }))
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data: ", formData);
        alert("Thanks you for your feedback");
    }

  return (
    <>
     <div className="survey-form">
        <h1>Survey Form</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text"
                autoComplete='off'
                name='name'
                value={formData.name}
                placeholder='Enter Your name'
                onChange={handleChange}
                required
                />
            </label>
            <label>
                Email:
                <input type="email"
                    autoComplete='off'
                    name='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <fieldset>
                <legend>Age Group:</legend>
                <lable>
                    <input type="radio"
                        name='ageGroup'
                        value="18-25"
                        onChange={handleChange}
                    />
                    18-25
                </lable>
                <lable>
                    <input type="radio"
                        name='ageGroup'
                        value="26-35"
                        onChange={handleChange}
                    />
                    25-35
                </lable>
                <lable>
                    <input type="radio"
                        name='ageGroup'
                        value="36+"
                        onChange={handleChange}
                    />
                    36+
                </lable>
            </fieldset>
            <fieldset>
                <legend>Interests:</legend>
                <label>
                    <input type="checkbox"
                        name='interests'
                        value="Technology"
                        onChange={handleChange}
                    />
                    Technology
                </label>
                <label>
                    <input type="checkbox"
                        name='interests'
                        value="sport"
                        onChange={handleChange}
                    />
                    Sport
                </label>
                <label>
                    <input type="checkbox"
                        name='interests'
                        value="Music"
                        onChange={handleChange}
                    />
                    Music
                </label>
            </fieldset>

            <label>
                Feedback:
                <textarea name="feedback"
                placeholder='Write your feedback here'
                rows="5"
                value={formData.feedback}
                onChange={handleChange}></textarea>
            </label>

            <button type='submit'>Submit</button>
        </form>
        </div> 
    </>
  )
}

export default SurveyForm;
