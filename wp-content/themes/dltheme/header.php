<!DOCTYPE html>
<html lang="en">
  <head>
    <?php 
      $phoneVisible = get_field('phone_number', 'option');
      $phone = preg_replace("/[^0-9]/", "", $phoneVisible);
      $email = get_field('email', 'option');
      $theme_gradient_start = get_field('theme_gradient_start', 'option');
      $theme_gradient_end = get_field('theme_gradient_end', 'option');
      $site_logo = get_field('site_logo', 'option');
      $site_favicon = get_field('site_favicon', 'option');
    ?>
    <style>
      :root {
        --themeGradStart: <?php echo $theme_gradient_start ?>;
        --themeGradEnd: <?php echo $theme_gradient_end ?>;
      }
      @media screen and (max-width: 992px){
        .best-slots__container{
          background-image: none !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
      }
    </style>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
	  <link rel="shortcut icon" href="<?php echo $site_favicon['url'] ?>">
    <?php wp_head(); ?>
  </head>
<body <?php body_class(); ?> >


<div class="progress"><div class="progress__bar"></div></div>
    <!-- Google Tag Manager (noscript) -->
<div class="body-wrapper" style="isolation: isolate;">

<?php include(TEMPLATEPATH.'/blocks/sidebar.php'); ?>
<header class="header">
  <?php include(TEMPLATEPATH.'/blocks/header-menu.php'); ?>
  
</header>