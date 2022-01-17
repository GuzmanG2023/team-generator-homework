const Employee = require ('../lib/Employee')



test('testing employee object', () => {
    const employee = new Employee ('steve', '6', 'stevefreeman@gmail.com')
    expect(employee.name).toBe('steve')
    expect(employee.id).toBe('6')
    expect(employee.email).toBe('stevefreeman@gmail.com')
})

test('getting employee name', () => {
    const employee = new Employee ('steve', '6', 'stevefreeman@gmail.com')
    expect(employee.getName()).toBe('steve')
})

test('getting employee id', () => {
    const employee = new Employee ('steve', '6', 'stevefreeman@gmail.com')
    expect(employee.getId()).toBe('6')
})

test('getting employee email', () => {
    const employee = new Employee ('steve', '6', 'stevefreeman@gmail.com')
    expect(employee.getEmail()).toBe('stevefreeman@gmail.com')
})

test('getting employee', () => {
    const employee = new Employee ('steve', '6', 'stevefreeman@gmail.com')
    expect(employee.getRole()).toMatchObject(employee)
})