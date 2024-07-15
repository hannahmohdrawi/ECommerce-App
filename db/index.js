import pg from 'pg';
const {Client} = pg;
const client = new Client(); 

export const query = (text, params, callback) => {
    return client.query(text, params, callback)
}