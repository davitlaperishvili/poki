
    <?php  
        $section_title = get_sub_field('section_title'); 
        $section_text = get_sub_field('section_text'); 
        $section_image = get_sub_field('section_image');  
        
        $rowIndex = get_row_index();
    ?>
    
    <section class="best-online-slots-for-real-money" id="content<?php echo $rowIndex ?>">
      <div class="container best-online-slots-for-real-money__container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5 flex flex-justify-center flex-align-center">
            <picture class="render-image flex flex-align-center flex-justify-center picture-image- best-online-slots-for-real-money__image">
              <img
                decoding="async"
                loading="lazy"
                class="lazy best-online-slots-for-real-money__image entered webp-support loaded"
                src="<?php echo $section_image['url'] ?>"
                alt="<?php echo $section_image['alt'] ?>"
                width="344"
                height="270"
                data-original="<?php echo $section_image['url'] ?>"
                data-ll-status="loaded"
              />
            </picture>
          </div>
          <div class="col-12 col-md-6 col-lg-7">
            <h2 class="best-online-slots-for-real-money__title"><?php echo $section_title ?></h2>
            <div class="best-online-slots-for-real-money__text"><?php echo $section_text ?></div>
          </div>
        </div>
      </div>
    </section>


