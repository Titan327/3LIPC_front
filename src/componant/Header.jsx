

function Header() {

    return (

        <header
            className="d-flex flex-wrap align-items-center justify-content-between border-bottom"
            style={{
                height: "10vh",
                marginLeft: "15px"
            }}
        >


            <div className="col-md-8 row px-0">
                <div className="col">
                    <p style={{fontSize: '200%'}}>Notes récentes</p>
                </div>
            </div>

            <div className="col-md-2">
                <button type="button" className="btn btn-outline-primary me-2" style={{margin: "5px"}}>Login</button>
                <button type="button" className="btn btn-primary" style={{margin: "5px"}}>Sign-up</button>
            </div>
        </header>

    );

}

export default Header;