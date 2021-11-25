const axios = require("axios");

beforeEach(() => initDatabase());
afterEach(() => closeDatabase());

beforeAll(() => initProcess());
afterAll(() => closeProcess());

const initDatabase = () => console.log('Database Initialized');
const closeDatabase = () => console.log('Database Closed');

const initProcess = () => console.log('Process Initialized');
const closeProcess = () => console.log('Process Closed');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jim', () => {
        const user = 'Jim';
        expect(user).toBe('Jim');
    });

    test('User is Jan', () => {
        const user = 'Jan';
        expect(user).toBe('Jan');
    });
});

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Jim'};
        user['lastName'] = 'Ezesinachi';
        return user;
    },
    fetchUser1: () => 
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error'),
    fetchUser2: () => 
        axios
            .get('https://jsonplaceholder.typicode.com/users/2')
            .then(res => res.data)
            .catch(err => 'error')
}

module.exports = functions;