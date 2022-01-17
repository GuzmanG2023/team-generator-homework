const Manager = require('../lib/Manager')

test('testing manager object', () => {
    const manager = new Manager ('steve', '6', 'stevefreeman@gmail.com', '909')
    expect(manager.name).toBe('steve')
    expect(manager.id).toBe('6')
    expect(manager.email).toBe('stevefreeman@gmail.com')
    expect(manager.officeNumber).toBe('909')
})

test('getting manager name', () => {
    const manager = new Manager ('steve', '6', 'stevefreeman@gmail.com', '909')
    expect(manager.getOfficeNumber()).toBe('909')
})

test('getting manager', () => {
    const manager = new Manager ('steve', '6', 'stevefreeman@gmail.com', '909')
    expect(manager.getRole()).toMatchObject(manager)
})