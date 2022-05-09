import NavibarDesktop from './navibar/NavibarDesktop';
import NavibarMobile from './navibar/NavibarMobile'

export default function Navibar() {
    return (
        <div className="menu-cima">
            <NavibarDesktop />
            <NavibarMobile />
        </div>
    );
}