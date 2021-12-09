const Engineer = require('../lib/Engineer')
const engineer = new Engineer('devon', '007007', 'dg@gmail.com', 'Trane7')


test('test to see if the constructor values populated for employee object', () => {
    expect(engineer.name).toBe('devon')
    expect(engineer.id).toBe('007007')
    expect(engineer.email).toBe('dg@gmail.com')
    expect(engineer.githubUserName).toBe('Trane7')
})

test('test to see if we can pull name from getName() method', () => {
    expect(engineer.getName()).toBe('devon')
})

test('test to see if we can pull name from getId() method', () => {
    expect(engineer.getId()).toBe('007007')
})

test('test to see if we can pull name from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('dg@gmail.com')
})

test('test to see if we can pull name from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer')
})
test('test to see if we can pull name from getOfficeNumber() method', () => {
    expect(engineer.getGithub()).toBe('Trane7')
})