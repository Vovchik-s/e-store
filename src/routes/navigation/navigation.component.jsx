import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/logo-ai.svg';

import { UserContext } from '../../context/user.context';

// Fragment is used to wrap multiple elements without adding a div

// Link cmponent create a link to the path specified place in the 'to' prop. In the browser replaced by <a> tag.

// ReactComponent creates React component that renders an SVG, rather than its filename.

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async() => {
        const resp = await signOutUser();
        setCurrentUser(null);
    }

    // console.log(currentUser)
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>)
                            : (<Link className='nav-link' to='/auth'>SIGN IN</Link>)
                    }
                </div>

            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;