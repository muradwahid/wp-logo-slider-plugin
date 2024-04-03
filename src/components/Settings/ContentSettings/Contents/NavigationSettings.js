import { PanelBody, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import React from 'react'
import { updateData } from '../../../../utils/functions';

function NavigationSettings({ attributes, setAttributes }) {
  const {options} = attributes;
  return (
    <PanelBody title={__('Navigation', 'b-blocks')} initialOpen={false}>
      <ToggleControl
        className="component-controll-margin"
        label={__('Show Navigation', 'b-blocks')}
        checked={options.navigation}
        onChange={(value) => setAttributes({ options:updateData(options,value,"navigation") })}
      />
      <small style={{ marginTop: '0px' }}>
        {__(
          `Navigation is ${options.navigation ? 'visible' : 'invisible'}`,
          'b-blocks'
        )}
      </small>
    </PanelBody>
  )
}

export default NavigationSettings