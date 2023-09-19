
   <?php  
        $benefits_list = get_sub_field('benefits_list'); 
        
        $rowIndex = get_row_index();
    ?>
    
    <section class="save-list benefits_slider version_1" id="content<?php echo $rowIndex ?>">
      <div class="container save-list__container">
        <div class="row safe-slots__list">
          <div class="slider-container flex flex-align-stretch">
            <?php 
              foreach($benefits_list as $benefit) {
                ?>
                  <div class="slider-item flex flex-align-stretch">
                    <div
                      id="save-list-item-1"
                      class="save-list__card flex flex-justify-center flex-direction-column flex-align-center"
                    >
                      <img
                        class="save-list__image save-list__icon lazy"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-save-list-item="<?php echo $benefit['icon']['url'] ?>"
                        data-save-list-item-hover="<?php echo $benefit['icon_hover']['url'] ?>"
                        width="120"
                        height="120"
                        alt="<?php echo $benefit['icon']['alt'] ?>"
                      />
                      <p class="save-list__text"><?php echo $benefit['text'] ?></p>
                    </div>
                  </div>
                <?php
              }
            ?>
          </div>
        </div>
      </div>
    </section>

