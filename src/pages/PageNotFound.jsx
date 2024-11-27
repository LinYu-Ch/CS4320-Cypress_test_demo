import { Link } from 'react-router-dom';
const PageNotFound = ()=>{
    return (
        <div>
            <h1>This is the error page</h1>
            <Link to="/">Back to home</Link>
        </div>
    );
}

export default PageNotFound;