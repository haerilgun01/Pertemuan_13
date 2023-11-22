import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DataNavbar from '../../utils/constants/DataNavbar'

const Navbar=() => {
    const data = DataNavbar
  return (
    <NavbarContainer>
        <NavbarStyle>
            <div>
            <h1 className="navbar__brand">HaeRil_HaeRil</h1>
            </div>
            <div>
                <ul className="navbar__list">
                    {
                        data.map(
                            function(item){
                                return(
                                    <li className='navbar__item'>
                                        <Link className='navbar__title' to={item.url}>{item.title}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
        </NavbarStyle>
    </NavbarContainer>
  )
}

const NavbarStyle = styled.nav`
    display: flex;
    flex-direction: column;

.navbar__brand {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    margin: 0 auto;
}

.navbar__list{
    text-align: center;
    display: flex;
    flex-direction: column;
    list-style: none;
    cursor: pointer;
}

.navbar__title {
    color: white;
    text-decoration: none;
}

@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .navbar__brand {
        margin: 0 auto;
    }

    .navbar__list {
        flex-direction: row;
    }

    .navbar__item {
        margin: 0 1rem;
        padding: 0.8rem;
        border-radius: 10px;
        background:  radial-gradient(circle, rgba(43,43,214,0.7517401392111369) 0%, rgba(157,176,193,1) 0%);
    }
}
`

const NavbarContainer = styled.div`
    background: radial-gradient(circle, rgba(43,43,214,0.7517401392111369) 0%, rgba(28,57,83,1) 0%);
    padding: 1rem;
    color: #fff;
`

export default Navbar
