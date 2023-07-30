function add(a : number, b : number) {
    return a + b;
}

// Write the test using Jest
test('should return the sum of 1 + 1', () => {
    // Arrange
    const num1 = 1;
    const num2 = 1;

    // Act
    const result = add(num1, num2);

    // Assert
    expect(result).toBe(2);
});