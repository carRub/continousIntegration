test('Verify that jest is actually working', () => {
    // throw new Error("not passed");

    //*
    //toBe, toEqual, .not.toBe, .toBeNull. toBeDefined, .not.toBeDefined, .toBeTruthy, .toBeFalsy, etc

    // expect(4).toBe(3); //error
    // expect(4).toBe(4); //passed -> === (compara referencia de memoria)
    // expect({}).toBe({}); //-> == (compara valores únicamente, sin considerar la referencia de memoria)
    expect({}).toEqual({}) //passed
});

function lengthOf(value) {
    return value.length;
}

test('Len works', () => {
    let testD = [1, 3, "a"];
    expect(lengthOf(testD)).toBeGreaterThanOrEqual(0);
    expect(lengthOf(testD)).toBe(3);
    expect(lengthOf(testD)).toBeDefined();
})


describe('lengthOf works', () =>{
    let testD = [1, 3, "a"];
    //faltA
    test('is positive', () =>{
        expect(lengthOf(testD)).toBeGreaterThanOrEqual(0);
    });

    test('is what we expected', () =>{
        expect(lengthOf(testD)).toBe(3);
    });
})

test('asynchronus code', (done) => { //we need that done argument or to be async and await
    setTimeout(() => {
        let res = "hi";
        // expect(res).toBe("hello"); //not passed
        // expect(res).toBe("hi");
        expect(res).toBe("hi");
        done();
    }, 2000)
})

