import {useEffect, useState} from "react";
import Courses from "../request/courses";

function RecentGrades() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await Courses.GetMyNotes();
                console.log(responseData);
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);

    //TODO: faire la requete a l'api pour recup le tableau
    /*
    const tabData = [
        ["Subject","Teacher","Exercise","Grade"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"],
        ["Python","Ryan Dordain","Boucle while","15/20"]
    ]
     */



    let content;
    if (data === null) {
        content = <div>Loading...</div>;
    } else {

        const dataHead = ["Subject", "Note"]

        const tabHead = dataHead.map((element, index) => (
            <th scope="col" key={index}>{element}</th>
        ));

        const cleanData = data.notes.map(objet => {
            return {
                Subject: objet.Subject.label,
                Note: objet.note
            };
        });

        const tabData = cleanData.map((row, index) => (
            <tr key={index}>
                <td>{row.Subject}</td>
                <td>{row.Note}</td>
            </tr>
        ));

        content = (
            <table className="table">
                <thead>
                <tr>
                    {tabHead}
                </tr>
                </thead>
                <tbody>
                    {tabData}
                </tbody>
            </table>
        );



    }





/*
    const tabBody = tabData.slice(1).map((element, index) => (

        <tr key={index}>
            {
                element.map((element, index) => (
                <td key={index}>{element}</td>
                ))
            }
        </tr>
    ));

 */

    return (
        <div className="d-flex align-items-center" style={{width:"90vw"}}>
            {content}
        </div>
    );
}

export default RecentGrades;