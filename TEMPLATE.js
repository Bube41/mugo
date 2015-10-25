/*

	MUGO.JS BACKEND

	First we reach the document. Then we extract text from here. Then the exracted text is going to be processed into variables neeeded. 
	These variables should be edited to show properly. Then these variables are put into solver method. After getting the results, we put them into boxes needed.
	This should just leave us to press sumbit button.

	TODO:
	1. Create text manipulator.
	1a. Make text manipulator suitable for each question.
	1b. Give the results of this text manipulator to solver equation.
	2. Make js to fill the boxes.

	--Elif with respect to question number.


*/

//COULDN'T GET IT WORKING ON WEBSITE. WORKS ON DUMMY HTML. ONLY QUESTION 6 IS DEFINED.


var workplace = window.frames['container'].frames['studentLwsFrame'].frames["mainframe"].frames["agrootframe"].frames["agarea"].frames["agbody"].document;

var variableArray = [];
var results = [];


function getQuestion()

{

	var title =  workplace.getElementByTagName('title');
	var newTitle1 = title.trim();
	var newTitle2 = newTitle1.substr(8,2).trim();

	console.log(newTitle2.valueOf())

	return newTitle2.valueOf();
	
}


function getText(qNum)

{

	console.log("Getting Text");

var number = qNum;
var questionText;

if (number.valueOf() == 1) {


	//QUESTION 1 TEXT

}

else if (number.valueOf() == 2) {


	//QUESTION 2 TEXT

}

else if (number.valueOf() == 3) {


	//QUESTION 3 TEXT

}

else if (number.valueOf() == 4) {


	//QUESTION 4 TEXT

}

else if (number.valueOf() == 5) {


	//QUESTION 5 TEXT

}

else if (number.valueOf() == 6) {


console.log("Got 6");

	questionText = workplace.getElementsByTagName('p')[0];

}

else if (number.valueOf() == 7) {


	//QUESTION 7 TEXT

}
else if (number.valueOf() == 8) {


	//QUESTION 8 TEXT

}

else if (number.valueOf() == 9) {


	//QUESTION 9 TEXT
}

else if (number.valueOf() == 10) {


	//QUESTION 10 TEXT

}

else {

	console.log("I SHIT BRICKS");


	//RETURN ERROR

}




	return questionText;

}

//THIS FUNCTION SETS VARIABLES DEPENDING ON QUESTION NUMBER

function setVariables(qNum) {

var number = qNum.valueOf();

if (number.valueOf() == 1) {


	//QUESTION 1 VARIABLES

}

else if (number.valueOf() == 2) {


	//QUESTION 2 VARIABLES

}

else if (number.valueOf() == 3) {


	//QUESTION 3 VARIABLES

}

else if (number.valueOf() == 4) {


	//QUESTION 4 VARIABLES

}

else if (number.valueOf() == 5) {


	//QUESTION 5 VARIABLES

}

else if (number.valueOf() == 6) {


var text = getText(number.valueOf());

variableArray[0] = text.substr(2,3).trim();
variableArray[1] = text.substr(47,5).trim();
variableArray[2] = text.substr(226,3).trim();
variableArray[3] = text.substr(299,3).trim();

console.log("Variables are set.");

}

else if (number.valueOf() == 7) {


	//QUESTION 7 VARIABLES

}
else if (number.valueOf() == 8) {


	//QUESTION 8 VARIABLES

}

else if (number.valueOf() == 9) {


	//QUESTION 9 VARIABLES

}

else if (number.valueOf() == 10) {


	//QUESTION 10 VARIABLES

}

else {

	console.log("I SHIT BRICKS TOO");
	//RETURN ERROR

}

}


function sendToSolver(qNum) {



	var number = qNum;

if (number.valueOf() == 1) {


	//QUESTION 1

}

else if (number.valueOf() == 2) {


	//QUESTION 2

}

else if (number.valueOf() == 3) {


	//QUESTION 3

}

else if (number.valueOf() == 4) {


	//QUESTION 4

}

else if (number.valueOf() == 5) {


	//QUESTION 5

}

else if (number.valueOf() == 6) {


	question_6(variableArray[0], variableArray[1], variableArray[2], variableArray[3]);


}

else if (number.valueOf() == 7) {


	//QUESTION 7

}
else if (number.valueOf() == 8) {


	//QUESTION 8

}

else if (number.valueOf() == 9) {


	//QUESTION 9

}

else if (number.valueOf() == 10) {


	//QUESTION 10

}

else {


		console.log("I SHIT BRICKS FOUR");

	//RETURN ERROR

}



}

function setFillBlanks(qNum) {



var number = qNum;

if (number.valueOf() == 1) {


	//QUESTION 1

}

else if (number.valueOf() == 2) {


	//QUESTION 2

}

else if (number.valueOf() == 3) {


	//QUESTION 3

}

else if (number.valueOf() == 4) {


	//QUESTION 4

}

else if (number.valueOf() == 5) {


	//QUESTION 5

}

else if (number.valueOf() == 6) {


workplace.getElementById("res_c04q_1_93_te_nu_44").value = results[0];
workplace.getElementById("resp_c04q_1_93_2_0").value = results[1];

}

else if (number.valueOf() == 7) {


	//QUESTION 7

}
else if (number.valueOf() == 8) {


	//QUESTION 8

}

else if (number.valueOf() == 9) {


	//QUESTION 9

}

else if (number.valueOf() == 10) {


	//QUESTION 10

}

else {


		console.log("I SHIT BRICKS THREE");

	//RETURN ERROR

}


}



function mainSolver() {

	var qNum = getQuestion();

	setVariables(qNum.valueOf());

	console.log("Variables are set");

	sendToSolver(qNum.valueOf());

	console.log("Question is solved");

	setFillBlanks(qNum.valueOf());

	console.log("Blanks are filled");

	clearAll();



}


//THIS FUNCTION IS CALLED AFTER THE QUESTION IS SOLVED

function clearAll() {


variableArray[0] = 0;
variableArray[1] = 0;
variableArray[2] = 0;
variableArray[3] = 0;
variableArray[4] = 0;
variableArray[5] = 0;
variableArray[6] = 0;
variableArray[7] = 0;
variableArray[8] = 0;
variableArray[9] = 0;


results[0] = 0;
results[1] = 0;
results[2] = 0;
results[3] = 0;
results[4] = 0;
results[5] = 0;
results[6] = 0;
results[7] = 0;
results[8] = 0;
results[9] = 0;
results[10] = 0;
results[11] = 0;
results[12] = 0;
results[13] = 0;
results[14] = 0;
results[15] = 0;
results[16] = 0;
results[17] = 0;
results[18] = 0;
results[19] = 0;

console.log("Cleared");


}







// SOLVER ALGORITHM

var pi = 3.14159;
var epsilon = 0.00001;
var equation_epsilon = 0.4;
var gravity_constant = 9.81;

function to_radians(degrees)
{
	var radians = (2 * pi * degrees) / (360.0);
	return radians;
}

function to_degrees(radians)
{
	var degrees = (360.0 * radians) / (2 * pi);
	return degrees;
}

function solve_quadratic(a, b, c)
{
	var discriminant = ((b * b) - (4 * a * c));

	var x1 = ((-1.0 * b) - Math.sqrt(discriminant)) / (2 * a);
	var x2 = ((-1.0 * b) + Math.sqrt(discriminant)) / (2 * a);

	return [x1, x2];
}

function solve_equation_1(d2, d1, v, vriver, current_point, point_range_1, point_range_2)
{
	var distance, i, teta, delta;
	var closest_point = current_point;
	var min_distance = 100000;
	var fragment_count = 750;
	var fragment = (point_range_2 - point_range_1) / fragment_count;

	for(i = 0; i < fragment_count; i++)
	{
		teta = point_range_1 + (i * fragment);
		distance = Math.abs((d1 / (v * (Math.sin(teta)))) - (d2 / ((v * Math.cos(teta)) - vriver)));
		if(distance < min_distance){
			min_distance = distance;
			closest_point = teta;
		}
	}

	if(min_distance < equation_epsilon){
		return closest_point;
	} else {
		delta = closest_point / 10.0;
		solve_equation_1(d2, d1, v, vriver, closest_point, (closest_point - delta), (closest_point + delta));
	}
}

//
// The basic 3d vector class and its constructors.
//

function vector3() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.magnitude = 0;
	this.polar_angle = to_radians(90.0);
	this.azimuthal_angle = 0;
}

function make_vector3_from_polar(magnitude, polar_angle, azimuthal_angle) {
		out_vector = new vector3();

		out_vector.magnitude = magnitude;
		out_vector.polar_angle = polar_angle;
		out_vector.azimuthal_angle = azimuthal_angle;

		out_vector.x = magnitude * Math.sin(polar_angle) * Math.cos(azimuthal_angle);
		out_vector.y = magnitude * Math.sin(polar_angle) * Math.sin(azimuthal_angle);
		out_vector.z = magnitude * Math.cos(polar_angle);

		return out_vector;
}

function make_vector3_from_rectangular(x, y, z) {
		out_vector = new vector3();

		out_vector.x = x;
		out_vector.y = y;
		out_vector.z = z;

		out_vector.magnitude = Math.sqrt((x * x) + (y * y) + (z * z));
		out_vector.polar_angle = Math.acos(z / out_vector.magnitude);
		out_vector.azimuthal_angle = Math.atan2(y, x);

		return out_vector;
}

//
// Basic vector3 functions.
//

function v3_add_vectors(vector_1, vector_2)
{
	var x = vector_1.x + vector_2.x;
	var y = vector_1.y + vector_2.y;
	var z = vector_1.z + vector_2.z;

	out_vector = make_vector3_from_rectangular(x, y, z);
	return out_vector;
}

function v3_dot_product(vector_1, vector_2)
{
	var dot_product = (vector_1.x * vector_2.x) + (vector_1.y * vector_2.y) + (vector_1.z * vector_2.z);
	
	return dot_product;
}

function v3_angle_between_vectors(vector_1, vector_2)
{
	return Math.acos(v3_dot_product(vector_1, vector_2) / (vector_1.magnitude * vector_2.magnitude));
}

function v3_cross_product(vector_1, vector_2)
{
	out_vector = make_vector3_from_rectangular(((vector_1.y * vector_2.z) - (vector_2.y * vector_1.z)),
											   ((vector_1.z * vector_2.x) - (vector_2.z * vector_1.x)),
											   ((vector_1.x * vector_2.y) - (vector_2.x * vector_1.y)));
	return out_vector;
}

function v3_multiply_vector_with_scalar(vector, scalar)
{
	out_vector = make_vector3_from_polar((vector.magnitude * scalar), vector.polar_angle, vector.azimuthal_angle);
	return out_vector;
}

//
// The basic 2d vector class and its constructors.
//

function vector2()
{
	this.x = 0;
	this.y = 0;
	this.magnitude = 0;
	this.angle = 0;
}

function make_vector2_from_polar(magnitude, angle)
{
	out_vector = new vector2();

	out_vector.magnitude = magnitude;
	out_vector.angle = angle;

	out_vector.x = magnitude * Math.cos(angle);
	out_vector.y = magnitude * Math.sin(angle);

	return out_vector;
}

function make_vector2_from_rectangular(x, y)
{
	out_vector = new vector2();

	out_vector.x = x;
	out_vector.y = y;

	out_vector.magnitude = Math.sqrt((x * x) + (y * y));
	out_vector.angle = Math.atan2(y, x);

	return out_vector;
}

//
// Basic vector2 functions.
//

function v2_add_vectors(vector_1, vector_2)
{
	var x = vector_1.x + vector_2.x;
	var y = vector_1.y + vector_2.y;

	return make_vector2_from_rectangular(x, y);
}

function v2_rotate_vector(vector, angle)
{
	return make_vector2_from_polar(vector.magnitude, (vector.angle + angle));
}

function v2_dot_product(vector_1, vector_2)
{
	return ((vector_1.x * vector_2.x) + (vector_1.y * vector_2.y));
}

function v2_angle_between_vectors(vector_1, vector_2)
{
	return Math.acos(dot_product / (vector_1.magnitude * vector_2.magnitude));
}

function v2_magnitude_of_cross_product(vector_1, vector_2)
{
	out_vector = make_vector3_from_rectangular(0, 0, ((vector_1.x * vector_2.y) - (vector_2.x * vector_1.y)));

	return out_vector.magnitude;
}

function v2_component_along_direction(vector_1, vector_2)
{
	var angle_between = v2_angle_between_vectors(vector_1, vector_2);

	return vector_1.magnitude * Math.cos(angle_between);
}

//QUESTION FUNCTIONS

function question_1(vector_a_x, vector_a_y, vector_a_z, time, vector_b_x, vector_b_y, vector_b_z)
{
	initial_speed = make_vector3_from_rectangular(vector_a_x, vector_a_y, vector_a_z);
	final_speed = make_vector3_from_rectangular(vector_b_x, vector_b_y, vector_b_z);

	minus_initial_speed = v3_multiply_vector_with_scalar(initial_speed, -1.0);
	intermediate_vector = v3_add_vectors(final_speed, minus_initial_speed);

	acceleration_vector = v3_multiply_vector_with_scalar(intermediate_vector, (1.0 / time));

	return [acceleration_vector.x, acceleration_vector.z, acceleration_vector.magnitude, to_degrees(v3_angle_between_vectors(acceleration_vector, make_vector3_from_rectangular(1.0, 0.0, 0.0)))];
}

function question_6(width, river_speed, boat_speed, horizontal_distance)
{
	out_1 = (180 - to_degrees(solve_equation_1(horizontal_distance, width, boat_speed, river_speed, pi, 0, (pi / 2.0))));

	out_2 = width / (boat_speed * Math.sin(to_radians(out_1)));

	results[0] = out_1;
	results[1] = out_2;
}







/*

//
// Functions of general use.
//

var pi = 3.14159;
var epsilon = 0.00001;
var equation_epsilon = 0.4;
var gravity_constant = 9.81;

function to_radians(degrees)
{
	var radians = (2 * pi * degrees) / (360.0);
	return radians;
}

function to_degrees(radians)
{
	var degrees = (360.0 * radians) / (2 * pi);
	return degrees;
}

function solve_quadratic(a, b, c)
{
	var discriminant = ((b * b) - (4 * a * c));

	var x1 = ((-1.0 * b) - Math.sqrt(discriminant)) / (2 * a);
	var x2 = ((-1.0 * b) + Math.sqrt(discriminant)) / (2 * a);

	return [x1, x2];
}

function solve_equation_1(d2, d1, v, vriver, current_point, point_range_1, point_range_2)
{
	var distance, i, teta, delta;
	var closest_point = current_point;
	var min_distance = 100000;
	var fragment_count = 750;
	var fragment = (point_range_2 - point_range_1) / fragment_count;

	for(i = 0; i < fragment_count; i++)
	{
		teta = point_range_1 + (i * fragment);
		distance = Math.abs((d1 / (v * (Math.sin(teta)))) - (d2 / ((v * Math.cos(teta)) - vriver)));
		if(distance < min_distance){
			min_distance = distance;
			closest_point = teta;
		}
	}

	if(min_distance < equation_epsilon){
		return closest_point;
	} else {
		delta = closest_point / 10.0;
		solve_equation_1(d2, d1, v, vriver, closest_point, (closest_point - delta), (closest_point + delta));
	}
}

//
// The basic 3d vector class and its constructors.
//

function vector3() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.magnitude = 0;
	this.polar_angle = to_radians(90.0);
	this.azimuthal_angle = 0;
}

function make_vector3_from_polar(magnitude, polar_angle, azimuthal_angle) {
		out_vector = new vector3();

		out_vector.magnitude = magnitude;
		out_vector.polar_angle = polar_angle;
		out_vector.azimuthal_angle = azimuthal_angle;

		out_vector.x = magnitude * Math.sin(polar_angle) * Math.cos(azimuthal_angle);
		out_vector.y = magnitude * Math.sin(polar_angle) * Math.sin(azimuthal_angle);
		out_vector.z = magnitude * Math.cos(polar_angle);

		return out_vector;
}

function make_vector3_from_rectangular(x, y, z) {
		out_vector = new vector3();

		out_vector.x = x;
		out_vector.y = y;
		out_vector.z = z;

		out_vector.magnitude = Math.sqrt((x * x) + (y * y) + (z * z));
		out_vector.polar_angle = Math.acos(z / out_vector.magnitude);
		out_vector.azimuthal_angle = Math.atan2(y, x);

		return out_vector;
}

//
// Basic vector3 functions.
//

function v3_add_vectors(vector_1, vector_2)
{
	var x = vector_1.x + vector_2.x;
	var y = vector_1.y + vector_2.y;
	var z = vector_1.z + vector_2.z;

	out_vector = make_vector3_from_rectangular(x, y, z);
	return out_vector;
}

function v3_dot_product(vector_1, vector_2)
{
	var dot_product = (vector_1.x * vector_2.x) + (vector_1.y * vector_2.y) + (vector_1.z * vector_2.z);
	
	return dot_product;
}

function v3_angle_between_vectors(vector_1, vector_2)
{
	return Math.acos(v3_dot_product(vector_1, vector_2) / (vector_1.magnitude * vector_2.magnitude));
}

function v3_cross_product(vector_1, vector_2)
{
	out_vector = make_vector3_from_rectangular(((vector_1.y * vector_2.z) - (vector_2.y * vector_1.z)),
											   ((vector_1.z * vector_2.x) - (vector_2.z * vector_1.x)),
											   ((vector_1.x * vector_2.y) - (vector_2.x * vector_1.y)));
	return out_vector;
}

function v3_multiply_vector_with_scalar(vector, scalar)
{
	out_vector = make_vector3_from_polar((vector.magnitude * scalar), vector.polar_angle, vector.azimuthal_angle);
	return out_vector;
}

//
// The basic 2d vector class and its constructors.
//

function vector2()
{
	this.x = 0;
	this.y = 0;
	this.magnitude = 0;
	this.angle = 0;
}

function make_vector2_from_polar(magnitude, angle)
{
	out_vector = new vector2();

	out_vector.magnitude = magnitude;
	out_vector.angle = angle;

	out_vector.x = magnitude * Math.cos(angle);
	out_vector.y = magnitude * Math.sin(angle);

	return out_vector;
}

function make_vector2_from_rectangular(x, y)
{
	out_vector = new vector2();

	out_vector.x = x;
	out_vector.y = y;

	out_vector.magnitude = Math.sqrt((x * x) + (y * y));
	out_vector.angle = Math.atan2(y, x);

	return out_vector;
}

//
// Basic vector2 functions.
//

function v2_add_vectors(vector_1, vector_2)
{
	var x = vector_1.x + vector_2.x;
	var y = vector_1.y + vector_2.y;

	return make_vector2_from_rectangular(x, y);
}

function v2_rotate_vector(vector, angle)
{
	return make_vector2_from_polar(vector.magnitude, (vector.angle + angle));
}

function v2_dot_product(vector_1, vector_2)
{
	return ((vector_1.x * vector_2.x) + (vector_1.y * vector_2.y));
}

function v2_angle_between_vectors(vector_1, vector_2)
{
	return Math.acos(dot_product / (vector_1.magnitude * vector_2.magnitude));
}

function v2_magnitude_of_cross_product(vector_1, vector_2)
{
	out_vector = make_vector3_from_rectangular(0, 0, ((vector_1.x * vector_2.y) - (vector_2.x * vector_1.y)));

	return out_vector.magnitude;
}

function v2_component_along_direction(vector_1, vector_2)
{
	var angle_between = v2_angle_between_vectors(vector_1, vector_2);

	return vector_1.magnitude * Math.cos(angle_between);
}

function question_1(vector_a_x, vector_a_y, vector_a_z, time, vector_b_x, vector_b_y, vector_b_z)
{
	initial_speed = make_vector3_from_rectangular(vector_a_x, vector_a_y, vector_a_z);
	final_speed = make_vector3_from_rectangular(vector_b_x, vector_b_y, vector_b_z);

	minus_initial_speed = v3_multiply_vector_with_scalar(initial_speed, -1.0);
	intermediate_vector = v3_add_vectors(final_speed, minus_initial_speed);

	acceleration_vector = v3_multiply_vector_with_scalar(intermediate_vector, (1.0 / time));

	return [acceleration_vector.x, acceleration_vector.z, acceleration_vector.magnitude, to_degrees(v3_angle_between_vectors(acceleration_vector, make_vector3_from_rectangular(1.0, 0.0, 0.0)))];
}

function question_6(width, river_speed, boat_speed, horizontal_distance)
{
	out_1 = (180 - to_degrees(solve_equation_1(horizontal_distance, width, boat_speed, river_speed, pi, 0, (pi / 2.0))));

	out_2 = width / (boat_speed * Math.sin(to_radians(out_1)));

	return [out_1, out_2];
}

*/
