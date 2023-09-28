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
	'/ajax.php',
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

function webp_upload_mimes( $existing_mimes ) {
	// add webp to the list of mime types
	$existing_mimes['webp'] = 'image/webp';

	// return the array back to the function with our added mime type
	return $existing_mimes;
}
add_filter( 'mime_types', 'webp_upload_mimes' );
add_filter( 'get_the_archive_title', 'modify_archive_title', 10, 1 );

function custom_breadcrumbs() {
  global $post;

  if (!is_home() && !is_front_page()) {
    echo '<div class="col-12 "><ul class="breadcrumbs flex flex-align-center flex-justify-start flex-wrap">';

    // Home Link
    echo '<li class="breadcrumbs-home">';
    echo '<a href="' . get_option('home') . '" class="flex flex-align-center flex-justify-start">';
    echo '<i class="fa-home"></i>';
    echo '</a>';
    echo '<span class="breadcrumbs-divider">/</span>';
    echo '</li>';

        if (is_category() || is_single()) {
            $categories = get_the_category();
            $cat_count = count($categories);
            foreach ($categories as $key => $category) {
                echo '<li>';
                echo '<a href="' . get_category_link($category->term_id) . '">';
                echo '<span>' . $category->name . '</span>';
                echo '</a>';
                if($key < $cat_count - 1 || is_single()) {
                    echo '<span class="breadcrumbs-divider">/</span>';
                }
                echo '</li>';
            }

            if (is_single()) {
                echo '<li>';
                echo '<span>' . get_the_title() . '</span>';
                echo '</li>';
            }
        } elseif (is_page()) {
            if ($post->post_parent) {
                $anc = get_post_ancestors($post->ID);
                foreach ($anc as $ancestor) {
                    echo '<li>';
                    echo '<a href="' . get_permalink($ancestor) . '">';
                    echo '<span>' . get_the_title($ancestor) . '</span>';
                    echo '</a>';
                    echo '<span class="breadcrumbs-divider">/</span>';
                    echo '</li>';
                }
                echo '<li>';
                echo '<span>' . get_the_title() . '</span>';
                echo '</li>';
            } else {
                echo '<li>';
                echo '<span>' . get_the_title() . '</span>';
                echo '</li>';
            }
        }elseif (is_archive()){
          $term = get_queried_object();
          $name = $term->label ? $term->label : $term->name;
          
          echo '<li>';
          echo '<span>' . $name . '</span>';
          echo '</li>';
        }

    echo '</ul> </div>';
  }
}

function renderACF() {
  if( get_row_layout() == 'hero' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-hero.php');

  elseif( get_row_layout() == 'casino_hero' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-casino-hero.php');
  
  elseif( get_row_layout() == 'slots_list' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-free_pokies_list.php');
  
  elseif( get_row_layout() == 'benefits_slider_1' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-benefits_slider1.php');
  
  elseif( get_row_layout() == 'benefits_slider_2' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-benefits_slider2.php');
  
  elseif( get_row_layout() == 'casinos' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-real-money-pokies.php');
  
  elseif( get_row_layout() == 'faq' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-faq.php');
  
  elseif( get_row_layout() == 'general_text' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-general_text.php');
  
  elseif( get_row_layout() == 'text_block' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-text_block.php');

  elseif( get_row_layout() == 'review' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-review.php');

  elseif( get_row_layout() == 'benefits' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-benefits.php');

  elseif( get_row_layout() == 'bonus_features' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-bonus_features.php');

  elseif( get_row_layout() == 'image_text' ):
    include(TEMPLATEPATH.'/acf-widgets/widget-image_text.php');

  endif;
}