//complete this code
class Person {
	
	constructor(name:string, age:number){
		this.name = name;
		this.age = age;
	}

	get name()
	{
         return this.name;
	} 
	set age()
	{
      return this.age;
	}
}

class Student extends Person {
	constructor(name, age){
     super(name, age)
	}

	function study():void{
      console.log(super.name + "is studying");
	}
}

class Teacher extends Person {
	constructor(name, age){
        super(name, age)
	}

	function teach():vod{
		console.log(super.name + " is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
