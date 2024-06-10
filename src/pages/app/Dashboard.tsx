import UserHeader from "../../components/dashboard/UserHeader"
import Card from "../../components/neo-brutalism/Card"
import Dropdown from "../../components/neo-brutalism/Dropdown"

const Dashboard = () => {
    const items = [
    {
        name: 'Solo',
        link: '/play/solo',
    },
    {
        name: 'Multiplayer',
        link: '/play/multiplayer',
    }
    ]
  return (
    <div className="w-full flex flex-col items-center justify-center py-14 mt-24 gap-14">
        <UserHeader />
        <div className="w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                <div className="flex flex-col lg:col-span-2 gap-4 w-full h-[500px]">
                    <div className="row-span-1">
                        <Dropdown items={items} text="Play here" />
                    </div>
                    <Card className="h-full bg-white p-0">
                        <div className="flex flex-col justify-between h-full w-full">
                            <div className="flex justify-center items-center py-3 bg-main text-base font-base shadow-bottom">
                                Recent matches
                            </div>
                            <div className="h-full bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px]">
                                
                            </div>
                        </div>
                    </Card>
                </div>
                <Card className="lg:col-span-2 bg-white h-[500px] p-0">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div className="flex justify-center items-center py-3 bg-main text-base font-base shadow-bottom">
                            Global chat
                        </div>
                        <div className="h-full bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px]">
                            
                        </div>
                    </div>
                </Card>
                <Card className="lg:col-span-3 bg-white h-[500px] p-0">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div className="flex justify-center items-center py-3 bg-main text-base font-base shadow-bottom">
                            Leaderboard
                        </div>
                        <div className="h-full bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:30px_30px]">
                            
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        {/* <footer className="bg-white w-full flex flex-col items-center justify-center gap-4 py-4">
            Footer
        </footer> */}
    </div>
  )
}

export default Dashboard