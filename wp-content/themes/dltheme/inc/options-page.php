<?php 

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
  acf_add_options_page(array(
		'page_title' 	=> 'Footer',
		'menu_title'	=> 'Footer Settings',
		'menu_slug' 	=> 'footer',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
  acf_add_options_page(array(
		'page_title' 	=> 'Free Pokies List',
		'menu_title'	=> 'Free Pokies List',
		'menu_slug' 	=> 'free_pokies_list',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
    "position"    => 2
	));
}
