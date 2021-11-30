import { Link } from 'react-router-dom';
import './Header.css';

export default function Header({name, ...text}) {
    return (
        <div className="header">
            <div className="name-part">
                <h2>{name}</h2>
                <p>A Full stack developer with 6 years Experience
                    in Java Back End and Front End Development.
                </p>
            </div>
            <Link to='/'>
                <div className="general-item">{text.one}</div>
            </Link>
            <Link to='/profile'>
                <div className="general-item">{text.two}</div>
            </Link>
            

        </div>
    )
}
