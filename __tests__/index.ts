const add = (a, b) => {
    return a + b;
};

test('should return the sum of 1 + 1', () => {
    const num1 = 1;
    const num2 = 1;

    
    const result = add(num1, num2);

    expect(result).toBe(2);
});