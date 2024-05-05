
const baseUrl = "http://127.0.0.1:9000"

async function getAll () {
    try {
        const response = await fetch(baseUrl+'/api/subject/all');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

async function getById (id) {
    try {
        const response = await fetch(baseUrl+'/api/subject/'+id);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

async function Login(data) {
    try {
        const response = await fetch(baseUrl+'/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('User registered successfully!');
            return { data: responseData };

        } else {
            console.error('Registration failed:', response.statusText);
            return false

        }
    } catch (error) {
        console.error('Error registering user:', error);
        return false

    }
}

async function Register (data) {
    try {
        const response = await fetch(baseUrl+'/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log('User registered successfully!');
            return true

        } else {
            console.error('Registration failed:', response.statusText);
            return false

        }
    } catch (error) {
        console.error('Error registering user:', error);
        return false

    }
}


async function GetMyNotes () {

    try {
        const response = await fetch(baseUrl + '/api/note/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (!response.ok) {
            const responseData = await response.json();
            console.log('User registered successfully!');
            return { data: responseData };
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return false;
    }

}


export default {
    getAll,
    getById,
    Login,
    Register,
    GetMyNotes
}