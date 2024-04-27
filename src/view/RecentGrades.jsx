
function RecentGrades() {
    //TODO: faire la requete a l'api pour recup le tableau
    const tabData = [
        ["Subject","Teacher","Exercise","Grade"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"]
    ]

    const tabHead = tabData[0].map((element, index) => (
        <th scope="col" key={index}>{element}</th>
    ));

    const tabBody = tabData.slice(1).map((element, index) => (

        <tr key={index}>
            {
                element.map((element, index) => (
                <td key={index}>{element}</td>
                ))
            }
        </tr>
    ));

    return (
        <div className="d-flex align-items-center" style={{width:"90vw"}}>
            <table className="table">
                <thead>
                    <tr>
                        {tabHead}
                    </tr>
                </thead>
                <tbody>
                    {tabBody}
                </tbody>
            </table>
        </div>
    );
}

export default RecentGrades;