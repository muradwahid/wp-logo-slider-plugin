import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PanelColorPicker } from 'bpl-gutenberg-panel';
import React from 'react';
import { updateData } from '../../../utils/functions';

function LogoCaption({ attributes, setAttributes }) {
  const { caption } = attributes;

  return (
    <PanelBody title={__("Logo Caption", "b-blocks")} initialOpen={false}>
      <SelectControl
        label={__('Caption Visibility', 'b-blocks')}
        value={caption.hover}
        options={[
          { value: 'visible', label: 'Always Visible' },
          { value: 'hover', label: 'Visible on Hover' },
        ]}
        onChange={(value) => setAttributes({ caption: updateData(caption, value, "hover") })}
      />

      <PanelColorPicker label={__('Color', 'b-blocks')} value={caption.color.text}
        onChange={(value) => setAttributes({ caption: updateData(caption, value, "color", "text") })} />
      <PanelColorPicker label={__('Background', 'b-blocks')} value={caption.color.bg}
        onChange={(value) => setAttributes({ caption: updateData(caption, value, "color", "bg") })} />
    </PanelBody>
  )
}

export default LogoCaption