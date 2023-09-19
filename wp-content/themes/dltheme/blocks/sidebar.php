<aside class="sidebar">
    <div class="container sidebar__container">
      <div class="row">
        <div class="col-12 flex flex-justify-between flex-align-center">
          <a href="/">
            <picture
              class="render-image flex flex-align-center flex-justify-center picture-image- sidebar__logo"
            >
              <source
                type="image/svg+xml"
                data-srcset="https://pokieslab.net/wp-content/uploads/pokieslab.svg"
              />
              <img
                alt="logo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                width="158"
                height="40"
                class="lazy sidebar__logo"
                data-original="https://pokieslab.net/wp-content/uploads/pokieslab.svg"
              />
            </picture>
            <noscript
              ><img
                alt="logo"
                src="https://pokieslab.net/wp-content/uploads/pokieslab.svg"
                width="158"
                height="40"
                class="lazy sidebar__logo"
            /></noscript>
          </a>
          <i id="sidebar-close" class="fa-cancel sidebar__close-button"></i>
        </div>
        <div class="col-12">
          <?php
              wp_nav_menu([
                'theme_location'	=> 'header_menu',
                'menu'				=> 'header_menu', 
                'menu_class'		=> 'menu sidebar-mobile-menu flex flex-column flex-align-center'
              ]);
            ?>
          <div
            class="sidebar-provider-mobile--list navigation-search navigation-search-mobile"
          >
            <i class="fa-search"></i>
            <input
              type="text"
              class="search-pok"
              id="headSeach_sidebar-select"
              placeholder="Search"
              minlength="1"
              required
              data-autocomplete-on
              data-action="autocomplete_slots"
              data-target-selector="navigation-search"
              data-clear-selector=".search-form-input-clear"
              autocomplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>