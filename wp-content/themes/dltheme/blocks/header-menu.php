<div class="header-nav flex flex-align-stretch">
      <div class="container flex flex-align-stretch">
        <nav class="toolbar">
          <div
            class="toolbar__logo flex flex-align-center flex-justify-between"
          >
            <a href="/" class="flex flex-align-center flex-justify-between">
              <picture
                class="render-image flex flex-align-center flex-justify-center picture-image- toolbar__logotype"
              >
                <source
                  type="image/svg+xml"
                  srcset="
                    https://pokieslab.net/wp-content/uploads/pokieslab-white.svg
                  "
                />
                <img
                  alt="logo"
                  src="https://pokieslab.net/wp-content/uploads/pokieslab-white.svg"
                  width="142"
                  height="31"
                  class="no-lazy toolbar__logotype"
                />
              </picture>
            </a>
            <i class="fa-menu sidebar-open"></i>
          </div>
          <div class="header-menu__cover">
            <?php
              wp_nav_menu([
                'theme_location'	=> 'header_menu',
                'menu'				=> 'header_menu', 
                'menu_class'		=> 'menu header-menu flex flex-row flex-align-center'
              ]);
            ?>
          </div>
          <div class="navigation-list__item navigation-list__search">
            <div
              class="navigation-list-search header-menu__search navigation-search"
            >
              <i class="fa-search"></i>
              <input
                type="text"
                class="search-pok"
                id="headSeach_header-select"
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
        </nav>
      </div>
    </div>