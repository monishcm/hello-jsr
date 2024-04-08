// calculator.ts
/**
 * 
 * @param a first number
 * @param b second number
 * @returns addition of a and b
 */
export function add(a: number, b: number): number {
    return a + b;
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns difference of a and b
 */
export function subtract(a: number, b: number): number {
    return a - b;
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns product of a and b
 */
export function multiply(a: number, b: number): number {
    return a * b;
}

/**
 * 
 * @param a first number
 * @param b second number
 * @returns division of a and b
 */
export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}