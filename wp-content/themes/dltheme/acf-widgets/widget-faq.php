
   <?php  
        $section_title = get_sub_field('section_title'); 
        $faq_list = get_sub_field('faq_list'); 
        
        $rowIndex = get_row_index();
    ?>
    
    <section class="faq" id="content<?php echo $rowIndex ?>">
      <div class="container faq-container">
        <div class="row">
          <div class="col-12"><h3 class="faq__title"><?php echo $section_title ?></h3></div>
          <div class="faq-accordion col-12">
            <?php 
              foreach($faq_list as $faq ){
                ?>
                  <div class="faq-accordion__card">
                    <div class="faq-accordion__title">
                      <p><?php echo $faq['question'] ?></p>
                    </div>
                    <div class="faq-accordion__panel">
                      <hr class="faq-accordion__separated-line" />
                      <p><?php echo $faq['answer'] ?></p>
                    </div>
                  </div>
                <?php
              }
            ?>
          </div>
        </div>
      </div>
    </section>

