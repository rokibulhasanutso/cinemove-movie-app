const ContentWrapper = ({children}) => {
    return (
        <div className="container max-w-7xl mx-auto px-5">
            {children}
        </div>
    );
};

export default ContentWrapper;