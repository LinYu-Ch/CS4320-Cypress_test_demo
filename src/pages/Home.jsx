import { Link } from 'react-router-dom';
import TestComponent from '../components/TestComponent';
import { useEffect, useState } from 'react';

const Home = () => {
    // Correct logic
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);

    // Error-prone logic
    const [failCounter, setFailCounter] = useState(0);
    const decrementCounter = () => {
        if (failCounter > 0) { // Incorrect: should allow negative counters
            setFailCounter(failCounter - 1);
        }
    };

    // Form submission logic
    const [submittedData, setSubmittedData] = useState(null);
    const formSubmit = (submit) => {
        submit.preventDefault();
        const form = submit.target;
        const formData = new FormData(form);
        setSubmittedData(Object.fromEntries(formData.entries()));
    };

    // Broken form logic
    const [failSubmittedData, setFailSubmittedData] = useState(null);
    const formSubmitFail = (submit) => {
        submit.preventDefault();
        const form = submit.target;
        const formData = new FormData();
        setFailSubmittedData(Object.fromEntries(formData.entries()));
    };

    // Component rendering logic
    const [isLoaded, setIsLoaded] = useState(false);
    const loadComponent = () => {
        if (!isLoaded) {
            setIsLoaded(true);
            return;
        }
        setIsLoaded(!isLoaded); // Incorrectly toggles state even when loaded
    };

    // API call logic
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const makeAPIcall = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(setData)
            .catch(setError);
    };

    // Broken API call logic
    const [failData, setFailData] = useState(null);
    const [failError, setFailError] = useState(null);
    const makeBadAPIcall = () => {
        fetch("https://jsonplaceholder.typicode.com/todo/1")
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then(setFailData)
            .catch(setFailError);
    };

    useEffect(() => {
        const correctCases = document.querySelectorAll(".test-correct");
        const errorCases = document.querySelectorAll(".test-error");

        correctCases.forEach((testCase, index) => {
            testCase.setAttribute("data-cytest", `correct${index + 1}`);
        });

        errorCases.forEach((testCase, index) => {
            testCase.setAttribute("data-cytest", `error${index + 1}`);
        });
    }, []);

    return (
        <>
            <header>
                <h1>Hello, this is a Cypress testing framework demo built using Vite and React</h1>
            </header>

            <section id="section-1">
                <h2>Test Demo 1</h2>
                <p>Button Function Test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <button onClick={incrementCounter}>Increment Counter</button>
                        <p>Counter: {counter}</p>
                    </div>
                    <div className="test-error">
                        <button onClick={decrementCounter}>Decrement Counter</button>
                        <p>Counter: {failCounter}</p>
                    </div>
                </div>
            </section>

            <section id="section-2">
                <h2>Test Demo 2</h2>
                <p>Form Submission Test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <form onSubmit={formSubmit}>
                            <label htmlFor="fusername">Username:</label><br />
                            <input type="text" id="fusername" name="fusername" /><br />
                            <label htmlFor="fdata">Data:</label><br />
                            <input type="text" id="fdata" name="fdata" /><br />
                            <input type="submit" value="Submit" />
                        </form>
                        {submittedData && (
                            <p>
                                Name: {submittedData.fusername}<br />
                                Data: {submittedData.fdata}
                            </p>
                        )}
                    </div>
                    <div className="test-error">
                        <form onSubmit={formSubmitFail}>
                            <label htmlFor="ffusername">Username:</label><br />
                            <input type="text" id="ffusername" name="ffusername" /><br />
                            <label htmlFor="ffdata">Data:</label><br />
                            <input type="text" id="ffdata" name="ffdata" /><br />
                            <input type="submit" value="Submit" />
                        </form>
                        {failSubmittedData && (
                            <p>
                                Name: {failSubmittedData.ffusername}<br />
                                Data: {failSubmittedData.ffdata}
                            </p>
                        )}
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
                        <Link to="/TestRout">Redirect Test</Link>
                    </div>
                </div>
            </section>

            <section id='section-4'>
                <h2>test demo 4</h2>
                <p>Components rendering test</p>
                <div className="test_container">
                    <div className="test-correct">
                        <button onClick={loadComponent}>Load Component</button>
                        {isLoaded && <TestComponent />}
                    </div>
                    <div className="test-error">
                        <button>Load Component</button>
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
                        <button onClick={makeBadAPIcall}>Make test API call</button>
                        {failError && <p>Error: {failError.message}</p>}
                        {failData && <p>data: {JSON.stringify(failData)}</p>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
