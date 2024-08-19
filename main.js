// Initialize an array of grades.

const primaryGrades = [92, 85, 78, 95, 88, 72, 65, 90, 83, 75];

// Use push to add a grade to the end of the array.

primaryGrades.push(73);

// Use pop to remove the last grade from the array.

primaryGrades.pop();

// Use unshift to add a grade to the beginning of the array.

primaryGrades.unshift(24);

// Use shift to remove the first grade from the array.

primaryGrades.shift();

// Use splice to insert and remove elements at specific positions.

primaryGrades.splice(4, 2);

// Use slice to create a new array containing a portion of the original array.

const revampedGrades = [83, 20, ...primaryGrades];
