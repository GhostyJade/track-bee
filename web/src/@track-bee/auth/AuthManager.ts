import axios from 'axios';

export function login(email: string | null, password: string | null): Promise<any> {
    const jsonData = JSON.stringify({
        email,
        password,
    });

    return axios
        .post('http://127.0.0.1:8192/api/login', jsonData, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(({ data }) => {
            console.log(data);
            return data;
        })
        .catch((error) => console.log(error));
    // return new Promise((resolve, reject) => {
    //     resolve({ defaultUserHome: '/' });
    // });
}
