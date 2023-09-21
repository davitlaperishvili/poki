<?php
/**
 * D.L functions and definitions
 *
 * @package D.L
 */

// Exit if accessed directly
defined('ABSPATH') || exit;

$dl_inc_dir = get_template_directory() . '/inc';

// Array of files to include
$dl_includes = array(
	'/setup.php',
	'/widgets.php',
	'/enqueue.php',
	'/menus.php',
	'/options-page.php',
	'/post_types.php',
);

// Include files
foreach($dl_includes as $file){
	require_once $dl_inc_dir . $file;
}
add_filter( 'paginate_links', function($link){

    //Remove link page/1/ from the first element and prev element
    
    if(is_paged()){
        $link= str_replace('page/1/', '', $link);
    }

    return $link;
} );
function load_more_posts() {
  $action = $_POST['action'];

  echo $action;

  die();
}
add_action('wp_ajax_load_more_posts', 'load_more_posts'); // If user is logged in
add_action('wp_ajax_nopriv_load_more_posts', 'load_more_posts'); // If user is not logged in