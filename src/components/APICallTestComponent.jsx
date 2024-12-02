import { useState } from 'react';

const APICallTestComponent = ({ testType }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const makeAPIcall = () => {
        fetch(testType === 'correct'
            ? 'https://jsonplaceholder.typicode.com/todos/1'
            : 'https://jsonplaceholder.typicode.com/todo/1')
            .then((response) => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(setData)
            .catch(setError);
    };

    return (
        <div className={testType === 'correct' ? 'test-correct' : 'test-error'}>
            <button onClick={makeAPIcall}>
                {testType === 'correct' ? 'Make API Call' : 'Make Broken API Call'}
            </button>
            {error && <p>Error: {error.message}</p>}
            {data && <p>Data: {JSON.stringify(data)}</p>}
        </div>
    );
};

export default APICallTestComponent;
