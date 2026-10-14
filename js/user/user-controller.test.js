const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

// verificar la funcion add con un usuario que no esta en la lista
test('add usuario no esta en la lista', () => {
    let user = new User(9999, "Carlos", "carlos@generation.org");
    expect(userController.getUsers()).not.toContain(user);
});

// Verificar la funcion remove con un usuario que no esta en la lista
test('remove usuario no esta en la lista', () => {
    let user1 = new User(1234, "Luis", "luis@generation.org");
    let userInexsistente = new User(9999, "Pedro", "Pedro@generation.org");
    userController.add(user1);
    userController.remove(userInexsistente);
    expect(userController.getUsers()).toContain(user1);
    expect(userController.getUsers()).not.toContain(userInexsistente);
});

// verificar un usuario con correo existente
test("debe devolver el usuario si el correo existe", () => {
    let user = new User(2001, "Laura", "laura@email.com");
    userController.add(user);
    expect(userController.findByEmail("laura@email.com")).toBe(user);
});

// verificar un usuario con un correo que no existe
test("debe devolver undefined si el correo no existe", () => {
    expect(userController.findByEmail("yuli@mail.com")).toBe(undefined);
});


//verificar u usuario por id
test("debe devolver el usuario si el id existe", () => {
    let user = new User(5512, "Juan", "juan@mail.com");
    userController.add(user);
    expect(userController.findById(5512)).toBe(user);
});

// verificar un usuario que no existe por id
test("debe devolver undefined si el id no existe", () => {
    expect(userController.findById(4444)).toBe(undefined);
});





