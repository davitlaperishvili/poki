
   <?php  
        $section_title = get_sub_field('section_title'); 
        $section_text = get_sub_field('section_text'); 
        $section_bg = get_sub_field('section_bg'); 
        $image_first = get_sub_field('image_first'); 
        
        $rowIndex = get_row_index();
    ?>
    
    <section class="best-slots text_block safe-slots" id="content<?php echo $rowIndex ?>">
      <div class="best-slots-background kangaroo-background">
        <div class="best-slots-background-gradient kangaroo-background-gradient" style="background: linear-gradient(90deg,<?php echo $section_bg['gradient_start'] ? $section_bg['gradient_start'] : "#f5bf5d" ?>,<?php echo $section_bg['gradient_end'] ? $section_bg['gradient_end'] : "#e74c62" ?>)"></div>
        <div class="best-slots-background-hills lazy kangaroo-background-hills" style="background-image: url(<?php echo $section_bg['bg_image'] && $section_bg['bg_image']['url'] || "" ?>);"></div>
        <?php 
          if(!$image_first){
            ?>
              <div class="best-slots-background-image lazy" style="background-image: url(<?php echo $section_bg['main_image'] && $section_bg['main_image']['url'] || "" ?>);"></div>
            <?php
          }
        ?>
      </div>
      <div class="container safe-slots__container">
        <div class="row <?php echo $image_first ? "flex-justify-end" : " " ?>">
          <div class="col-12 col-xl-7">
            <h2 class="best-slots__title safe-slots__title"><?php echo $section_title ?></h2>
            <div class="best-slots__text  safe-slots__text"><?php echo $section_text ?></div>
          </div>
        </div>
      </div>
    </section>

