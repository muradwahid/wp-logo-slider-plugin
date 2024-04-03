import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { updateData } from '../../../../utils/functions';

function CaptionSettings({ attributes, setAttributes }) {
  const { caption } = attributes;
  return (
    <PanelBody
      title={__('Logo Caption', 'b-blocks')}
      initialOpen={false}
    >
      <ToggleControl
        label={__('Show Logo Caption', 'b-blocks')}
        checked={caption.isCaptionVisible}
        onChange={(value) =>
          setAttributes({ caption: updateData(caption, value, "isCaptionVisible") })
        }
      />
    </PanelBody>
  )
}

export default CaptionSettings