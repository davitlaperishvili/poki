
   <?php  
        $features_table = get_sub_field('features_table'); 
        $rowIndex = get_row_index();
    ?>
    
    <section class="bonus-features" id="content<?php echo $rowIndex ?>">
      <div class="container bonus-features__container">
        <div class="row">
          <?php 
            foreach($features_table as $feature_item ){
              ?>
                <div class="col-12 col-lg-4 col-md-6">
                  <div class="bonus-features-card">
                    <h3 class="bonus-features-card__title"><?php echo $feature_item['feature_title'] ?></h3>
                    <?php 
                      foreach($feature_item['feature_list'] as $feature){
                        ?>
                          <div class="bonus-features-card__text">
                            <p><?php echo $feature['feature_name'] ?></p>
                            <span><?php echo $feature['feature_value'] ?></span>
                          </div>
                        <?php
                      }
                    ?>
                  </div>
                </div>
              <?php
            }
          ?>
        </div>
      </div>
    </section>


