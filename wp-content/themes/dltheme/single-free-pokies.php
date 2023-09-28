<?php 
 // Template Name: Game
?>
<?php get_header(); ?>


  <section class="hero slots-page-header">
    <div class="header-bn">
      <div class="gradient">
        <div class="gradient-background" style="background: linear-gradient(90deg, var(--themeGradStart),var(--themeGradEnd))"></div>
        <div class="gradient-left-side"></div>
        <div class="gradient-right-side"></div>
      </div>
      <div class="container header__container">
        <div class="row">
          <div class="col-12">
            <ul class="breadcrumbs flex flex-align-center flex-justify-start flex-wrap">
              <li class="breadcrumbs-home">
                <a href="<?php echo home_url() ?>" class="flex flex-align-center flex-justify-start">
                  <i class="fa-home"></i>
                </a>
                <span class="breadcrumbs-divider">/</span>
              </li>
              <li>
                <a href="<?php echo home_url() ?>/free-pokies/" class="flex flex-align-center flex-justify-start">
                  <span>Free Pokies</span>
                </a>
                <span class="breadcrumbs-divider">/</span>
              </li>
              <li>
                <span><?php the_title() ?></span>
              </li>
            </ul>
            <h1 class="slots-page-header__title"><?php the_title() ?> Pokies</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="after-header-block">
    <div class="container header__slot">
      <div class="row">
        <div class="col-12 col-lg-8 slot-page">
          <div class="slot">
            <div class="slot-background">
              <div class="slot-background-cover">
                <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                  <source type="image/webp" media="(max-width: 450px)" srcset="https://pokieslab.net/wp-content/uploads/image-webp/mustang-money-pokies-game-150x110.webp" />
                  <source type="image/webp" media="(max-width: 767px)" srcset="https://pokieslab.net/wp-content/uploads/image-webp/mustang-money-pokies-game-510x394.webp" />
                  <source type="image/webp" srcset="https://pokieslab.net/wp-content/uploads/image-webp/mustang-money-pokies-game-730x564.webp" />
                  <source type="image/png" media="(max-width: 450px)" srcset="https://pokieslab.net/wp-content/uploads/mustang-money-pokies-game-150x110.png" />
                  <source type="image/png" media="(max-width: 767px)" srcset="https://pokieslab.net/wp-content/uploads/mustang-money-pokies-game-510x394.png" />
                  <source type="image/png" srcset="https://pokieslab.net/wp-content/uploads/mustang-money-pokies-game-730x564.png" />
                  <img alt="Mustang Money Pokie" src="https://pokieslab.net/wp-content/uploads/mustang-money-pokies-game-730x564.png" width="143" height="29" class="no-lazy" />
                </picture>
              </div>
            </div>
            <div class="preloader flex flex-align-center flex-justify-center">
              <svg>
                <g>
                  <path d="M 50,100 A 1,1 0 0 1 50,0" />
                </g>
                <g>
                  <path d="M 50,75 A 1,1 0 0 0 50,-25" />
                </g>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color: #ff56a1; stop-opacity: 1;" />
                    <stop offset="100%" style="stop-color: #ff9350; stop-opacity: 1;" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <button id="slot__play-button" class="header__button button__primary-2 slot__button" data-iframe-link="https://demoportal.agtonline.com/ainsworthanywhere/GameLaunch/launchpage.aspx?ExtGameId=M6">Play Free</button>
            <iframe id="slot__play-frame" class="slot__frame" frameborder="0"></iframe>
          </div>
          <button class="slot__play-button">
            <a href="/go/richard-casino/" target="_blank" rel="nofollow noopener" style="display: flex; text-decoration: none; color: inherit; justify-content: center; align-items: center;">
              PLAY FOR REAL MONEY WITH AU$5000 + 300 FREE SPINS
            </a>
          </button>
        </div>
        <div class="col-12 col-lg-4 popular-slots">
          <div class="popular-april-slot__title">Most popular pokies:</div>
          <div class="row flex flex-align-stretch flex-wrap flex-justify-start">
            <?php 
              $pokiesList = get_posts( array(
                'numberposts' => 8,
                'post_type'   => 'free-pokies',
                'suppress_filters' => true,
              ) );
              
              global $post;
              
            ?>
            <?php
              foreach( $pokiesList as $post ){
                setup_postdata( $post );
                $slotID = $post->ID;
                $slotInfo = get_field("slot_info",$slotID);
                ?>
                  <div class="col-6 popular-april-slot-item flex flex-justify-center flex-align-stretch">
                    <div class="popular-april-slot-item-cover flex flex-justify-center flex-align-stretch">
                      <div class="popular-april-slot">
                        <div class="popular-april-slot-item-image">
                          <picture class="render-image flex flex-align-center flex-justify-center picture-image-">
                            <source type="image/webp" data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>" />
                            <source type="image/png" data-srcset="<?php echo get_the_post_thumbnail_url($slotID) ?>" />
                            <img
                              alt="<?php echo get_the_title($slotID) ?> pokie"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                              width="160"
                              height="120"
                              title="<?php echo get_the_title($slotID) ?> pokie machines online free"
                              class="lazy"
                              data-original="<?php echo get_the_post_thumbnail_url($slotID) ?>"
                            />
                          </picture>
                          <noscript>
                            <img alt="<?php echo get_the_title($slotID) ?> pokie" src="<?php echo get_the_post_thumbnail_url($slotID) ?>" width="160" height="120" title="<?php echo get_the_title($slotID) ?> pokie machines online free" class="lazy" />
                          </noscript>
                        </div>
                        <div class="popular-april-slot-item-title"><?php echo get_the_title($slotID) ?></div>
                      </div>
                      <a class="popular-april-slot-item-link" href="<?php echo get_the_permalink($slotID) ?>" title="<?php echo get_the_title($slotID) ?>"></a>
                    </div>
                  </div>
                <?php
              }
            ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php 
    if( have_rows('sections') ):
      // Loop through rows.
      while ( have_rows('sections') ) : the_row();
        // Case: Paragraph layout.
        renderACF();
      endwhile;
    else :
    endif;
  ?>
</div>


<?php get_footer(); ?>