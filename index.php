<?php
/**
 * Plugin Name:  Logo Slider
 * Description: Description of the Logo Slider.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: logo-slider
 */
// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BPSL_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BPSL_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BPSL_DIR_PATH', plugin_dir_path( __FILE__ ) );



require_once BPSL_DIR_PATH . 'inc/block.php';