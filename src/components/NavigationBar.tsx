import { useNavigate } from 'react-router-dom';
import Button from './neo-brutalism/Button'
import Dropdown from './neo-brutalism/Dropdown';

export default function NavigationBar() {
  const navigate = useNavigate();
  
  const handleNaavigate = () => {
    navigate("/");
  }

  const items = [
    {
      name: 'Home',
      link: '/dashboard',
    },
    {
      name: 'Login',
      link: '/dashboard',
    },
    {
      name: 'Signup',
      link: '/dashboard',
    },
  ]
  
  return (
    <div className="fixed top-0 z-50 flex justify-center items-center w-full bg-white h-24 outline outline-black">
        <div className='flex justify-between items-center max-w-7xl w-full px-8'>
            <div className='flex gap-8'>
              <h1 onClick={handleNaavigate} className="text-4xl md:text-5xl font-bold font-work cursor-pointer">Typrr</h1>
              
            </div>
            <div className="hidden sm:flex gap-4">
                <Button className="text-xs sm:text-base" onClick={() => navigate('/dashboard')}>Home</Button>
                <Button className="text-xs sm:text-base">Login</Button>
                <Button className="text-xs sm:text-base">Signup</Button>
            </div>
            <div className='flex sm:hidden'>
              <Dropdown items={items} text="Menu" />
            </div>
        </div>
    </div>
  )
}