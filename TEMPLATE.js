/*
 *
 *          DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                  Version 2, December 2004
 * 
 * Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>
 *
 * Everyone is permitted to copy and distribute verbatim or modified
 * copies of this license document, and changing it is allowed as long
 * as the name is changed.
 *
 *          DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 * TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 * 0. You just DO WHAT THE FUCK YOU WANT TO.
 *
 */

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
