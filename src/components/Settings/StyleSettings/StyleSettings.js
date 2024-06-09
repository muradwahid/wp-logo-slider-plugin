import { Flex, PanelBody, RangeControl, SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PanelColorPicker } from 'bpl-gutenberg-panel';
import React from 'react';
import { updateData } from '../../../utils/functions';
import LogoCaption from './LogoCaption';
import { objectFitOptions } from '../../../utils/options';

function StyleSettings({ attributes, setAttributes }) {
  const { sliderStyles, caption } = attributes;
  return (
    <>
      <PanelBody title={__('Logo Style', 'b-blocks')} initialOpen={true}>
        <Flex style={{ marginBottom: '15px' }}>
          <label>{__('Height', 'b-blocks')}</label>
          <UnitControl
            style={{ width: "92px" }}
            value={sliderStyles.logo.height}
            onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "height") })}
            max={sliderStyles.logo.height.includes("%")? 100 : 1000}
            min={0}
          />
        </Flex>
        <Flex style={{ marginBottom: '15px' }}>
          <label>{__('Width', 'b-blocks')}</label>
          <UnitControl
            style={{ width: "92px" }}
            value={sliderStyles.logo.width}
            onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "width") })}
            max={sliderStyles.logo.width.includes("%") ? 100 : 1000}
            min={0}
          />
        </Flex>

      <Flex>
        <label style={{ marginBottom: "12px" }}>{__('Logo Fit Options', 'b-blocks')}</label>
        <SelectControl
            value={sliderStyles.logo.logoFitOption}
          options={objectFitOptions}
            onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "logoFitOption") })}
        />
      </Flex>
      <Flex>
        <label style={{ marginBottom: "12px" }}>{__('Logo Hover Style', 'b-blocks')}</label>
        <SelectControl
          value={sliderStyles.logo.hover}
          options={[
            { value: 'none', label: 'None' },
            { value: 'gray', label: 'GrayScale' },
            { value: 'zoomIn', label: 'Zoom In' },
            { value: 'zoomOut', label: 'Zoom Out' },
          ]}
          onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "hover") })}
        />
      </Flex>
      
      <Flex style={{marginBottom:'15px'}}>
        <label>{__('Border Width', 'b-blocks')}</label>
        <UnitControl
          style={{width:"92px"}}
          value={sliderStyles.logo.border.width}
          onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "border", "width") })}
          units={[]}
          min={0}
        />
      </Flex>

      <Flex>
        <label style={{ marginBottom: "12px" }}>{__('Border Style', 'b-blocks')}</label>
        <SelectControl
          value={sliderStyles.logo.border.style}
          options={[
            { value: 'none', label: 'None' },
            { value: 'solid', label: 'Solid' },
            { value: 'dashed', label: 'Dashed' },
            { value: 'dotted', label: 'Dotted' },
          ]}
          onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "border", "style") })}
        />
      </Flex>

      <p>Border Color</p>
      <PanelColorPicker label={__('Border Color', 'b-blocks')} value={sliderStyles.logo.border.color} onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "border", "color") })} />

      <RangeControl
        label={__('Border Radius', 'b-blocks')}
        value={sliderStyles.logo.border.radius}
        onChange={(value) => setAttributes({ sliderStyles: updateData(sliderStyles, value, "logo", "border", "radius") })}
        min={0}
        max={50}
        step={1}
      />
    </PanelBody>
      {
        caption.isCaptionVisible && <LogoCaption attributes={attributes} setAttributes={setAttributes}/>
      }
    </>
  )
}

export default StyleSettings