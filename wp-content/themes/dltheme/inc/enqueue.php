<?php

function load_styles(){
	wp_register_style('main-style', get_template_directory_uri() . '/scripts/css/style.css', array(), false, 'all');
	wp_enqueue_style('main-style');
  wp_register_style('additional-style', get_template_directory_uri() . '/scripts/css/additional.css', array(), false, 'all');
	wp_enqueue_style('additional-style');
	// wp_register_style('swiper-style', get_template_directory_uri() . '/scripts/swiper/swiper.css', array(), false, 'all');
	// wp_enqueue_style('swiper-style');
}
add_action('wp_enqueue_scripts', 'load_styles');

// Scripts
add_action( 'wp_footer', 'load_scripts' );
function load_scripts(){
	//wp_enqueue_script('swiper-script', get_template_directory_uri() . '/scripts/swiper/swiper.js');
	wp_enqueue_script('app-script', get_template_directory_uri() . '/scripts/js/app.js');
	// wp_enqueue_script('micromodal-script', 'https://unpkg.com/micromodal/dist/micromodal.min.js');
	// wp_enqueue_style('main-script');
}