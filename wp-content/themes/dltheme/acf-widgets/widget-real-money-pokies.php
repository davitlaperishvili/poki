
   <?php  
        $section_title = get_sub_field('section_title'); 
        $white_title = get_sub_field('white_title'); 
        $casinos_list_config = get_sub_field('casinos_list_config'); 
        $casinos_list = get_sub_field('casinos_list');  
        $section_button = get_sub_field('section_button');  
        $rowIndex = get_row_index();


    ?>
    
    <section class="dl_casinos_list" id="content<?php echo $rowIndex ?>">
      <div class="container header__container">
        <div class="row flex-justify-center">
          <div class="col-12 flex flex-justify-start flex-align-center">
            <h2 class=" <?php echo $white_title ? "online-casino-real-money__title" : "best-australian-online-pokies-real-money__title" ?>"><?php echo $section_title ?></h2>
          </div>
        </div>
        <?php 
          if($casinos_list_config['choose_casinos'] == "manual" && $casinos_list){
            ?>
              <div class="casino-table-items">
                <?php 
                  foreach($casinos_list as $casino) {
                    $casinoID = $casino->ID;
                    $casinoInfo = get_field("casino_info", $casinoID);
                    ?>
                      <div class="casino-table-item flex flex-justify-between flex-align-stretch">
                        <div class="casino-table-item-image flex flex-align-center flex-justify-center" style="background-color: <?php echo $casinoInfo['casino_image_bg_color'] ?>">
                          <picture class="render-image flex flex-align-center flex-justify-center picture-image- casino-table-item-image-img">
                            <source type="image/svg+xml" data-srcset="<?php echo get_the_post_thumbnail_url($casinoID) ?>" />
                            <img
                              alt=""
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              width="200"
                              height="150"
                              title="richard-casino200x150"
                              class="lazy casino-table-item-image-img"
                              data-original="<?php echo get_the_post_thumbnail_url($casinoID) ?>"
                            />
                          </picture>
                          <noscript>
                            <img
                              alt=""
                              src="<?php echo get_the_post_thumbnail_url($casinoID) ?>"
                              width="200"
                              height="150"
                              title="richard-casino200x150"
                              class="lazy casino-table-item-image-img"
                            />
                          </noscript>
                        </div>
                        <div class="casino-table-item-description-cover flex flex-align-stretch flex-justify-between">
                          <div class="casino-table-item-description-info flex flex-direction-column flex-align-stretch flex-justify-center">
                            <div class="flex flex-align-stretch flex-justify-start flex-direction-column">
                              <div class="casino-table-item-title"><?php echo $casinoInfo['title'] ?></div>
                              <div class="casino-table-item-info flex flex-align-stretch flex-justify-start flex-wrap">
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="<?php echo $casinoInfo['item1_image']['url'] ?>" />
                                    <img
                                      alt="slot-machine"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="<?php echo $casinoInfo['item1_image']['url'] ?>"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="slot-machine" src="<?php echo $casinoInfo['item1_image']['url'] ?>" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p><?php echo $casinoInfo['item1_value'] ?></p>
                                </div>
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="<?php echo $casinoInfo['item2_image']['url'] ?>" />
                                    <img
                                      alt="gift-box"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="<?php echo $casinoInfo['item2_image']['url'] ?>"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="gift-box" src="<?php echo $casinoInfo['item2_image']['url'] ?>" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p><?php echo $casinoInfo['item2_value'] ?></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="casino-table-item-description-button flex flex-align-center flex-justify-center flex-direction-column">
                            <div class="flex flex-align-stretch flex-justify-start flex-direction-column">
                              <button class="casino-table-item-description-button-item button__primary-3">
                                <a
                                  href="<?php echo $casinoInfo['casino_button']['url'] ?>"
                                  target="_blank"
                                  rel="nofollow noopener"
                                  style="display: flex; text-decoration: none; color: inherit; justify-content: center; align-items: center"
                                  ><?php echo $casinoInfo['casino_button']['title'] ?></a
                                >
                              </button>
                              <div class="casino-table-item-description-button-item-more-info">
                                <span><?php echo $casinoInfo['casino_name'] ?></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <?php
                  }
                ?>
              </div>
            <?php
          }
          if($casinos_list_config['choose_casinos'] == "all"){
            $casinoPosts = get_posts( array(
              'numberposts' => -1,
              'post_type'   => 'real-money-pokies',
              'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
            ) );
            
            global $post;
            
            ?>
              <div class="casino-table-items">
                <?php 
                  foreach($casinoPosts as $casino) {
                    setup_postdata( $casino );
                    $casinoID = $casino->ID;
                    $casinoInfo = get_field("casino_info", $casinoID);
                    ?>
                      <div class="casino-table-item flex flex-justify-between flex-align-stretch">
                        <div class="casino-table-item-image flex flex-align-center flex-justify-center" style="background-color: <?php echo $casinoInfo['casino_image_bg_color'] ?>">
                          <picture class="render-image flex flex-align-center flex-justify-center picture-image- casino-table-item-image-img">
                            <source type="image/svg+xml" data-srcset="<?php echo get_the_post_thumbnail_url($casinoID) ?>" />
                            <img
                              alt=""
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              width="200"
                              height="150"
                              title="richard-casino200x150"
                              class="lazy casino-table-item-image-img"
                              data-original="<?php echo get_the_post_thumbnail_url($casinoID) ?>"
                            />
                          </picture>
                          <noscript>
                            <img
                              alt=""
                              src="<?php echo get_the_post_thumbnail_url($casinoID) ?>"
                              width="200"
                              height="150"
                              title="richard-casino200x150"
                              class="lazy casino-table-item-image-img"
                            />
                          </noscript>
                        </div>
                        <div class="casino-table-item-description-cover flex flex-align-stretch flex-justify-between">
                          <div class="casino-table-item-description-info flex flex-direction-column flex-align-stretch flex-justify-center">
                            <div class="flex flex-align-stretch flex-justify-start flex-direction-column">
                              <div class="casino-table-item-title"><?php echo $casinoInfo['title'] ?></div>
                              <div class="casino-table-item-info flex flex-align-stretch flex-justify-start flex-wrap">
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="<?php echo $casinoInfo['item1_image']['url'] ?>" />
                                    <img
                                      alt="slot-machine"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="<?php echo $casinoInfo['item1_image']['url'] ?>"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="slot-machine" src="<?php echo $casinoInfo['item1_image']['url'] ?>" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p><?php echo $casinoInfo['item1_value'] ?></p>
                                </div>
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="<?php echo $casinoInfo['item2_image']['url'] ?>" />
                                    <img
                                      alt="gift-box"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="<?php echo $casinoInfo['item2_image']['url'] ?>"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="gift-box" src="<?php echo $casinoInfo['item2_image']['url'] ?>" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p><?php echo $casinoInfo['item2_value'] ?></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="casino-table-item-description-button flex flex-align-center flex-justify-center flex-direction-column">
                            <div class="flex flex-align-stretch flex-justify-start flex-direction-column">
                              <button class="casino-table-item-description-button-item button__primary-3">
                                <a
                                  href="<?php echo $casinoInfo['casino_button']['url'] ?>"
                                  target="_blank"
                                  rel="nofollow noopener"
                                  style="display: flex; text-decoration: none; color: inherit; justify-content: center; align-items: center"
                                  ><?php echo $casinoInfo['casino_button']['title'] ?></a
                                >
                              </button>
                              <div class="casino-table-item-description-button-item-more-info">
                                <span><?php echo $casinoInfo['casino_name'] ?></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <?php
                  }
                ?>
              </div>
            <?php
            wp_reset_postdata();
          }
        ?>
        
        <?php 
          if($casinos_list_config['choose_casinos'] != "all" ){
            ?>
              <div class="col-12 best-australian-online-pokies-real-money__link-button flex flex-justify-center">
                <button class="button__secondary-1 color-basic-1">
                  <a href="<?php echo $section_button['url'] ?>" style="
                      display: flex;
                      text-decoration: none;
                      color: inherit;
                      justify-content: center;
                      align-items: center;
                    "><?php echo $section_button['title'] ?></a>
                </button>
              </div>
            <?php
          }
        ?>
      </div>
    </section>
