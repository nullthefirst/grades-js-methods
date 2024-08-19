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

// Use concat to merge two arrays of grades.

const secondaryGrades = [66, 64, 91, 64, 85, 99, 67, 90, 68, 67];
const gradesFull = primaryGrades.concat(secondaryGrades);

// Use join to create a string from the array of grades, separated by commas.

const gradesString = gradesFull.join(', ');

// Use reverse to reverse the order of grades in the array.

secondaryGrades.reverse();

// Use sort to sort the grades in ascending order.

primaryGrades.sort((a, b) => a - b);

// Use forEach to print each grade.

gradesFull.forEach((grade) => {
  console.log(`This grade is worth ${grade} points.`);
});

// Use map to create a new array of grades, each increased by 5 points.

const gradesCorrected = gradesFull.map((grade) => grade + 5);

console.log(gradesFull, gradesCorrected);
