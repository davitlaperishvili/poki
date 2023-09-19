
   <?php  
        $section_title = get_sub_field('section_title'); 
        $white_title = get_sub_field('white_title'); 
        $casinos_list_config = get_sub_field('casinos_list_config'); 
        $casinos_list = get_sub_field('casinos_list');  
        $rowIndex = get_row_index();


    ?>
    
    <section class="dl_casinos_list" id="content<?php echo $rowIndex ?>">
      <div class="container header__container">
        <div class="row flex-justify-center">
          <div class="col-12 flex flex-justify-start flex-align-center">
            <h3 class=" <?php echo $white_title ? "online-casino-real-money__title" : "best-australian-online-pokies-real-money__title" ?>"><?php echo $section_title ?></h3>
          </div>
        </div>
        <?php 
          if($casinos_list_config['choose_casinos'] == "manual" && $casinos_list){
            ?>
              <div class="casino-table-items">
                <?php 
                  foreach($casinos_list as $casino) {
                    $casinoID = $casino->ID;
                    ?>
                      <div class="casino-table-item flex flex-justify-between flex-align-stretch">
                        <div class="casino-table-item-image flex flex-align-center flex-justify-center" style="background-color: #01281d">
                          <picture class="render-image flex flex-align-center flex-justify-center picture-image- casino-table-item-image-img">
                            <source type="image/svg+xml" data-srcset="https://pokieslab.net/wp-content/uploads/richard-casino200x150.svg" />
                            <img
                              alt=""
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              width="200"
                              height="150"
                              title="richard-casino200x150"
                              class="lazy casino-table-item-image-img"
                              data-original="https://pokieslab.net/wp-content/uploads/richard-casino200x150.svg"
                            />
                          </picture>
                          <noscript>
                            <img
                              alt=""
                              src="https://pokieslab.net/wp-content/uploads/richard-casino200x150.svg"
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
                              <div class="casino-table-item-title">AU$5000 + 300 Free Spins</div>
                              <div class="casino-table-item-info flex flex-align-stretch flex-justify-start flex-wrap">
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-slot-machine.svg" />
                                    <img
                                      alt="slot-machine"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-slot-machine.svg"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="slot-machine" src="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-slot-machine.svg" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p>3510 Online Pokies</p>
                                </div>
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-present.svg" />
                                    <img
                                      alt="gift-box"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-present.svg"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="gift-box" src="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-present.svg" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p>Cashback up to 20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="casino-table-item-description-button flex flex-align-center flex-justify-center flex-direction-column">
                            <div class="flex flex-align-stretch flex-justify-start flex-direction-column">
                              <button class="casino-table-item-description-button-item button__primary-3">
                                <a
                                  href="https://pokieslab.net/go/richard-casino/"
                                  target="_blank"
                                  rel="nofollow noopener"
                                  style="display: flex; text-decoration: none; color: inherit; justify-content: center; align-items: center"
                                  >PLAY NOW</a
                                >
                              </button>
                              <div class="casino-table-item-description-button-item-more-info">
                                <span>Richard Casino</span>
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
            $pagedCasino = (get_query_var('paged')) ? get_query_var('paged') : 1;
            $argsCasino = array('post_type' => 'casino', 'posts_per_page' => 6, 'paged' => $pagedCasino );
            $post_type_data_casino = new WP_Query($args);
            $casinoPosts = $post_type_data_casino->posts;
            // var_dump($slotPosts);
            // var_dump($post_type_data);
            set_query_var('page',$pagedCasino);
            ?>
              <div class="casino-table-items">
                <?php 
                  foreach($casinoPosts as $casino) {
                    $casinoID = $casino->ID;
                    ?>
                      <div class="casino-table-item flex flex-justify-between flex-align-stretch">
                        <div class="casino-table-item-image flex flex-align-center flex-justify-center" style="background-color: #01281d">
                          <picture class="render-image flex flex-align-center flex-justify-center picture-image- casino-table-item-image-img">
                            <source type="image/svg+xml" data-srcset="https://pokieslab.net/wp-content/uploads/richard-casino200x150.svg" />
                            <img
                              alt=""
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              width="200"
                              height="150"
                              title="richard-casino200x150"
                              class="lazy casino-table-item-image-img"
                              data-original="https://pokieslab.net/wp-content/uploads/richard-casino200x150.svg"
                            />
                          </picture>
                          <noscript>
                            <img
                              alt=""
                              src="https://pokieslab.net/wp-content/uploads/richard-casino200x150.svg"
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
                              <div class="casino-table-item-title">AU$5000 + 300 Free Spins</div>
                              <div class="casino-table-item-info flex flex-align-stretch flex-justify-start flex-wrap">
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-slot-machine.svg" />
                                    <img
                                      alt="slot-machine"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-slot-machine.svg"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="slot-machine" src="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-slot-machine.svg" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p>3510 Online Pokies</p>
                                </div>
                                <div class="casino-table-item-info-element flex flex-align-start flex-justify-start">
                                  <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                                    <source type="image/svg+xml" data-srcset="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-present.svg" />
                                    <img
                                      alt="gift-box"
                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                      width="35"
                                      height="35"
                                      class="lazy"
                                      data-original="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-present.svg"
                                    />
                                  </picture>
                                  <noscript>
                                    <img alt="gift-box" src="https://pokieslab.net/wp-content/themes/pokieslab/images/icons/icon-present.svg" width="35" height="35" class="lazy" />
                                  </noscript>
                                  <p>Cashback up to 20%</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="casino-table-item-description-button flex flex-align-center flex-justify-center flex-direction-column">
                            <div class="flex flex-align-stretch flex-justify-start flex-direction-column">
                              <button class="casino-table-item-description-button-item button__primary-3">
                                <a
                                  href="https://pokieslab.net/go/richard-casino/"
                                  target="_blank"
                                  rel="nofollow noopener"
                                  style="display: flex; text-decoration: none; color: inherit; justify-content: center; align-items: center"
                                  >PLAY NOW</a
                                >
                              </button>
                              <div class="casino-table-item-description-button-item-more-info">
                                <span>Richard Casino</span>
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
        ?>
        
        <?php 
          if($casinos_list_config['choose_casinos'] == "all" && $casinos_list_config['ajax_load']){
            ?>
              <div class="col-12 best-australian-online-pokies-real-money__link-button flex flex-justify-center">
                <button class="button__secondary-1 color-basic-1">
                  <a href="https://pokieslab.net/real-money-pokies/" style="
                      display: flex;
                      text-decoration: none;
                      color: inherit;
                      justify-content: center;
                      align-items: center;
                    ">Show More...</a>
                </button>
              </div>
            <?php
          }
        ?>
      </div>
    </section>
