const Employee = require('../lib/Employee')
const employee = new Employee('devon', '007007', 'dg@gmail.com')


test('test to see if the constructor values populated for employee object', () => {
    expect(employee.name).toBe('devon')
    expect(employee.id).toBe('007007')
    expect(employee.name).toBe('dg@gmail.com')
})

test('test to see if we can pull name from getName() method', () => {
    expect(employee.getName().toBe('devon'))
})

test('test to see if we can pull name from getId() method', () => {
    expect(employee.getId().toBe('007007'))
})

test('test to see if we can pull name from getEmail() method', () => {
    expect(employee.getEmail().toBe('dg@gmail.com'))
})

test('test to see if we can pull name from grtRole() method', () => {
    expect(employee.getRole().toBe('Employee'))
})