import {useEffect, useState} from "react";
import Courses from "../request/courses";

function RecentGrades() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await Courses.getAll();
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);


    let courses;
    if (data === null) {
        courses = <div>Loading...</div>;
    } else {
        courses = data["subjects"].map((element, index) => (
            <div key={index} className="card" style={{width: "18rem", margin: "15px"}}>
                <img className="card-img-top" src={element["imgLink"]} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title">{element["label"]}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's content.</p>
                    <a href={"exercise/"+element["id"]} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        ));
    }



    console.log(courses);

    return (
        <div className="d-flex align-items-center" style={{width: "90vw"}}>
            <div className="row" style={{margin: "10px"}}>

                {courses}

            </div>
        </div>
    );
}

export default RecentGrades;