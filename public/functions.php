<?php
// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');

// Load scripts
function load_vue_scripts() {
    wp_enqueue_style('blankslate/app.css', get_template_directory_uri() . '/css/app.css', false, null);
    wp_enqueue_script('blankslate/vendor.js', get_template_directory_uri() . '/js/chunk-vendors.js', null, null, true);
    wp_enqueue_script('blankslate/app.js', get_template_directory_uri() . '/js/app.js', null, null, true);
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);

add_theme_support( 'post-thumbnails', array('post', 'page', 'tribe_events') );