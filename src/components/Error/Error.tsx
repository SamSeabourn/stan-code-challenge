import './styles.css';
import { CMS } from '../../constants/cms';

const Error = () => <h1 className="error-message">{CMS.error.unknownError}</h1>;

export { Error };
