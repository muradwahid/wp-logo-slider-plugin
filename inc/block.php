<?php
class BPSLHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
				wp_register_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css', array(), '6.4.2' );
		wp_register_style( 'bpsl-hello-style', BPSL_DIR_URL . 'dist/style.css', [ ], BPSL_VERSION ); // Style
		wp_register_style( 'bpsl-hello-editor-style', BPSL_DIR_URL . 'dist/editor.css', [ 'bpsl-hello-style','font-awesome' ], BPSL_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'bpsl-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'bpsl-hello-editor-script', 'b-blocks', BPSL_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'bpsl-hello-style' );
		wp_enqueue_script( 'bpsl-hello-script', BPSL_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], BPSL_VERSION, true );
		wp_set_script_translations( 'bpsl-hello-script', 'b-blocks', BPSL_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-bpsl-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bpslHelloBlock-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new BPSLHelloBlock();
