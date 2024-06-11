import { useNavigate } from 'react-router-dom';
import Button from './neo-brutalism/Button'
import Dropdown from './neo-brutalism/Dropdown';
import { AiFillGithub } from 'react-icons/ai';

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
    <div className="fixed top-0 z-50 flex justify-center items-center w-full bg-white h-24 shadow-2 shadow-bottom4px">
        <div className='flex justify-between items-center max-w-7xl w-full px-8'>
            <div className='flex gap-8'>
              <h1 onClick={handleNaavigate} className="text-4xl md:text-5xl font-bold font-work cursor-pointer">Typrr</h1>
              
            </div>
            
            <div className="hidden sm:flex gap-4">
                <a
                  target="_blank"
                  href="https://github.com/jadejamig/neo-typing"
                  className="flex items-center justify-center rounded-base border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                >
                  <AiFillGithub className="h-6 w-6 m500:h-4 m500:w-4" />
                </a>
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