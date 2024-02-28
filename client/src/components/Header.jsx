import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch } from 'react-icons/fa'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const {currentUser}  = useSelector(state => state.user);
  const imageClick = () => {
    navigate('/profile');
  }
  return (
    <div>
      <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Shelter</span>
            <span className='text-slate-700'>Search</span>
          </h1>
        </Link>
        <form
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          {
            currentUser? 
            (<img className='rounded-full h-7 w-7 object-cover cursor-pointer' src={currentUser.avatar} alt="" onClick={imageClick}/>)
            : (
              <Link to='/sign-in'>
              <li className=' text-slate-700 hover:underline'> Sign in</li>
          </Link>
            )
          }
          
        </ul>
      </div>
    </header>
    </div>
  )
}

export default Header
