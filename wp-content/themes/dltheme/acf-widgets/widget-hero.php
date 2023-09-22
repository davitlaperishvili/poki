
   <?php  
        $heroTitle = get_sub_field('hero_title'); 
        $heroText = get_sub_field('hero_text'); 
        $heroButtons = get_sub_field('hero_buttons'); 
        $hideOnDesktop = get_sub_field('hide_on_desktop'); 
        $heroBg = get_sub_field('hero_bg'); 
        $overlayNextBlock = get_sub_field('overlay_next_block');
        
        $rowIndex = get_row_index();
    ?>
    
    <section class="hero <?php echo $overlayNextBlock ? "" : "header-page" ?>" id="content<?php echo $rowIndex ?>" style="position: relative; z-index: -1;">
      <div class="header-bn">
        <div class="gradient gradient-top">
          <div class="gradient-background" style="background: linear-gradient(90deg,<?php echo $heroBg['gradient_start'] ? $heroBg['gradient_start'] : "var(--themeGradStart)" ?>,<?php echo $heroBg['gradient_end'] ? $heroBg['gradient_end'] : "var(--themeGradEnd)" ?>)"></div>
          <div class="gradient-left-side" style="background-image: url(<?php echo $heroBg['bg_left_image'] && $heroBg['bg_left_image']['url'] ? $heroBg['bg_left_image']['url'] : "" ?>);"></div>
          <div class="gradient-right-side" style="background-image: url(<?php echo $heroBg['bg_right_image'] && $heroBg['bg_right_image']['url'] ? $heroBg['bg_right_image']['url'] : "" ?>);"></div>
          <div class="gradient-main all" style="background-image: url(<?php echo $heroBg['bg_main_image'] && $heroBg['bg_main_image']['url'] ? $heroBg['bg_main_image']['url'] : "" ?>);"></div>
        </div>
        <div class="container header__conbest-online-pokiestainer">
          <div class="row">
            <div class="col-12 header__title">
              <h1 class="header__title">
                <?php echo $heroTitle ?>
              </h1>
            </div>
            <div class="col-12 col-lg-7 header__info">
              <p class="header__text"><?php echo $heroText ?></p>
              <div class="<?php echo $hideOnDesktop ? "real-money-header__actions" : "" ?>">
                <?php 
                  if($heroButtons){
                    foreach($heroButtons as $btn) {
                      $btnStyle = $btn['style'];
                      ?>
                        <button class="header__button <?php echo $btnStyle ?>">
                          <a
                            href="<?php echo $btn['url'] ?>"
                            style="
                              display: flex;
                              text-decoration: none;
                              color: inherit;
                              justify-content: center;
                              align-items: center;
                            "
                            ><i class="fa-left-arrow"></i><?php echo $btn['title'] ?></a
                          >
                        </button>
                      <?php
                    }
                  }
                ?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

