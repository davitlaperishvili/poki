<?php get_header(); ?>
<?php 
  $sections = get_field('sections', 'option');
?>
  <?php 
    if( have_rows('sections', 'option') ):
      // Loop through rows.
      while ( have_rows('sections', 'option') ) : the_row();
        // Case: Paragraph layout.
        renderACF();
      endwhile;
    else :
    endif;
  ?>
  
</div>

<?php get_footer(); ?>