import Avatar from "../neo-brutalism/Avatar"
import Card from "../neo-brutalism/Card"

const UserHeader = () => {
  return (
    <Card className='w-full gap-4 bg-white max-w-4xl bg-[radial-gradient(#cacbce_1px,transparent_1px)] [background-size:16px_16px]'>
        <Avatar imageUrl="https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?crop=0.668xw:1.00xh;0.0726xw,0&resize=64:*" />
        <div className="flex flex-col ">
            <p className="font-heading text-lg font-monsterrat">Guest user</p>
            <p className="font-base text-sm">No title</p>
        </div>
    </Card>
  )
}

export default UserHeader