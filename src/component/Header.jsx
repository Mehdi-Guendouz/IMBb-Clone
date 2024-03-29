import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
    return (
        <div className='flex justify-between max-w-6xl sm:mx-auto mx-2 items-center py-6'>
            <div className="flex">
                <MenuItem title={"HOME"} address={"/"} Icon={AiFillHome} />
                <MenuItem title={"ABOUT"} address={"/about"} Icon={BsFillInfoCircleFill} />
            </div>
            <div className="flex items-center space-x-5 ">
                <DarkModeSwitch />
                <Link href={"/"}>
                    <h2 className='text-2xl'>
                        <span className='font-bold bg-amber-500 px-2 py-1 rounded-lg mr-1'>IMDG</span>
                        <span className='text-xl hidden sm:inline'>Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
}

export default Header;
