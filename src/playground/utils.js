console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;
// export default subtract;
// instead of the above two lines, can do:
export default (a, b) => a - b;

// exports are default exports and named exports
// This is not an object, references to things to export
// For named exports, the name does matter
// can only have 0 or one default exports
// naming not important on import for default exports
// export { square, add, subtract as default };