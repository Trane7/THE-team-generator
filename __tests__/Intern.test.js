const Intern = require('../lib/Intern')
const intern = new Intern('devon', '007007', 'dg@gmail.com', 'UofM')


test('test to see if the constructor values populated for employee object', () => {
    expect(intern.name).toBe('devon')
    expect(intern.id).toBe('007007')
    expect(intern.email).toBe('dg@gmail.com')
    expect(intern.school).toBe('UofM')
})

test('test to see if we can pull name from getName() method', () => {
    expect(intern.getName().toBe('devon'))
})

test('test to see if we can pull name from getId() method', () => {
    expect(intern.getId().toBe('007007'))
})

test('test to see if we can pull name from getEmail() method', () => {
    expect(intern.getEmail().toBe('dg@gmail.com'))
})

test('test to see if we can pull name from getRole() method', () => {
    expect(intern.getRole().toBe('Intern'))
})
test('test to see if we can pull name from getSchool() method', () => {
    expect(intern.getSchool().toBe('UofM'))
})