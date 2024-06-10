import { Outlet, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import NavigationBar from '../../components/NavigationBar';
import Dashboard from './Dashboard';
import SoloGame from './SoloGame';
import MultiplayerGame from './MultiplayerGame';


function Layout() {
    return (
        <div className="w-dvw flex flex-col justify-center items-center px-8 bg-bg">
            <NavigationBar />
            <div className="flex flex-col justify-center items-center w-full max-w-md lg:max-w-7xl">
                <Outlet />
            </div>
        </div>
    );
}

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/play/solo" element={<SoloGame />} />
                <Route path="/play/multiplayer" element={<MultiplayerGame />} />
            </Route>
        </Routes>
    );
}

