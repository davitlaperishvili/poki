
   <?php  
      $benefits_style = get_sub_field('benefits_style');
      $section_title = get_sub_field('section_title');
      $benefits_list = get_sub_field('benefits_list');
      $rowIndex = get_row_index();
    ?>
    <?php 
      if($benefits_style == "style_1"){
        ?>
          <section class="how-to-pick-real-money-slot-with-our-reviews" style="background: linear-gradient(90deg, var(--themeGradStart),var(--themeGradEnd))">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h2 class="how-to-pick-real-money-slot-with-our-reviews__title flex flex-justify-center flex-align-center"><?php echo $section_title ?></h2>
                </div>
                <div class="col-12">
                  <div class="row how-to-pick-real-money-slot-with-our-reviews-list">
                    <?php 
                      foreach($benefits_list as $benefit ){
                        ?>
                          <div class="col-12 col-md-6 col-lg-4">
                            <div class="how-to-pick-real-money-slot-with-our-reviews-list__card">
                              <picture class="render-image flex flex-align-center flex-justify-center picture-image- how-to-pick-real-money-slot-with-our-reviews-list__image">
                                <source type="image/svg+xml" data-srcset="<?php echo $benefit['icon']['url'] ?>" />
                                <img
                                  alt="<?php echo $benefit['icon']['alt'] ?>"
                                  src="<?php echo $benefit['icon']['url'] ?>"
                                  width="100"
                                  height="120"
                                  class="lazy how-to-pick-real-money-slot-with-our-reviews-list__image"
                                  data-original="<?php echo $benefit['icon']['url'] ?>"
                                />
                              </picture>
                              <noscript>
                                <img
                                  alt="<?php echo $benefit['icon']['alt'] ?>"
                                  src="<?php echo $benefit['icon']['url'] ?>"
                                  width="100"
                                  height="120"
                                  class="lazy how-to-pick-real-money-slot-with-our-reviews-list__image"
                                />
                              </noscript>
                              <span class="how-to-pick-real-money-slot-with-our-reviews-list__title"><?php echo $benefit['title'] ?></span>
                              <div class="how-to-pick-real-money-slot-with-our-reviews-list__text"><?php echo $benefit['text'] ?></div>
                            </div>
                          </div>
                        <?php
                      }
                    ?>
                  </div>
                </div>
              </div>
            </div>
          </section>
        <?php
      }else{
        ?>
          <section class="real-money-bonuses-real-money-page">
            <div class="container real-money-bonuses-real-money-page__container">
              <div class="row flex-justify-start">
                <div class="col-12 col-lg-6 flex flex-justify-start">
                  <h2 class="real-money-bonuses-real-money-page__title"><?php echo $section_title ?></h2>
                </div>
                <?php 
                  foreach($benefits_list as $benefit){
                    ?>
                      <div class="col-12 col-md-6 col-lg-12 real-money-bonuses-real-money-page__card-wrapper">
                        <div id="real-money-bonuses-real-money-page-card-1" class="real-money-bonuses-real-money-page-card">
                          <div class="row">
                            <div class="col-12 col-lg-3 flex flex-justify-center flex-align-center">
                              <picture class="render-image flex flex-align-center flex-justify-center picture-image- real-money-bonuses-real-money-page-card__image">
                                <source type="image/svg+xml" data-srcset="<?php echo $benefit['icon']['url'] ?>" />
                                <img
                                  alt="<?php echo $benefit['icon']['alt'] ?>"
                                  src="<?php echo $benefit['icon']['url'] ?>"
                                  width="120"
                                  height="120"
                                  class="lazy real-money-bonuses-real-money-page-card__image"
                                  data-original="<?php echo $benefit['icon']['url'] ?>"
                                />
                              </picture>
                              <noscript>
                                <img
                                  alt="<?php echo $benefit['icon']['alt'] ?>"
                                  src="<?php echo $benefit['icon']['url'] ?>"
                                  width="120"
                                  height="120"
                                  class="lazy real-money-bonuses-real-money-page-card__image"
                                />
                              </noscript>
                            </div>
                            <div class="col-12 col-lg-9">
                              <div class="real-money-bonuses-real-money-page-card__content">
                                <h4 class="real-money-bonuses-real-money-page-card__title"><?php echo $benefit['title'] ?></h4>
                                <div class="real-money-bonuses-real-money-page-card__text"><?php echo $benefit['text'] ?></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <?php
                  }
                ?>
              </div>
            </div>
          </section>
        <?php
      }
    ?>

