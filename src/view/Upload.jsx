import {useEffect, useState} from "react";
import Courses from "../request/courses";
import {useParams} from "react-router-dom";


function Upload(){

    const [data, setData] = useState(null);
    const { exerciseId } = useParams();
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await Courses.getById(exerciseId);
                setData(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();

    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);


            const response = await fetch('http://192.168.83.102:9000/api/subject/exercise/'+exerciseId, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log('File uploaded successfully.');
            } else {
                console.error('Failed to upload file.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    let detail;
    if (data !== null){
        const exo = data["subjects"]
        detail = (
            <div className="d-flex flex-column align-items-center">
                <img src={exo["imgLink"]} alt="Exercise" style={{width: "40vw"}}/>
                <h1>{exo["label"]}</h1>
                <input type="file" className="form-control" id="customFile" onChange={handleFileChange}/>
                <button onClick={handleSubmit}>Upload</button>
            </div>
        );
    } else {
        detail = (
            <div>
                <p>
                    Loading ...
                </p>
            </div>
        )

    }

    return (
        <div className="d-flex align-items-center" style={{width: "90vw"}}>
            <div className="row" style={{margin: "10px"}}>
                {detail}
            </div>
        </div>
    );
}


export default Upload;