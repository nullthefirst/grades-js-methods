// Initialize an array of grades.

const primaryGrades = [92, 85, 88, 95, 88, 72, 65, 90, 83, 75];

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

// Use filter to create an array of passing grades (above 70).

const passingGrades = gradesCorrected.filter((grade) => grade > 70);

// Use reduce to calculate the total sum of grades.

const gradesTotal = gradesCorrected.reduce((totalGrades, grade) => totalGrades + grade);

// Use find to locate the first grade that is exactly 88.

const grade88 = gradesFull.find((grade) => grade === 88);

// Use findIndex to find the index of the first grade that is below 70.

const gradeFirstUnder70 = gradesFull.findIndex((grade) => grade < 70);

// Use some to check if any grade is below 60.

const gradesAnyBelow60 = gradesCorrected.some((grade) => grade < 60);

// Use every to check if all grades are above 50.

const allGradesAbove50 = gradesCorrected.every((grade) => grade > 50);
