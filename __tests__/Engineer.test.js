const Engineer = require('../lib/Engineer')

test('testing Engineer object', () => {
    const engineer = new Engineer ('steve', '6', 'stevefreeman@gmail.com', 'steve909')
    expect(engineer.name).toBe('steve')
    expect(engineer.id).toBe('6')
    expect(engineer.email).toBe('stevefreeman@gmail.com')
    expect(engineer.github).toBe('steve909')
})

test('getting engineer github', () => {
    const engineer = new Engineer ('steve', '6', 'stevefreeman@gmail.com', 'steve909')
    expect(engineer.getGitHub()).toBe('steve909')
})

test('getting engineer', () => {
    const engineer = new Engineer ('steve', '6', 'stevefreeman@gmail.com', 'steve909')
    expect(engineer.getRole()).toMatchObject(engineer)
})