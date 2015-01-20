// All the bio information stored here
var bio = {
	"name" : "Stefan Worzalla",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "646-555-5555",
		"email" : "stewo1337@gmail.com",
		"github" : "worzst",
		"twitter" : "@worzst",
		"location" : "Liestal, Switzerland"
	},
	"welcomeMessage" : "Hello Everyone! This is my resume built while i took the Udacity Front-End Web Developer Nanodegree. For any questions please contact me.",
	"skills" : [
	"HTML", "CSS", "JavaScript", "PHP"
	],
	"bioPic" : "images/me.jpg"
}

// All the educational information stored here
var education = {
	"schools" : [
	{
		"name" : "Gymnasium Liestal",
		"location" : "Liestal",
		"degree" : "High School",
		"majors" : "Biologie/Chemistry",
		"dates" : "August 2011",
		"url" : "http://www.gymliestal.ch/"
	},
	{
		"name"  : "EF International School",
		"location" : "Boston",
		"degree" : "Cambridge Advanced",
		"majors" : "English",
		"dates" : "June 2015",
		"url" : "http://www.efswiss.ch/de/"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : "Approx. August 2015",
		"url" : "https://www.udacity.com/course/nd001"
	},
	{
		"title" : "Data Analyst Nanodegree",
		"school" : "Udacity",
		"date" : "Approx. December 2015",
		"url" : "https://www.udacity.com/course/nd002"
	}
	]
}

// All the work information stored here
var work = {
	"jobs" : [
	{
		"employer" : "Baloise Insurance",
		"title" : "2nd Level Supporter",
		"location" : "Basel",
		"dates" : "August 2011 - August 2012",
		"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
	},
	{
		"employer" : "Coop",
		"title" : "Programmer SAP",
		"location" : "Basel",
		"dates" : "August 2012 - September 2013",
		"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
	}
	]
}

// All the project information stored here
var projects = {
	"project" : [
	{
		"title" : "Project 1",
		"dates" : "2011-2012",
		"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
		"images" : "http://placehold.it/350x150"
	},
	{
		"title" : "Project 2",
		"dates" : "2012-2013",
		"description" : "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus",
		"images" : "http://placehold.it/350x150"
	}
	]
}

//Function to display the biographical information on the page
bio.display = function() {
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMSG = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelcomeMSG);

	displayContacts();

	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

//Function to display the educational information on the page
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedOnlineTitle);
		$(".education-entry:last").append(formattedOnlineSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

//Function to display the work information on the page
work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

//Function to display the project information on the page
projects.display = function() {
	for (var proj in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[proj].images);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

//Helper function for bio.display - formats the contact data and appends it
function displayContacts() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
}

//format and display the header title
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//call the functions to display all the information on the page
bio.display();
education.display();
work.display();
projects.display();

//append the map to the page
$("#mapDiv").append(googleMap);