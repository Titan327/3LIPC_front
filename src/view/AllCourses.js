import {useEffect, useState} from "react";

function RecentGrades() {
    //TODO: faire la requete a l'api pour recup l'id du cours et afficher ses infos
    const tabData = [
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"],
        ["Python","https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg","test pour pyhon","1"]
    ]


        const courses = tabData.map((element, index) => (

            <div key={index} className="card" style={{width: "18rem", margin: "15px"}}>
                <img className="card-img-top" src={element[1]} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        ));

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