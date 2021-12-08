const Manager = require('../lib/Manager')
const manager = new Manager('devon', '007007', 'dg@gmail.com', '007')


test('test to see if the constructor values populated for employee object', () => {
    expect(manager.name).toBe('devon')
    expect(manager.id).toBe('007007')
    expect(manager.email).toBe('dg@gmail.com')
    expect(manager.officNumber).toBe('007')
})

test('test to see if we can pull name from getName() method', () => {
    expect(manager.getName().toBe('devon'))
})

test('test to see if we can pull name from getId() method', () => {
    expect(manager.getId().toBe('007007'))
})

test('test to see if we can pull name from getEmail() method', () => {
    expect(manager.getEmail().toBe('dg@gmail.com'))
})

test('test to see if we can pull name from getRole() method', () => {
    expect(manager.getRole().toBe('Manager'))
})
test('test to see if we can pull name from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber().toBe('007'))
})