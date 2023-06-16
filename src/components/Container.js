const Container = ({ children }) => {
    return (
        <div className="flex flex-col bg-neutral-50 rounded-md w-3/4 h-4/5 sm:w-1/2 sm:h-3/4 p-6 overflow-hidden">
            {children}
        </div>
    );
};

export default Container;
