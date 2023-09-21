
   <?php  
        $section_title = get_sub_field('section_title'); 
        $slots_list_config = get_sub_field('slots_list_config'); 
        $slots_list = get_sub_field('slots_list'); 
        $rowIndex = get_row_index();


    ?>
    
    <section class="dl_slots_list" id="content<?php echo $rowIndex ?>">
      <div class="container header__conbest-online-pokiestainer">
        <div class="row best-online-pokies">
          <div class="col-12 col-md-12">
            <h3 class="best-online-pokies__title">
              Australian Online Casino Reviews 2023
            </h3>
          </div>
          <?php 
            if($slots_list_config['choose_slots'] == "manual" && $slots_list){
              ?>
                <div class="col-12 slots-items flex flex-align-stretch flex-justify-start flex-wrap" >
                  <?php 
                    foreach ($slots_list as $key => $slot) {
                      $slotID = $slot->ID;
                      $slotInfo = get_field("slot_info",$slotID);
                      ?>
                        <div class="game-item">
                          <div class="game-item-cover">
                            <a
                              class="game-item-link"
                              href="<?php echo get_the_permalink($slotID) ?>"
                            >
                              <div class="game">
                                <picture
                                  class="render-image flex flex-align-center flex-justify-center picture-image- game__image"
                                >
                                  <source
                                    type="image/webp"
                                    media="(max-width: 450px)"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <source
                                    type="image/webp"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <source
                                    type="image/png"
                                    media="(max-width: 450px)"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <source
                                    type="image/png"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <img
                                    alt="<?php echo get_the_title($slotID) ?>"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                    width="360"
                                    height="271"
                                    title="<?php echo get_the_title($slotID) ?>"
                                    class="lazy game__image"
                                    data-original="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?> 450w"
                                  />
                                </picture>
                                <noscript>
                                  <img
                                    alt="<?php echo get_the_title($slotID) ?>"
                                    src="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                    width="360"
                                    height="271"
                                    title="<?php echo get_the_title($slotID) ?>"
                                    class="lazy game__image"
                                  />
                                </noscript>
                                <div class="game__container">
                                  <button class="button__primary-1 game__button">
                                    <span
                                      style="
                                        display: flex;
                                        text-decoration: none;
                                        color: inherit;
                                        justify-content: center;
                                        align-items: center;
                                      "
                                      data-title="Play Free"
                                    ></span>
                                  </button>
                                  <div class="game__cutting-image-line">
                                    <div class="game__cutting-image-line-item"></div>
                                  </div>
                                  <div class="game__content">
                                    <p class="game__title"><?php echo get_the_title($slotID) ?></p>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div class="game__info">
                              <div>
                                <p class="game__text">Reels</p>
                                <p class="game__text"><?php echo $slotInfo['reels'] ?></p>
                              </div>
                              <div>
                                <p class="game__text">Paylines</p>
                                <p class="game__text"><?php echo $slotInfo['paylines'] ?></p>
                              </div>
                              <div>
                                <p class="game__text">RTP</p>
                                <p class="game__text"><?php echo $slotInfo['rtp'] ?></p>
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
            if($slots_list_config['choose_slots'] == "all"){
              $slotsPosts = get_posts( array(
                'numberposts' => 6,
                'post_type'   => 'slots',
                'suppress_filters' => true,
              ) );
              
              global $post;
              
              ?>
                <div class="col-12 slots-items flex flex-align-stretch flex-justify-start flex-wrap" >
                  <?php
                    foreach( $slotsPosts as $post ){
                      setup_postdata( $post );
                      $slotID = $post->ID;
                      $slotInfo = get_field("slot_info",$slotID);
                      ?>
                        <div class="game-item">
                          <div class="game-item-cover">
                            <a
                              class="game-item-link"
                              href="<?php echo get_the_permalink($slotID) ?>"
                            >
                              <div class="game">
                                <picture
                                  class="render-image flex flex-align-center flex-justify-center picture-image- game__image"
                                >
                                  <source
                                    type="image/webp"
                                    media="(max-width: 450px)"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <source
                                    type="image/webp"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <source
                                    type="image/png"
                                    media="(max-width: 450px)"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <source
                                    type="image/png"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                  />
                                  <img
                                    alt="<?php echo get_the_title($slotID) ?>"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                    width="360"
                                    height="271"
                                    title="<?php echo get_the_title($slotID) ?>"
                                    class="lazy game__image"
                                    data-original="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                    data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?> 450w"
                                  />
                                </picture>
                                <noscript>
                                  <img
                                    alt="<?php echo get_the_title($slotID) ?>"
                                    src="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                                    width="360"
                                    height="271"
                                    title="<?php echo get_the_title($slotID) ?>"
                                    class="lazy game__image"
                                  />
                                </noscript>
                                <div class="game__container">
                                  <button class="button__primary-1 game__button">
                                    <span
                                      style="
                                        display: flex;
                                        text-decoration: none;
                                        color: inherit;
                                        justify-content: center;
                                        align-items: center;
                                      "
                                      data-title="Play Free"
                                    ></span>
                                  </button>
                                  <div class="game__cutting-image-line">
                                    <div class="game__cutting-image-line-item"></div>
                                  </div>
                                  <div class="game__content">
                                    <p class="game__title"><?php echo get_the_title($slotID) ?></p>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <div class="game__info">
                              <div>
                                <p class="game__text">Reels</p>
                                <p class="game__text"><?php echo $slotInfo['reels'] ?></p>
                              </div>
                              <div>
                                <p class="game__text">Paylines</p>
                                <p class="game__text"><?php echo $slotInfo['paylines'] ?></p>
                              </div>
                              <div>
                                <p class="game__text">RTP</p>
                                <p class="game__text"><?php echo $slotInfo['rtp'] ?></p>
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

          ?>
          <?php 
            if($slots_list_config['choose_slots'] == "all"){
              ?>
                <div class="col-12 best-online-pokies__more-slots flex flex-justify-center" >
                  <button
                    class="button__secondary-1 js-load-more-slots"
                    data-load-more
                    data-args='{"post_type":"post","post_status":"publish","post__in":[421,5134,415,487,386,376,133,412,136,365,318,370,530,360,5408,401,397,7452,526,3593,3410,838,407,5398],"orderby":"post__in","custom_posts_per_page":6,"paged":1}'
                    data-insert-before=".best-online-pokies__more-slots"
                    data-current-page="1"
                    data-lazy="1"
                    data-template="slot-pattern"
                    data-selector='[class~="game-item"]'
                    data-max-pages="4"
                    data-language="en"
                  >
                    <span>More slots</span>
                  </button>
                </div>
              <?php
                
            }
          ?>
          
        </div>
      </div>
    </section>
