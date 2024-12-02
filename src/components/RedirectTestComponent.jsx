import { Link } from 'react-router-dom';

const RedirectTestComponent = ({ testType }) => (
    <div className={testType === 'correct' ? 'test-correct' : 'test-error'}>
        <Link to={testType === 'correct' ? '/TestRoute' : '/TestRout'}>
            Redirect Test
        </Link>
    </div>
);

export default RedirectTestComponent;
