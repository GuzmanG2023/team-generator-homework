const Intern = require('../lib/Intern')

test('testing intern object', () => {
    const intern = new Intern ('steve', '6', 'stevefreeman@gmail.com', 'UofA')
    expect(intern.name).toBe('steve')
    expect(intern.id).toBe('6')
    expect(intern.email).toBe('stevefreeman@gmail.com')
    expect(intern.school).toBe('UofA')
})

test('getting intern school', () => {
    const intern = new Intern ('steve', '6', 'stevefreeman@gmail.com', 'UofA')
    expect(intern.getSchool()).toBe('UofA')
})

test('getting intern', () => {
    const intern = new Intern ('steve', '6', 'stevefreeman@gmail.com', 'UofA')
    expect(intern.getRole()).toMatchObject(intern)
})