<?php 
  // Template Name: Page Builder
?>
<?php get_header(); ?>
  <?php 
    if( have_rows('sections') ):
      // Loop through rows.
      while ( have_rows('sections') ) : the_row();
        // Case: Paragraph layout.
        if( get_row_layout() == 'hero' ):
          include(TEMPLATEPATH.'/acf-widgets/widget-hero.php');
        
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

        endif;
      endwhile;
    else :
    endif;
  ?>
  
</div>

<?php get_footer(); ?>