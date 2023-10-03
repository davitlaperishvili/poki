<?php
function createPostData($postID) {
  $slotInfo = get_field("slot_info",$slotID);
  $post_data = [
      "value" => get_the_title($postID),
      "data" => [
        "behavior" =>"link",
        "link" => get_the_permalink($postID) ,
        "image" => get_the_post_thumbnail_url($postID)
      ]
      // Add other post data you want to include in the response
      ];
  return $post_data;
}
add_action('wp_ajax_autocomplete_slots', 'autocomplete_slots');
add_action('wp_ajax_nopriv_autocomplete_slots', 'autocomplete_slots');

function autocomplete_slots() {
    $search_term = $_POST['query'];
    $search_term = sanitize_text_field($search_term);  // Sanitize the input
    
    function title_filter($where, &$wp_query) {
        global $wpdb;
        if ($search_title = $wp_query->get('search_title')) {
            $where .= ' AND ' . $wpdb->posts . '.post_title LIKE \'%' . $wpdb->esc_like($search_title) . '%\'';
        }
        return $where;
    }
    
    add_filter('posts_where', 'title_filter', 10, 2);
    
    $args = array(
        'post_type' => 'free-pokies',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'DESC',
        'search_title' => $search_term  // Use custom parameter for title search
    );
    
    
    $posts = new WP_Query($args);
    remove_filter('posts_where', 'title_filter', 10);
    $response = array();
    if ($posts->have_posts()) {
        while ($posts->have_posts()) {
            $posts->the_post();
            $id = get_the_ID();
            array_push($response, createPostData($id));
        }
    }

    wp_reset_postdata();

    // Return the JSON response
    wp_send_json(array("suggestions" => $response));

    wp_die();
}


add_action('wp_ajax_loadmore', 'loadmore');
add_action('wp_ajax_nopriv_loadmore', 'loadmore');



function createFreePokiesTemplate($id) {
  
  $slotInfo = get_field("slot_info",$id);
  return '
    <div class="game-item">
      <div class="game-item-cover">
        <a
          class="game-item-link"
          href=" '.get_the_permalink($id) .'"
        >
          <div class="game">
            <picture
              class="render-image flex flex-align-center flex-justify-center picture-image- game__image"
            >
              <source
                type="image/webp"
                media="(max-width: 450px)"
                data-srcset="'.get_the_post_thumbnail_url($id).'"
              />
              <source
                type="image/webp"
                data-srcset="'.get_the_post_thumbnail_url($id).'"
              />
              <source
                type="image/png"
                media="(max-width: 450px)"
                data-srcset="'.get_the_post_thumbnail_url($id).'"
              />
              <source
                type="image/png"
                data-srcset="'.get_the_post_thumbnail_url($id).'"
              />
              <img
                alt="<?php echo get_the_title($id) ?>"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                width="360"
                height="271"
                title="<?php echo get_the_title($id) ?>"
                class="lazy game__image"
                data-original="'.get_the_post_thumbnail_url($id).'"
                data-srcset="'.get_the_post_thumbnail_url($id).' 450w"
              />
            </picture>
            <noscript>
              <img
                alt="<?php echo get_the_title($id) ?>"
                src="'.get_the_post_thumbnail_url($id).'"
                width="360"
                height="271"
                title="'.get_the_title($id).'"
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
                <p class="game__title">'.get_the_title($id).'</p>
              </div>
            </div>
          </div>
        </a>
        <div class="game__info">
          <div>
            <p class="game__text">Reels</p>
            <p class="game__text">'.$slotInfo['reels'].'</p>
          </div>
          <div>
            <p class="game__text">Paylines</p>
            <p class="game__text">'.$slotInfo['paylines'].'</p>
          </div>
          <div>
            <p class="game__text">RTP</p>
            <p class="game__text">'.$slotInfo['rtp'].'</p>
          </div>
        </div>
      </div>
    </div>
  ';
};
function loadmore() {
    $page = $_POST['page'];
    $args = $_POST['args'];
    $template = $_POST['template'];
    // $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    $slotArgs = array('post_type' => 'free-pokies', 'posts_per_page' => 6, 'paged' => $page);
    $post_type_data = new WP_Query($slotArgs);
    $slotsPosts = $post_type_data->posts;
    if($post_type_data->have_posts()): ?>
      <?php while($post_type_data->have_posts()): $post_type_data->the_post(); ?>
        <!-- Your loop content goes here -->
      <?php endwhile; ?>
    
    
    <?php else: ?>
      
    <?php endif;
    // set_query_var('paged',$paged);
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
    // Return the JSON response
    // echo $response;
    // var_dump($posts);
  // wp_send_text($response);
    wp_die();
}


add_action('wp_ajax_sorting_slots', 'sorting_slots');
add_action('wp_ajax_nopriv_sorting_slots', 'sorting_slots');

function createItemData($postID) {
  $slotInfo = get_field("slot_info",$postID);
  $post_data = [
    "title" => get_the_title($postID),
    "link" => get_the_permalink($postID),
    "img" => [
      "webp" => [
        [
          "dimension" => null,
          "type" => "image/webp",
          "url" => get_the_post_thumbnail_url($postID)
        ]
      ],
      "j2p" => [],
      "default" => [
        [
          "dimension" => null,
          "type" => "image/png",
          "url" => get_the_post_thumbnail_url($postID)
        ]
      ]
    ],
    "reels" => $slotInfo['reels'],
    "paylines" => $slotInfo['paylines'],
    "rtp" => $slotInfo['rtp']
  ];
      
  return $post_data;
}
function sorting_slots() {
  $args = $_POST['args'];
  $template = $_POST['template'];
  // $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  $slotArgs = array('post_type' => 'free-pokies', 'posts_per_page' => -1, $args->orderby);
  $post_type_data = new WP_Query($slotArgs);
  $slotsPosts = $post_type_data->posts;
  $items = array();
    if ($post_type_data->have_posts()) {
        while ($post_type_data->have_posts()) {
            $post_type_data->the_post();
            $id = get_the_ID();
            array_push($items, createItemData($id));
        }
    }
  $result = [
    "itemsTotal" => "Total $post_type_data->found_posts pokies",
    "foundPosts" => $post_type_data->found_posts,
    "maxPage" => ceil($post_type_data->found_posts / 18),
    "postPerPage" => 18,
    "step" => 3,
    "nextMark" => ">",
    "prevMark" => "<",
    "args" => $args,
    "items" => $items
  ];
  // Return the JSON response
  // echo $result;
  // var_dump($posts);
 wp_send_json($result);
  wp_die();
}

// {
//   "itemsTotal":"Total 200 pokies",
//   "foundPosts":200,"maxPage":12,
//   "postPerPage":18,"step":3,
//   "nextMark":">",
//   "prevMark":"<",
//   "args":
//     {"post_type":"post",
//       "category__in":[1],
//       "post_status":"publish",
//       "meta_query":
//         {"order":
//           {"key":"order",
//             "type":"NUMERIC"
//           }
//         },
//       "orderby":
//         {"order":"DESC",
//           "ID":"DESC"
//         },
//       "paged ":1
//     },
//   "items":[
//     {
//       "title":"Lightning Link",
//       "link":"https:\/\/pokieslab.net\/free-online-pokies\/lightning-link\/",
//       "img":{"webp":[
//           {
//             "dimension":null,
//             "type":"image\/webp",
//             "url":"\/wp-content\/uploads\/image-webp\/Lightning-link-pokie-machines-360x271.webp"
//           }
//         ],
//         "j2p":[],
//         "default":[
//           {"dimension":null,
//             "type":"image\/png",
//             "url":"https:\/\/pokieslab.net\/wp-content\/uploads\/Lightning-link-pokie-machines-360x271.png"}]
//           },
//           "reels ":false,
//           "paylines ":false,
//           "rtp ":false
//     }
//   ]
// }