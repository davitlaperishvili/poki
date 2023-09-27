
   <?php  
        $heroTitle = get_sub_field('hero_title'); 
        $heroText = get_sub_field('hero_text'); 
        $heroList = get_sub_field('hero_list'); 
        $casinoBlock = get_sub_field('casino_block'); 
        $heroBg = get_sub_field('hero_bg'); 
        
        $rowIndex = get_row_index();


    ?>
    
    <section class="casino_hero casino-page-header" id="content<?php echo $rowIndex ?>" style="position: relative; z-index: -1;">
      <div class="header-bn ">
        <div class="gradient">
          <div class="gradient-background" style="background: linear-gradient(90deg,<?php echo $heroBg['gradient_start'] ? $heroBg['gradient_start'] : "var(--themeGradStart)" ?>,<?php echo $heroBg['gradient_end'] ? $heroBg['gradient_end'] : "var(--themeGradEnd)" ?>)"></div>
          <div class="gradient-left-side" style="background-image: url(<?php echo $heroBg['bg_left_image'] && $heroBg['bg_left_image']['url'] ? $heroBg['bg_left_image']['url'] : "" ?>);"></div>
          <div class="gradient-right-side" style="background-image: url(<?php echo $heroBg['bg_right_image'] && $heroBg['bg_right_image']['url'] ? $heroBg['bg_right_image']['url'] : "" ?>);"></div>
        </div>
        <div class="container header__container">
          <div class="row">
            <div class="col-12">
              <ul class="breadcrumbs flex flex-align-center flex-justify-start flex-wrap" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem" class="breadcrumbs-home">
                  <a itemprop="item" href="/" class="flex flex-align-center flex-justify-start">
                    <i class="fa-home"></i>
                    <meta itemprop="name" content="pokieslab.net" />
                  </a>
                  <meta itemprop="position" content="1" />
                  <span class="breadcrumbs-divider">/</span>
                </li>
                <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                  <a itemprop="item" href="https://pokieslab.net/online-casinos/">
                    <span itemprop="name">Online Casinos: Australia</span>
                  </a>
                  <meta itemprop="position" content="2" />
                  <span class="breadcrumbs-divider">/</span>
                </li>
                <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                  <span itemprop="name">StayCasino Review </span>
                  <meta itemprop="position" content="3" />
                  <meta itemprop="item" content="https://pokieslab.net/online-casinos/staycasino/" />
                </li>
              </ul>
              <div class="casino-page-top flex flex-justify-between flex-align-stretch flex-wrap">
                <div class="casino-page-top-sidebar flex flex-align-stretch flex-justify-center">
                  <div class="casino-page-top-block flex flex-direction-column flex-align-center flex-justify-between">
                    <div class="casino-page-top-block-top flex flex-direction-column flex-align-center">
                      <div class="casino-page-top-block-image">
                        <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                          <source type="image/svg+xml" data-srcset="<?php echo $casinoBlock['casino_img']['url'] ?>" srcset="<?php echo $casinoBlock['casino_img']['url'] ?>" />
                          <img
                            alt="<?php echo $casinoBlock['casino_img']['alt'] ?>"
                            src="<?php echo $casinoBlock['casino_img']['url'] ?>"
                            width="250"
                            height="148"
                            class="lazy entered webp-support loaded"
                            data-original="<?php echo $casinoBlock['casino_img']['url'] ?>"
                            data-ll-status="loaded"
                          />
                        </picture>
                        <noscript>
                          <img alt="<?php echo $casinoBlock['casino_img']['alt'] ?>" src="<?php echo $casinoBlock['casino_img']['url'] ?>" width="250" height="148" class="lazy" />
                        </noscript>
                      </div>
                      <div class="casino-page-top-block-accept flex flex-align-center flex-justify-start">
                        <div class="casino-page-top-block-accept-image">
                          <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                            <source type="image/png" data-srcset="<?php echo $casinoBlock['flag_img']['url'] ?>" srcset="<?php echo $casinoBlock['flag_img']['url'] ?>" />
                            <img
                              alt=""
                              src="<?php echo $casinoBlock['flag_img']['url'] ?>"
                              width="24"
                              height="24"
                              class="lazy entered webp-support loaded"
                              data-original="<?php echo $casinoBlock['flag_img']['url'] ?>"
                              data-ll-status="loaded"
                            />
                          </picture>
                          <noscript>
                            <img alt="" src="<?php echo $casinoBlock['flag_img']['url'] ?>" width="24" height="24" class="lazy" />
                          </noscript>
                        </div>
                        <div class="casino-page-top-block-accept-content"><?php echo $casinoBlock['flag_text'] ?></div>
                      </div>
                    </div>
                    <div class="casino-page-top-block-bottom">
                      <div class="casino-page-top-block-welcome-bonus"><?php echo $casinoBlock['block_title'] ?></div>
                      <button class="casino-page-top-block-button button__primary-3 flex flex-justify-center">
                        <a href="<?php echo $casinoBlock['block_button']['url'] ?>" target="_blank" rel="nofollow noopener" style="display: flex; text-decoration: none; color: inherit; justify-content: center; align-items: center;"><?php echo $casinoBlock['block_button']['title'] ?></a>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="casino-page-top-content flex flex-direction-column flex-justify-start flex-align-stretch">
                  <h1 class="casino-page-top-content-title"><?php echo $heroTitle ?></h1>
                  <div class="casino-page-top-content-description">
                    <p><?php echo $heroText ?></p>
                  </div>
                  <div class="casino-page-top-content-info flex flex-direction-column flex-justify-start flex-align-stretch">
                    <?php 
                    if($heroList){
                      foreach( $heroList as $item ){
                        ?>
                          <div class="casino-page-top-content-info-item flex flex-align-start flex-justify-start">
                            <div class="casino-page-top-content-info-item-label"><?php echo $item['title'] ?></div>
                            <div class="casino-page-top-content-info-item-value"><?php echo $item['value'] ?></div>
                          </div>
                        <?php
                      }
                    }
                    ?>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

