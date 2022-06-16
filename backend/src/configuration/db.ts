import Knex from 'knex';

const connection = Knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'sample_app'
    }
});


export default connection;