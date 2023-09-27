<?php get_header(); ?>
<?php 
$term = get_queried_object(); 
?>
  <?php 
    if( have_rows('sections',$term) ):
      // Loop through rows.
      while ( have_rows('sections',$term) ) : the_row();
        // Case: Paragraph layout.
        renderACF();
      endwhile;
    else :
    endif;
  ?>
  
</div>

<?php get_footer(); ?>