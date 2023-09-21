<?php

// Slots post type
function slots_post_type(){
	register_post_type('slots', [
		'label'  => null,
		'labels' => [
			'name'				=> 'Slots',
			'singular_name'		=> 'Slot',
			'add_new'			=> 'Add Slot',
			'add_new_item'		=> 'Add Slot',
			'edit_item'			=> 'Edit Slot',
			'new_item'			=> 'New Slot',
			'view_item'			=> 'Watch Slot',
			'search_items'		=> 'Search Slot',
			'not_found'			=> 'Not found',
		],
		'description'		=> 'Post for Slot',
		'public'			=> true,
		'show_in_menu'		=> true,
		'show_in_rest'		=> true,
		'rest_base'			=> true,
		'menu_position'		=> true,
		'menu_icon'			=> 'dashicons-megaphone',
		'hierarchical'		=> true,
		'supports'			=> ['title', 'thumbnail', 'editor'],
		'taxonomies'		=> [],
		'has_archive'		=> true,
		'rewrite'			=> true,
		'query_var'			=> true,
	]);
}
add_action('init', 'slots_post_type');

// Casinos post type
function casinos_post_type(){
	register_post_type('casinos', [
		'label'  => null,
		'labels' => [
			'name'				=> 'Casinos',
			'singular_name'		=> 'Casino',
			'add_new'			=> 'Add Casino',
			'add_new_item'		=> 'Add Casino',
			'edit_item'			=> 'Edit Casino',
			'new_item'			=> 'New Casino',
			'view_item'			=> 'Watch Casino',
			'search_items'		=> 'Search Casino',
			'not_found'			=> 'Not found',
		],
		'description'		=> 'Post for Casino',
		'public'			=> true,
		'show_in_menu'		=> true,
		'show_in_rest'		=> true,
		'rest_base'			=> true,
		'menu_position'		=> true,
		'menu_icon'			=> 'dashicons-megaphone',
		'hierarchical'		=> true,
		'supports'			=> ['title', 'thumbnail', 'editor'],
		'taxonomies'		=> [],
		'has_archive'		=> true,
		'rewrite'			=> true,
		'query_var'			=> true,
	]);
}
add_action('init', 'casinos_post_type');