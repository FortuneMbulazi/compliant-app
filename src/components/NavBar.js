import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav>
        <div className='Logo'>
          <Link to='/'><h1>Jokes App</h1></Link>
        </div>

        <div className='List-items'>
          <li>
            <Link to='/Categories'>Jokes Categories</Link>
          </li>

          <li>
            <Link to='/PeopleList'>List of People</Link>
          </li>

          <li>
            <Link to='/Search'>Search</Link>
          </li>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
