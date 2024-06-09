import { Flex, PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import React from 'react';
import { updateData } from '../../../../utils/functions';
import { Device } from '../../../Panel/Device/Device';

function SettingSlides({ attributes, setAttributes, device }) {
  const { options } = attributes;
  return (
    <PanelBody
      title={__('Slider Settings', 'b-blocks')}
      initialOpen={true}
    >
      <ToggleControl
        label={__('Enable Autoplay', 'b-blocks')}
        checked={options.autoplay}
        value={options.autoplay}
        onChange={(value) => setAttributes({ options: updateData(options, value, "autoplay") })}
      />
      <Flex>
        <label style={{ marginBottom: "12px" }}>{__('Slide Direction', 'b-blocks')}</label>
        <SelectControl
          value={options.direction}
          options={[
            { value: 'rightToLeft', label: 'Right to Left' },
            { value: 'leftToRight', label: 'Left to Right' },
          ]}
          onChange={(value) =>
            setAttributes({ options: updateData(options, value, "direction") })
          }
        />
      </Flex>
      <RangeControl
        label={__('Slider Speed (Second)', 'b-blocks')}
        value={options.speed}
        step={1}
        onChange={(value) => setAttributes({ options: updateData(options, value, "speed") })}
        min={1}
        max={10}
      />

      <RangeControl
        label={__('Slider Delay Speed (Second)', 'b-blocks')}
        value={options.delay}
        step={1}
        onChange={(value) => setAttributes({ options: updateData(options, value, "delay") })}
        min={1}
        max={10}
      />
      <ToggleControl
        label={__('Infinite Loop', 'b-blocks')}
        checked={options.loop}
        onChange={(value) => setAttributes({ options: updateData(options, value, "loop") })}
      />

      <Flex justify="flex-start">
        <label>{__('Logos Per View', 'b-blocks')}</label>
        <Device />
      </Flex>
      <RangeControl
        value={options.logoView[device]}
        onChange={(value) => setAttributes({ options: updateData(options, value, "logoView", device) })}
        step={1}
        min={1}
        max={20}
      />
      <Flex justify="flex-start">
        <label>{__('Space Between', 'b-blocks')}</label>
        <Device />
      </Flex>
      <RangeControl
        value={options.space[device]}
        onChange={(value) => setAttributes({ options: updateData(options, value, "space", device) })}
        step={1}
        min={1}
        max={200}
      />

    </PanelBody>
  )
}

export default withSelect(select => {
  return {
    device: select("core/edit-post").__experimentalGetPreviewDeviceType()?.toLowerCase()
  }
})(SettingSlides)