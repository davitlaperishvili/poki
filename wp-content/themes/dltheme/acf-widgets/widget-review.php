
   <?php  
        $section_title = get_sub_field('section_title'); 
        $section_text = get_sub_field('section_text'); 
        $section_image = get_sub_field('section_image'); 
        $section_bg = get_sub_field('section_bg');
        
        $rowIndex = get_row_index();
    ?>
    
    <section class="reviews" id="content<?php echo $rowIndex ?>">
      <div class="gradient">
        <div class="gradient-background" style="background: linear-gradient(90deg,<?php echo $section_bg['gradient_start'] ? $section_bg['gradient_start'] : "var(--themeGradStart)" ?>,<?php echo $section_bg['gradient_end'] ? $section_bg['gradient_end'] : "var(--themeGradEnd)" ?>)"></div>
        <div class="gradient-left-side" style="background-image: url(<?php echo $heroBg['bg_left_image'] && $heroBg['bg_left_image']['url'] ? $heroBg['bg_left_image']['url'] : "" ?>);"></div>
        <div class="gradient-right-side" style="background-image: url(<?php echo $heroBg['bg_right_image'] && $heroBg['bg_right_image']['url'] ? $heroBg['bg_right_image']['url'] : "" ?>);"></div>
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
                    type="image/png"
                    data-srcset="<?php echo $section_image['url'] ?>"
                  />
                  <img
                    alt="<?php echo $section_image['alt'] ?>"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    width="200"
                    height="200"
                    title="henry williams pokieslab ceo"
                    class="lazy"
                    data-original="<?php echo $section_image['url'] ?>"
                  />
                </picture>
                <noscript
                  ><img
                    alt="Henry Williams CEO PokiesLAB"
                    src="<?php echo $section_image['url'] ?>"
                    width="200"
                    height="200"
                    title="henry williams pokieslab ceo"
                    class="lazy"
                /></noscript>
              </div>
              <div class="reviews-card__background">
                <div class="reviews-card__name"><?php echo $section_title ?></div>
                <p class="reviews-card__text"><?php echo $section_text ?></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

