import NavBarItem from "./NavBarItem";


const NavBar = () => {
    return (
        <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
            <NavBarItem title={"Trending"} param={"fetchTrending"} />
            <NavBarItem title={"Top Rated"} param={"fetchTopRated"} />
        </div>
    );
}

export default NavBar;
