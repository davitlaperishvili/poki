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
          include(TEMPLATEPATH.'/acf-widgets/widget-slots_list.php');
        
        elseif( get_row_layout() == 'benefits_slider_1' ):
          include(TEMPLATEPATH.'/acf-widgets/widget-benefits_slider1.php');
        
        elseif( get_row_layout() == 'benefits_slider_2' ):
          include(TEMPLATEPATH.'/acf-widgets/widget-benefits_slider2.php');
        
        elseif( get_row_layout() == 'casinos' ):
          include(TEMPLATEPATH.'/acf-widgets/widget-casinos.php');
        
        elseif( get_row_layout() == 'faq' ):
          include(TEMPLATEPATH.'/acf-widgets/widget-faq.php');
        
        elseif( get_row_layout() == 'general_text' ):
          include(TEMPLATEPATH.'/acf-widgets/widget-general_text.php');
        
        elseif( get_row_layout() == 'text_block' ):
          include(TEMPLATEPATH.'/acf-widgets/widget-text_block.php');

        endif;
      endwhile;
    else :
    endif;
  ?>
  <section class="reviews">
    <div class="gradient">
      <div class="gradient-background"></div>
      <div class="gradient-left-side"></div>
      <div class="gradient-right-side"></div>
    </div>
    <div class="container reviews__container">
      <div class="row flex-justify-center">
        <div class="col-12 col-md-6 col-lg-8">
          <div
            class="reviews-card flex flex-align-stretch flex-justify-between"
          >
            <div class="reviews-card__image-wrapper flex-shrink">
              <picture
                class="render-image flex flex-align-center flex-justify-center picture-image-"
              >
                <source
                  type="image/webp"
                  data-srcset="https://pokieslab.net/wp-content/uploads/image-webp/henry-williams-pokieslab-ceo.webp"
                />
                <source
                  type="image/png"
                  data-srcset="https://pokieslab.net/wp-content/uploads/henry-williams-pokieslab-ceo.png"
                />
                <img
                  alt="Henry Williams CEO PokiesLAB"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  width="200"
                  height="200"
                  title="henry williams pokieslab ceo"
                  class="lazy"
                  data-original="https://pokieslab.net/wp-content/uploads/henry-williams-pokieslab-ceo.png"
                />
              </picture>
              <noscript
                ><img
                  alt="Henry Williams CEO PokiesLAB"
                  src="https://pokieslab.net/wp-content/uploads/henry-williams-pokieslab-ceo.png"
                  width="200"
                  height="200"
                  title="henry williams pokieslab ceo"
                  class="lazy"
              /></noscript>
            </div>
            <div class="reviews-card__background">
              <div class="reviews-card__name">Henry Williams</div>
              <p class="reviews-card__text">
                Hello, Aussies! As a founder of PokiesLAB, I'm glad to get
                dozens of positive reviews from players which inspire me and
                our team to do uttermost to make you happy every day more!
                ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<?php get_footer(); ?>