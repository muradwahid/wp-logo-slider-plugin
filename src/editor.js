import { registerBlockType } from '@wordpress/blocks';
import metadata from '../inc/block.json';
import Edit from './Edit';
import './editor.scss';
import './style.scss'

registerBlockType(metadata, {
  icon: {
		src: 'superhero-alt',
		background: "blue",
		foreground:"white"
  },

  // Build in Functions
  edit: Edit,

  save: () => null,
});
