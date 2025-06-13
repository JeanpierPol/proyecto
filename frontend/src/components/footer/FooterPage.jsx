const FooterPage = ({ contentStart, contentCenter, contentEnd }) => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">

                <div className="col-md-4 d-flex justify-content-start align-items-center">
                    {contentStart}
                </div>

                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    {contentCenter}
                </div>

                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    {contentEnd}
                </div>
            </footer>
        </div>
    );
};

export default FooterPage;
