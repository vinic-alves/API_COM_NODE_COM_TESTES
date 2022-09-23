test('Devo conhecer as principais assertivas do Jest', ()=>{
    let number = null;
    expect(number).toBeNull(); //numero eh null logo o teste passou

    number = 10;

    let numeroNovo = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(numeroNovo);

    expect(number).toEqual(10);

    expect(number).toBeGreaterThan(5); 
    expect(number).toBeLessThan(100); 

})

// testando objetos

test('Devo saber trabalhar com objetos', ()=> {
    const obj = { name: 'John', mail:'john@email.com'}
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'John');
    expect(obj.name).toBe('John');

    const obj2 = { name: 'John', mail:'john@email.com'}
    expect(obj2).toEqual(obj)
});