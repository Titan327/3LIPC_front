import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function TokenIsValid() {
    const history = useHistory();

    useEffect(() => {

        const jwtToken = localStorage.getItem('jwtToken');

        if (jwtToken) {

            const isTokenValid = validateToken(jwtToken);

            if (!isTokenValid) {
                redirectToLoginPage();
            }
        } else {
            redirectToLoginPage();
        }
    });

    const validateToken = (token) => {
        // TODO: faire la requete au serv pour savoir si le token est ok
        return true;
    };

    const redirectToLoginPage = () => {
        history.push('/login');
    };

}

export default TokenIsValid;
