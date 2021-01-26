var course = new Object();

//course.title = "JavaScript";
//course.instructor = "Morten";
//course.level = 1;
//course.published = true;
//course.views = 0;

var course = {
  title: "JavaScript",
  instructor: "Morten",
  level: 1,
  published: true,
  views: 0,
  updateViews: function(){
    return ++course.views;
  }
}

console.log(course);
console.log(course.instructor);
course.updateViews();
console.log(course);
