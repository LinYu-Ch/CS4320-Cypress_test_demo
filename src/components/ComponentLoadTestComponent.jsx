import { useState } from 'react';
import TestComponent from './TestComponent';

const ComponentLoadTestComponent = ({ testType }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const loadComponent = () => setIsLoaded(!isLoaded);

    return (
        <div className={testType === 'correct' ? 'test-correct' : 'test-error'}>
            <button onClick={testType === 'correct' ? loadComponent : undefined}>
                Load Component
            </button>
            {isLoaded && <TestComponent />}
        </div>
    );
};

export default ComponentLoadTestComponent;
