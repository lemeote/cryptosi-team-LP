import MainCarousel from "./carousel";
import MainMission from "./mission";
const HomePage = () => {
    return (
        <div className="flex flex-col gap-10 px-10 m-6">
            <MainCarousel />
            <MainMission />
        </div>
    )
}

export default HomePage;