import { useNavigate } from "react-router-dom";
import Button from "../../components/neo-brutalism/Button";

export default function Homepage() {

  const navigate = useNavigate();
  
  const navigateToPlay = () => {
    navigate("/dashboard");
  }

  return (
    <div className="relative flex flex-col justify-center items-center h-dvh text-center w-screen bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <div className="h-24"></div>
      <div className="flex flex-col justify-center items-center w-full gap-y-10">
        <div className="text-4xl md:text-7xl font-bold font-monsterrat px-4">
          <span>Welcome to</span>
          <span className="text-mainAccent">{` Typrr`}</span>
        </div>
        <p className="text-lg md:text-2xl px-4"> Practice typing with a friend or anyone from anywhere in the world. </p>
        <Button onClick={navigateToPlay} className='text-lg w-32 justify-center font-monsterrat font-bold bg-main'>
          Play
        </Button>
      </div>
    </div>
  )
}