const Container = ({ children }) => {
    return (
        <div className="flex flex-col bg-neutral-50 rounded-md w-3/4 sm:w-1/2 h-3/4 p-6 overflow-hidden">
            {children}
        </div>
    );
};

export default Container;
