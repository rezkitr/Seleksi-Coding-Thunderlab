import DayInfo from "./DayInfo";
import AddTaskInput from "./AddTaskInput";

const Header = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 border-b border-solid border-gray-400 pb-5">
            <DayInfo />
            <AddTaskInput />
        </div>
    );
};
export default Header;
