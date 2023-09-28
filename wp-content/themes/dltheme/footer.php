<?php 
  $phoneVisible = get_field('phone_number', 'option');
  $phone = preg_replace("/[^0-9]/", "", $phoneVisible);
  $email = get_field('email', 'option');
  $theme_gradient_start = get_field('theme_gradient_start', 'option');
  $theme_gradient_end = get_field('theme_gradient_end', 'option');
  $site_logo = get_field('site_logo', 'option');
  $menu_columns = get_field('menu_columns', 'option');
  $copyright = get_field('copyright', 'option');
  $footer_images = get_field('footer_images', 'option');
?>
<div class="footer-wrapper">
  <footer class="footer" style="background-image: linear-gradient(90deg,var(--themeGradStart),var(--themeGradEnd));">
    <div class="footer__scroll-top-button-cover">
      <button
        class="footer__scroll-top-button flex flex-justify-center flex-align-center"
      >
        <i class="fa-up-open"></i>
      </button>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-12 flex flex-align-start flex-justify-between flex-wrap"
        >
          <div class="footer-menu-cover">
            <div
              class="footer-menu-cover-menus flex flex-align-start flex-justify-between flex-wrap"
            >
              <?php 
                foreach($menu_columns as $column) {
                  ?>
                    <div class="footer-menu count-2">
                      <div
                        class="footer-menu-title flex flex-align-center flex-justify-between"
                      >
                        <span><?php echo $column['column_title'] ?></span>
                      </div>
                      <ul
                        id="menu-online-pokies-australia"
                        class="menu menu-footer flex flex-align-stretch flex-justify-center flex-wrap"
                      >
                      <?php 
                        foreach($column['column_items'] as $item ){
                          ?>
                            <li
                              id="menu-item-6945"
                              class="menu-item menu-item-type-post_type menu-item-object-post menu-item-6945"
                            >
                              <a
                                href="<?php echo $item['menu_item']['url'] ?>"
                                ><?php echo $item['menu_item']['title'] ?></a
                              >
                            </li>
                          <?php
                        }
                      ?>
                        
                      </ul>
                    </div>
                  <?php
                }
              ?>
            </div>
          </div>
          <div class="footer-logo">
            <picture
              class="render-image flex flex-align-center flex-justify-center picture-image-"
            >
              <source
                type="image/svg+xml"
                data-srcset="<?php echo $site_logo['url'] ?>"
              />
              <img
                alt="<?php echo $site_logo['alt'] ?>"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                width="270"
                height="59"
                class="lazy"
                data-original="<?php echo $site_logo['url'] ?>"
              />
            </picture>
            <noscript
              ><img
                alt="logo"
                src="<?php echo $site_logo['url'] ?>"
                width="270"
                height="59"
                class="lazy"
            /></noscript>
          </div>
        </div>
        <div class="col-12"><hr class="footer__line" /></div>
        <div class="col-12">
          <div
            class="footer-copyrights flex flex-align-center flex-justify-between flex-wrap"
          >
            <div class="footer-copyrights-text">
              <p class="copyright__text">
                <?php echo $copyright ?>
              </p>
            </div>
            <div class="footer-copyrights-images-cover">
              <div
                class="footer-copyrights-images flex flex-align-center flex-justify-center flex-wrap"
              >
              <?php 
                foreach($footer_images as $image ){
                  ?>
                    <picture
                      class="render-image flex flex-align-center flex-justify-center picture-image-"
                    >
                      <source
                        type="image/png"
                        data-srcset="<?php echo $image['image']['url'] ?>"
                      />
                      <img
                        alt="<?php echo $image['image']['alt'] ?>"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        class="lazy"
                        data-original="<?php echo $image['image']['url'] ?>"
                      />
                    </picture>
                    <noscript
                      ><img
                        alt="<?php echo $image['image']['alt'] ?>"
                        src="<?php echo $image['image']['url'] ?>"
                        class="lazy"
                    /></noscript>
                  <?php
                }
              ?>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
<!-- svg for div cutting -->
<svg width="0" height="0" style="position: absolute; left: -99%">
  <defs>
    <clipPath id="mediator" clipPathUnits="objectBoundingBox">
      <path
        d="M80.5037 191.308C107.079 209.284 192.227 156.84 206.881 116.601C221.562 76.3218 107.275 -10.4729 67.5087 38.7141C27.6642 87.8468 47.383 168.864 80.5037 191.308Z"
      />
    </clipPath>
  </defs>
  <defs>
    <clipPath id="button-form-2" clipPathUnits="objectBoundingBox">
      <path
        d="M0.002,0.2 C0.002,0.094,0.024,0.01,0.052,0.013 L0.955,0.118 C0.982,0.121,1,0.212,1,0.319 L0.993,0.76 C0.991,0.855,0.971,0.93,0.946,0.932 L0.052,1 C0.024,1,0.002,0.931,0.002,0.826 V0.2"
      />
    </clipPath>
  </defs>
  <defs>
    <clipPath
      id="how-we-rate-the-best-pokies-mobile-background"
      clipPathUnits="objectBoundingBox"
    >
      <path
        d="M0,0.057 L0,0.384 L0,0.97 C0,0.987,0.02,1,0.044,1 L0.956,1 C0.98,1,1,0.987,1,0.97 L1,0.035 C1,0.015,0.976,-0.001,0.947,0 L0.023,0.04 C0.01,0.04,0,0.048,0,0.057"
      />
    </clipPath>
  </defs>
  <defs>
    <clipPath id="button-form-1" clipPathUnits="objectBoundingBox">
      <path
        d="M0.004,0.259 C-0.007,0.133,0.019,0.004,0.055,0.008 L0.952,0.109 C0.981,0.113,1,0.206,1,0.315 L0.993,0.751 C0.991,0.849,0.969,0.925,0.943,0.928 L0.108,1 C0.086,1,0.066,0.957,0.059,0.876 L0.004,0.259"
      />
    </clipPath>
  </defs>
  <defs>
    <clipPath id="button-form-3" clipPathUnits="objectBoundingBox">
      <path
        d="M0,0.215 C0,0.097,0.026,0.003,0.058,0.007 L0.946,0.109 C0.977,0.112,1,0.214,1,0.332 L0.992,0.735 C0.99,0.842,0.966,0.925,0.937,0.928 L0.058,1 C0.026,1,0,0.915,0,0.798 V0.215"
      />
    </clipPath>
  </defs>
  <defs>
    <clipPath id="game-card-container" clipPathUnits="objectBoundingBox">
      <path
        d="M0,0.151 V0.674 V0.893 C0,0.955,0.016,1,0.037,1 H0.963 C0.984,1,1,0.955,1,0.893 V0.131 C1,0.059,0.98,0.002,0.957,0.004 L0.02,0.088 C0.009,0.089,0,0.117,0,0.151"
      />
    </clipPath>
  </defs>
  <defs>
    <clipPath
      id="how-we-rate-the-best-pokies-pc-background"
      clipPathUnits="objectBoundingBox"
    >
      <path
        d="M0.028,1 L0.19,1 L0.985,1 C0.994,1,1,0.974,1,0.943 L1,0.057 C1,0.026,0.994,0,0.985,0 L0.017,0 C0.007,0,0,0.033,0,0.071 L0.019,0.97 C0.02,0.987,0.023,1,0.028,1"
      />
    </clipPath>
  </defs>
</svg>
<!-- <script async src="js/static/app.js"></script> -->
    <script>
      !(function () {
        var e = document.querySelectorAll(".menu li.menu-item-has-children");
        if (e)
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              i = n.querySelector("*> a, *> span"),
              a = n.querySelector("* > .sub-menu"),
              r = document.createElement("div");
            r.classList.add("menu-title"), n.insertBefore(r, a);
            var c = document.createElement("i");
            r.appendChild(i),
              r.appendChild(c),
              c.classList.add("fa-up-open"),
              c.classList.add("cursor-pointer"),
              c.addEventListener(
                "click",
                function (e) {
                  e.classList.toggle("active");
                }.bind(this, n)
              );
          }
      })();
      var site_option = [],
        ajaxactionurl = "/wp-admin/admin-ajax.php",
        transparent_pixel =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
      (function () {
        var table = document.querySelectorAll('table:not([class*="no-cover"])');
        if (table) {
          for (var i = table.length - 1; i >= 0; i--) {
            if (!table[i].classList.contains("no-cover")) {
              var cover = document.createElement("div");
              cover.classList.add("cover-table");
              table[i].parentNode.insertBefore(cover, table[i]);
              cover.appendChild(table[i]);
            }
          }
        }
        var img = document.querySelectorAll('img:not([class*="lazy"])');
        if (img) {
          for (var i = 0; i < img.length; i++) {
            var src = img[i].getAttribute("src");
            if (src && window.transparent_pixel) {
              img[i].setAttribute("data-original", src);
              img[i].setAttribute("src", window.transparent_pixel);
              img[i].classList.add("lazy");
            }
          }
        }
      })();
    </script>
<?php wp_footer(); ?>
</body>
</html>