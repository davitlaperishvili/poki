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