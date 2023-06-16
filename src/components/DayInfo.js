import moment from "moment";

const DayInfo = () => {
    return (
        <div className="flex flex-col items-center lg:items-start gap-1">
            <div className="flex items-center gap-2">
                <p className="text-5xl font-semibold">
                    {moment().format("DD")}
                </p>
                <div className="text-sm">
                    <p className="font-medium">{moment().format("dddd")}</p>
                    <p>{moment().format("MMM YYYY")}</p>
                </div>
            </div>
            <p className="text-[10px] text-gray-400">
                Where there's a will, there's a way
            </p>
        </div>
    );
};

export default DayInfo;
