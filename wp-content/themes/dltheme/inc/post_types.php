<?php


// Free Pokies post type
function free_pokies_post_type(){
	register_post_type('free-pokies', [
		'label'  => null,
		'labels' => [
			'name'				=> 'Free Pokies',
			'singular_name'		=> 'Free Poki',
			'add_new'			=> 'Add Free Poki',
			'add_new_item'		=> 'Add Free Poki',
			'edit_item'			=> 'Edit Free Poki',
			'new_item'			=> 'New Free Poki',
			'view_item'			=> 'Watch Free Poki',
			'search_items'		=> 'Search Free Poki',
			'not_found'			=> 'Not found',
		],
		'description'		=> 'Post for Free Poki',
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
add_action('init', 'free_pokies_post_type');

// Real Money Poki post type
function real_money_pokies_post_type(){
	register_post_type('real-money-pokies', [
		'label'  => null,
		'labels' => [
			'name'				=> 'Real Money Pokies',
			'singular_name'		=> 'Real Money Poki',
			'add_new'			=> 'Add Real Money Poki',
			'add_new_item'		=> 'Add Real Money Poki',
			'edit_item'			=> 'Edit Real Money Poki',
			'new_item'			=> 'New Real Money Poki',
			'view_item'			=> 'Watch Real Money Poki',
			'search_items'		=> 'Search Real Money Poki',
			'not_found'			=> 'Not found',
		],
		'description'		=> 'Post for Real Money Poki',
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
add_action('init', 'real_money_pokies_post_type');
