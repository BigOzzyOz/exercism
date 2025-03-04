//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  studentGrades = {};
  schoolRoster = {};

  /**
   * Return a copy of the internal school roster.
   *
   * @return {Object<number, string[]>} A copy of the school roster.
   */
  roster() {
    const copy = {};
    for (const grade in this.schoolRoster) {
      copy[grade] = [...this.schoolRoster[grade]];
    }
    return copy;
  }

  /**
   * Adds a student to the school roster for the given grade.
   * If the student is already in the specified grade, no changes are made.
   * If the student is currently in a different grade, they are removed from the old grade
   * and added to the new one. The roster for the grade is kept in alphabetical order.
   *
   * @param {string} name - The name of the student to add.
   * @param {number} grade - The grade to add the student to.
   */
  add(name, grade) {
    if (this.studentGrades[name] === grade) return;

    if (this.studentGrades[name]) {
      const oldGrade = this.studentGrades[name];
      const index = this.schoolRoster[oldGrade].indexOf(name);
      this.schoolRoster[oldGrade].splice(index, 1);
    }
    this.schoolRoster[grade] = this.schoolRoster[grade] || [];
    this.schoolRoster[grade].push(name);
    this.schoolRoster[grade].sort();
    this.studentGrades[name] = grade;
  }

  /**
   * Returns a copy of the list of students in the specified grade, sorted alphabetically.
   *
   * @param {number} grade - The grade for which to retrieve the list of students.
   * @return {string[]} A copy of the list of students in the specified grade.
   */
  grade(grade) {
    return this.schoolRoster[grade] ? [...this.schoolRoster[grade]] : [];
  }
}
