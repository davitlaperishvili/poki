<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <?php wp_head(); ?>
  </head>
<body <?php body_class(); ?> >

<?php 
	$phoneVisible = get_field('phone_number', 'option');
	$phone = preg_replace("/[^0-9]/", "", $phoneVisible);
	$email = get_field('email', 'option');
?>
<div class="progress"><div class="progress__bar"></div></div>
    <!-- Google Tag Manager (noscript) -->
<div class="body-wrapper" style="isolation: isolate;">

<?php include(TEMPLATEPATH.'/blocks/sidebar.php'); ?>
<header class="header">
  <?php include(TEMPLATEPATH.'/blocks/header-menu.php'); ?>
  
</header>