import User from "./classes.js"

const mskanneh = new User(67,"Mohammed Seyeh Kanneh","mskanneh@gmail.com","msk$U((eed","msk$U((eed");


console.log(mskanneh.getInfo());

mskanneh.enrollCourse("React Fundamental");

mskanneh.enrollCourse("Next JS Fundamental");


console.log(mskanneh.getCourseList());
console.log(mskanneh.courseList);


let courses = mskanneh.getCourseList();

courses.forEach(e => console.log(e));
console.log(`Hello Mohammed, You are enrolled in ${courses.length} courses`)