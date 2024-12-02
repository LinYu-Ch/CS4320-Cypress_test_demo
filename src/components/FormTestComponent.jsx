import { useState } from 'react';

const FormTestComponent = ({ testType }) => {
    const [formData, setFormData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(testType === 'correct' ? form : new FormData());
        setFormData(Object.fromEntries(data.entries()));
    };

    return (
        <div className={testType === 'correct' ? 'test-correct' : 'test-error'}>
            <form onSubmit={handleSubmit}>
                <label htmlFor={`${testType}-username`}>Username:</label>
                <input id={`${testType}-username`} name="username" type="text" />
                <label htmlFor={`${testType}-data`}>Data:</label>
                <input id={`${testType}-data`} name="data" type="text" />
                <button type="submit">Submit</button>
            </form>
            {formData && (
                <p>
                    Name: {formData.username} <br />
                    Data: {formData.data}
                </p>
            )}
        </div>
    );
};

export default FormTestComponent;
