import './styles.css';
import { CMS } from '../../constants/cms';

const Error = () => <h1 className="error">{CMS.error.unknownError}</h1>;

export { Error };
