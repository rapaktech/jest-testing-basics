const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});


// not toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});


// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});


// toEqual
test('User should be Jim Ezesinachi object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Jim', lastName: 'Ezesinachi' 
    });
});


// toBeLessThan
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});


// toBeLessThanOrEqual
test('Should be less than or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});


// Regex match, toMatch
test('There is no `i` in team', () => {
    expect('team').not.toMatch(/i/i);
});


// Array toContain
test('Admin should be in usernames', () => {
    const usernames = ['John', 'Karen', 'Admin'];
    expect(usernames).toContain('Admin');
});


// Working with async data - Using Promises
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser1().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

// Working with async data - using Async/Await
test('User fetched name should be Ervin Howell', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser2();
    expect(data.name).toEqual('Ervin Howell');
});

