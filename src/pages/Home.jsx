import { Link } from 'react-router-dom';
import TestComponent from '../components/TestComponent';
import { useEffect, useState } from 'react';


const Home = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // test one logic
    const [counter, setCounter] = useState(0);
    function incrementCounter() {
        let current = counter + 1;
        setCounter(current);
    }

    const [submittedData, setSubmittedData] = useState(null);

    function formSubmit(submit) {
        submit.preventDefault();
        // Use the FormData API to capture form inputs
        const form = submit.target;
        const formData = new FormData(form);

        // Convert FormData to an object
        const formObject = Object.fromEntries(formData.entries());
        setSubmittedData(formObject); // Update the state with form data
    }

    // test five logic
    function makeAPIcall() {
        // Make the API request
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => setError(error));
    };

    return (
        <>
            <header>
                <h1>Hello, this is a cypress testing framework demo, our project is built using vite and react</h1>
            </header>

            <section id='section-1'>
                <h2>test demo 1</h2>
                <p>Button function test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <button onClick={incrementCounter}>increment counter</button>
                        {<p>counter: {counter}</p>}
                    </div>
                    <div className="test-error">

                    </div>
                </div>
            </section>

            <section id='section-2'>
                <h2>test demo 2</h2>
                <p>Form submission test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <form onSubmit={formSubmit}>
                            <label htmlFor="fusername">username:</label><br />
                            <input type="text" id='fusername' name='fusername' /><br />
                            <label htmlFor="fdata">data:</label><br />
                            <input type="text" id='fdata' name='fdata' /><br />
                            <input type="submit" value="Submit" />
                        </form>

                        {submittedData && (<p>
                            name: {submittedData.fusername}<br />
                            data: {submittedData.fdata}</p>)
                        }

                    </div>
                    <div className="test-error">

                    </div>
                </div>
            </section>

            <section id='section-3'>
                <h2>test demo 3</h2>
                <p>Link navigation test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <Link to="/TestRoute">Redirect Test</Link>
                    </div>
                    <div className="test-error">

                    </div>
                </div>
            </section>

            <section id='section-4'>
                <h2>test demo 4</h2>
                <p>Components rendering test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <TestComponent />
                    </div>
                    <div className="test-error">

                    </div>
                </div>
            </section>

            <section id='section-5'>
                <h2>test demo 5</h2>
                <p>REST API call test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <button onClick={makeAPIcall}>Make test API call</button>
                        {error && <p>Error: {error.message}</p>}
                        {data && <p>data: {JSON.stringify(data)}</p>}
                    </div>
                    <div className="test-error">

                    </div>
                </div>
            </section>
        </>

    )
}

export default Home;