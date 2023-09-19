
   <?php  
        $section_title = get_sub_field('section_title'); 
        $benefits_list = get_sub_field('benefits_list'); 
        
        $rowIndex = get_row_index();
    ?>
    
    <section class="how-we-rate-the-best-pokies benefits_slider version_2"  id="content<?php echo $rowIndex ?>">
      <div class="container how-we-rate-the-best-pokies__container">
        <div class="row flex-justify-center">
          <div class="col-12">
            <h2 class="how-we-rate-the-best-pokies__title"><?php echo $section_title ?></h2>
          </div>
          <div class="slider-container flex flex-align-stretch">
            <?php 
              foreach($benefits_list as $benefit){
                ?>
                  <div class="slider-item flex flex-align-stretch">
                    <div
                      class="how-we-rate-the-best-pokies-card flex flex-direction-column"
                    >
                      <div class="flex flex-justify-center flex-align-center">
                        <picture
                          class="render-image flex flex-align-center flex-justify-center picture-image- how-we-rate-the-best-pokies-card__image"
                        >
                          <source
                            type="image/svg+xml"
                            data-srcset="<?php echo $benefit['icon']['url'] ?>"
                          />
                          <img
                            alt="<?php echo $benefit['icon']['alt'] ?>"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            width="120"
                            height="120"
                            class="lazy how-we-rate-the-best-pokies-card__image"
                            data-original="<?php echo $benefit['icon']['url'] ?>"
                          />
                        </picture>
                        <noscript>
                          <img
                            alt=""
                            src="<?php echo $benefit['icon']['url'] ?>"
                            width="120"
                            height="120"
                            class="lazy how-we-rate-the-best-pokies-card__image"
                          />
                        </noscript>
                      </div>
                      <div
                        class="how-we-rate-the-best-pokies-card__content background"
                      >
                        <p class="how-we-rate-the-best-pokies-card__title"><?php echo $benefit['title']?></p>
                        <p class="how-we-rate-the-best-pokies-card__text"><?php echo $benefit['text']?></p>
                      </div>
                    </div>
                  </div>
                <?php
              }
            ?>
          </div>
        </div>
      </div>
    </section>

