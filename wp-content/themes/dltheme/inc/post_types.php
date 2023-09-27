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

add_action( 'init', 'create_provider_hierarchical_taxonomy', 0 );
 
//create a custom taxonomy name it provider for your posts
 
function create_provider_hierarchical_taxonomy() {
 
// Add new taxonomy, make it hierarchical like categories
//first do the translations part for GUI
 
  $labels = array(
    'name' => _x( 'Deposite', 'Pokies Provider' ),
    'singular_name' => _x( 'Provider', 'Provider' ),
    'search_items' =>  __( 'Search Provider' ),
    'all_items' => __( 'All Deposite' ),
    'parent_item' => __( 'Parent Provider' ),
    'parent_item_colon' => __( 'Parent Provider:' ),
    'edit_item' => __( 'Edit Provider' ), 
    'update_item' => __( 'Update Provider' ),
    'add_new_item' => __( 'Add New Provider' ),
    'new_item_name' => __( 'New Provider Name' ),
    'menu_name' => __( 'Provider' ),
  );    
 
// Now register the taxonomy
 
  register_taxonomy('provider',array('free-pokies'), array(
    'hierarchical' => true,
    'labels' => $labels,
    'show_ui' => true,
    'show_admin_column' => true,
    'query_var' => true,
    'rewrite' => true,
  ));
 
}

// Real Money Poki post type
function real_pokies_post_type(){
	register_post_type('real-pokies', [
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
add_action('init', 'real_pokies_post_type');

add_action( 'init', 'create_deposite_hierarchical_taxonomy', 0 );
function create_deposite_hierarchical_taxonomy() {
 
  // Add new taxonomy, make it hierarchical like categories
  //first do the translations part for GUI
   
    $labels = array(
      'name' => _x( 'Deposite', 'Pokies Deposite' ),
      'singular_name' => _x( 'Deposite', 'Deposite' ),
      'search_items' =>  __( 'Search Deposite' ),
      'all_items' => __( 'All Deposite' ),
      'parent_item' => __( 'Parent Deposite' ),
      'parent_item_colon' => __( 'Parent Deposite:' ),
      'edit_item' => __( 'Edit Deposite' ), 
      'update_item' => __( 'Update Deposite' ),
      'add_new_item' => __( 'Add New Deposite' ),
      'new_item_name' => __( 'New Deposite Name' ),
      'menu_name' => __( 'Deposite' ),
    );    
   
  // Now register the taxonomy
   
    register_taxonomy('deposite',array('real-pokies'), array(
      'hierarchical' => true,
      'labels' => $labels,
      'show_ui' => true,
      'show_admin_column' => true,
      'query_var' => true,
      'rewrite' => true,
    ));
   
  }