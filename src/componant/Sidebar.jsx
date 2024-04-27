

function Sidebar() {

    const currentUrl = window.location.pathname;

    const isActive = (url) => {
        return currentUrl === url ? 'active' : '';
    };

    return (

        <div className="d-flex flex-column flex-shrink-0 bg-light position-fixed" style={{width: '5vw',height: '90vh'}}>

            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <a href="/" className={`nav-link py-3 border-`}
                   aria-current="page" title=""
                   data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">

                    <img src='/logo.svg' alt='Grades' style={{width: '30px'}}/>

                </a>

                <li className="nav-item">

                    <a href="/" className={`nav-link py-3 border-bottom ${isActive('/')}`}
                       aria-current="page" title=""
                       data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">

                        <img src='/grades.svg' alt='Grades' style={{width: '30px'}}/>

                    </a>

                </li>
                <li className="nav-item">

                </li>
                <li>
                    <a href="/courses" className={`nav-link py-3 border-bottom ${isActive('/courses')}`} title=""
                       data-bs-toggle="tooltip"
                       data-bs-placement="right" data-bs-original-title="Dashboard">

                        <img src='/book.svg' alt='Grades' style={{width: '30px'}}/>

                    </a>
                </li>
            </ul>

        </div>

    );

}

export default Sidebar