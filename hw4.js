/*


	MUGO.JS BACKEND



*/


var variableArray = [];
var results = [];

var q1but = document.getElementById('solve_question_1');
var q2but = document.getElementById('solve_question_2');
var q3but = document.getElementById('solve_question_3');
var q4but = document.getElementById('solve_question_4');
var q5but = document.getElementById('solve_question_5');
var q6but = document.getElementById('solve_question_6');
var q7but = document.getElementById('solve_question_7');
var q8but = document.getElementById('solve_question_8');
var q9but = document.getElementById('solve_question_9');
var q10but = document.getElementById('solve_question_10');

q1but.addEventListener("click", mainSolver(1));
q2but.addEventListener("click", mainSolver(2));
q3but.addEventListener("click", mainSolver(3));
q4but.addEventListener("click", mainSolver(4));
q5but.addEventListener("click", mainSolver(5));
q6but.addEventListener("click", mainSolver(6));
q7but.addEventListener("click", mainSolver(7));
q8but.addEventListener("click", mainSolver(8));
q9but.addEventListener("click", mainSolver(9));
q10but.addEventListener("click", mainSolver(10));

/*

function getQuestion()

{

	var qNum;

	console.log(qNum.valueOf());

	return qNum.valueOf();
	
}

*/


//WE WON'T BE NEEDING GET TEXT METHOD FOR LUTEOUS


/*
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



	alert('Something went wrong. Please contact developer.')

}




	return questionText;

}

*/

//THIS FUNCTION SETS VARIABLES DEPENDING ON QUESTION NUMBER

function setVariables(qNum) {

var number = qNum.valueOf();

if (number.valueOf() == 1) {


	variableArray[0] = document.getElementById('question_1_1').value;
	variableArray[1] = document.getElementById('question1_2').value;


}

else if (number.valueOf() == 2) {


	variableArray[0] = document.getElementById('question_2_1').value;	
	variableArray[1] = document.getElementById('question_2_2').value;
	variableArray[2] = document.getElementById('question_2_3').value;
	variableArray[3] = document.getElementById('question_2_4').value;
	variableArray[4] = document.getElementById('question_2_5').value;

}

else if (number.valueOf() == 3) {

	variableArray[0] = document.getElementById('question_3_1').value;	
	variableArray[1] = document.getElementById('question_3_2').value;

}

else if (number.valueOf() == 4) {


	variableArray[0] = document.getElementById('question_4_1').value;	
	variableArray[1] = document.getElementById('question_4_2').value;
	variableArray[2] = document.getElementById('question_4_3').value;
	variableArray[3] = document.getElementById('question_4_4').value;

}

else if (number.valueOf() == 5) {


	variableArray[0] = document.getElementById('question_5_1').value;	
	variableArray[1] = document.getElementById('question_5_2').value;
	variableArray[2] = document.getElementById('question_5_3').value;

}

else if (number.valueOf() == 6) {


	variableArray[0] = document.getElementById('question_6_1').value;	
	variableArray[1] = document.getElementById('question_6_2').value;
	variableArray[2] = document.getElementById('question_6_3').value;

}

else if (number.valueOf() == 7) {


	variableArray[0] = document.getElementById('question_7_1').value;	
	variableArray[1] = document.getElementById('question_7_2').value;
	variableArray[2] = document.getElementById('question_7_3').value;
	variableArray[3] = document.getElementById('question_7_4').value;

}
else if (number.valueOf() == 8) {


	variableArray[0] = document.getElementById('question_8_1').value;	
	variableArray[1] = document.getElementById('question_8_2').value;
	variableArray[2] = document.getElementById('question_8_3').value;
	variableArray[3] = document.getElementById('question_8_4').value;

}

else if (number.valueOf() == 9) {


	variableArray[0] = document.getElementById('question_9_1').value;	
	variableArray[1] = document.getElementById('question_9_2').value;
	variableArray[2] = document.getElementById('question_9_3').value;
	variableArray[3] = document.getElementById('question_9_4').value;

}

else if (number.valueOf() == 10) {


	variableArray[0] = document.getElementById('question_10_1').value;	
	variableArray[1] = document.getElementById('question_10_2').value;
	variableArray[2] = document.getElementById('question_10_3').value;
	variableArray[3] = document.getElementById('question_10_4').value;
	variableArray[4] = document.getElementById('question_10_5').value;

}

else {

	console.log("I SHIT BRICKS TOO");
	alert('Something went wrong. Please contact developer.')

}

}


function sendToSolver(qNum) {


var number = qNum;


if (number.valueOf() == 1) {


	question_1(variableArray[0], variableArray[1]);

}

else if (number.valueOf() == 2) {


	question_2(variableArray[0], variableArray[1], variableArray[2], variableArray[3], variableArray[4]);

}

else if (number.valueOf() == 3) {


	question_3(variableArray[0], variableArray[1]);

}

else if (number.valueOf() == 4) {


	question_4(variableArray[0], variableArray[1], variableArray[2], variableArray[3]);

}

else if (number.valueOf() == 5) {


	question_5(variableArray[0], variableArray[1], variableArray[2]);

}

else if (number.valueOf() == 6) {


	question_6(variableArray[0], variableArray[1], variableArray[2]);


}


else if (number.valueOf() == 7) {


	question_7(variableArray[0], variableArray[1], variableArray[2], variableArray[3]);

}
else if (number.valueOf() == 8) {


	question_8(variableArray[0], variableArray[1], variableArray[2], variableArray[3]);

}

else if (number.valueOf() == 9) {


	question_9(variableArray[0], variableArray[1], variableArray[2], variableArray[3]);

}

else if (number.valueOf() == 10) {


	question_10(variableArray[0], variableArray[1], variableArray[2], variableArray[3], variableArray[4]);

}

else {


		console.log("I SHIT BRICKS FOUR");


	alert('Something went wrong. Please contact developer.')

}



}

function setFillBlanks(qNum) {



var number = qNum;

if (number.valueOf() == 1) {


	document.getElementById('question_1_out1').value = results[0];
	document.getElementById('question_1_out2').value = results[1];
	document.getElementById('question_1_out3').value = results[2];

}

else if (number.valueOf() == 2) {


	document.getElementById('question_2_out1').value = results[0];
	document.getElementById('question_2_out2').value = results[1];

}

else if (number.valueOf() == 3) {


	document.getElementById('question_3_out1').value = results[0];
	document.getElementById('question_3_out2').value = results[1];

}

else if (number.valueOf() == 4) {


	document.getElementById('question_4_out1').value = results[0];

}

else if (number.valueOf() == 5) {


	document.getElementById('question_5_out1').value = results[0];

}

else if (number.valueOf() == 6) {


	document.getElementById('question_6_out1').value = results[0];
	document.getElementById('question_6_out1').value = results[0];

}

else if (number.valueOf() == 7) {


	document.getElementById('question_7_out1').value = results[0];
	document.getElementById('question_7_out2').value = results[1];

}
else if (number.valueOf() == 8) {


	document.getElementById('question_8_out1').value = results[0];
	document.getElementById('question_8_out2').value = results[1];

}

else if (number.valueOf() == 9) {


	document.getElementById('question_9_out1').value = results[0];
	document.getElementById('question_9_out2').value = results[1];

}

else if (number.valueOf() == 10) {


	document.getElementById('question_10_out1').value = results[0];
	document.getElementById('question_10_out2').value = results[1];
	document.getElementById('question_10_out3').value = results[2];
	document.getElementById('question_10_out4').value = results[3];
	document.getElementById('question_10_out5').value = results[4];
	document.getElementById('question_10_out6').value = results[5];

}

else {


		console.log("I SHIT BRICKS THREE");


	alert('Something went wrong. Please contact developer.')

}


}



function mainSolver(number) {

	var qNum = number;

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

/*
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
*/

console.log("Cleared");


}










//
// SOLVER ALGORITHM
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

	if(out_vector.angle < 0) out_vector.angle += 2*pi;

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
	dot_product = v2_dot_product(vector_1, vector_2);

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

function v2_multiply_vector_with_scalar(vector, scalar)
{
	out_vector = make_vector2_from_polar((vector.magnitude * scalar), vector.angle);
	return out_vector;
}

//
// Question functions.
//

function question_1(mass_of_block, angle)
{	
	true_angle = to_radians(angle);

	out_1 = mass_of_block * gravity_constant * Math.sin(true_angle);
	out_2 = mass_of_block * gravity_constant * Math.cos(true_angle);	
	out_3 = gravity_constant * Math.sin(true_angle);

	results[0] = out_1;
	results[1] = out_2;
	results[2] = out_3;
}
	
function question_2(vx1, vx2, vy1, vy2, t, mass)
{
	velocity_vector = make_vector2_from_rectangular((vx2 - vx1), (vy2 - vy1));

	acceleration_vector = v2_multiply_vector_with_scalar(velocity_vector, (1 / t));

	out_1 = acceleration_vector.magnitude * mass;
	out_2 = to_degrees(acceleration_vector.angle);

	if(out_2 > 180){
		out_2 = out_2 - 360;
	}

	results[0] = out_1;
	results[1] = out_2;
}

function question_3(mass, theta)
{
	true_theta = to_radians(theta);

	out_1 = mass * gravity_constant * Math.tan(true_theta);
	out_2 = (out_1 * Math.sin(true_theta)) + (mass * gravity_constant * Math.cos(true_theta));

	results[0] = out_1;
	results[1] = out_2;
}

function question_4(mass_a, mass_b, mass_catnip, tension)
{
	acceleration = (tension - (mass_b * gravity_constant)) / mass_b;

	out_1 = mass_catnip * (acceleration + gravity_constant);

	results[0] = out_1;
}

function question_5(m1, m2, force)
{
	acceleration = force / (m1 + m2);

	out_1 = m2 * acceleration;

	results[0] = out_1;
}

function question_6(m1, angle, m2)
{
	true_angle = to_radians(angle);

	acceleration = ((m2 * gravity_constant) - (m1 * gravity_constant * Math.sin(true_angle))) / (m2 + m1);

	out_1 = acceleration;
	out_2 = m2 * (gravity_constant - acceleration);

	results[0] = out_1;
	results[1] = out_2;
}

// Question 7 is also question 8.

function question_7(m2, angle, m1, force)
{
	true_angle = to_radians(angle);

	acceleration = ((m2 * gravity_constant * Math.sin(true_angle)) + force) / (m1 + m2);
	
	out_1 = (m1 * acceleration) - force;
	out_2 = (m1 * gravity_constant * Math.sin(true_angle));

	results[0] = out_1;
	results[1] = out_2;
}

function question_8(m2, angle, m1, force)
{
	question_7(m2, angle, m1, force);
}

function question_9(m1, m2, force, acceleration)
{
	tension = (m2 * (gravity_constant - acceleration)) - force;

	out_1 = tension;

	out_2 = to_degrees(((acceleration * (m1 + m2)) - (m2 * gravity_constant) + force) / (m1 * gravity_constant));

	results[0] = out_1;
	results[1] = out_2;
}

function question_10(mass, f1_x, f1_y, f2_x, f2_y)
{	
	f1 = make_vector2_from_rectangular(f1_x, f1_y);
	f2 = make_vector2_from_rectangular(f2_x, f2_y);

	fnet = v2_add_vectors(f1, f2);

	out_1 = [fnet.x, fnet.y];
	out_2 = fnet.magnitude;
	out_3 = to_degrees(fnet.angle) - 360;

	acceleration = v2_multiply_vector_with_scalar(fnet, (1 / mass));

	out_4 = acceleration.magnitude;
	out_5 = to_degrees(acceleration.angle) - 360;

	results[0] = out_1;
	results[1] = out_2;
	results[2] = out_3;
	results[3] = out_4;
	results[4] = out_5;

}
