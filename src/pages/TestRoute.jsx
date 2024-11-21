import { Link } from 'react-router-dom';
const TestRoute = ()=>{
    return (
        <div>
            <h1>This is a react test route</h1>
            <Link to="/">Back to home</Link>
        </div>
    );
}

export default TestRoute;