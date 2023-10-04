<?php get_header(); ?>
  <?php 
    if( have_rows('sections') ):
      // Loop through rows.
      while ( have_rows('sections') ) : the_row();
        // Case: Paragraph layout.
        renderACF();
      endwhile;
    else :
    endif;
  ?>
  
</div>

<?php get_footer(); ?>