import { useState } from 'react';

const ButtonTestComponent = ({ testType }) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => setCounter(counter + 1);
    const decrementCounter = () => {
        if (counter > 0) { // Incorrect logic
            setCounter(counter - 1);
        }
    };

    return (
        <div className={testType === 'correct' ? 'test-correct' : 'test-error'}>
            <button onClick={testType === 'correct' ? incrementCounter : decrementCounter}>
                {testType === 'correct' ? 'Increment Counter' : 'Decrement Counter'}
            </button>
            <p>Counter: {counter}</p>
        </div>
    );
};

export default ButtonTestComponent;
