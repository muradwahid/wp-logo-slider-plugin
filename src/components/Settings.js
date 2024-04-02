import {
  InspectorControls,
} from '@wordpress/block-editor';
import {
  ColorPalette,
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Devices from './Device/Device';
const Settings = ({ setAttributes, attributes }) => {
  const {
    autoplay,
    speed,
    slideDirection,
    infinityLoop,
    logoView,
    desktopDevice,
    autoplayDelay,
    tabletDevice,
    mobileDevice,
    logoSpace,
    desktopSpace,
    tabletSpace,
    mobileSpace,
    navigation,
    pagination,
    dynamicPagination,
    captionHover,
    captionVisibility,
    captionTextColor,
    captionBgColor,
    logoHoverStyle,
    logoBorder,
    logoBorderColor,
    logoBorderRadius,
    borderStyle
  } = attributes;
  return (
    <div>

      <InspectorControls>
        <PanelBody
          title={__('Slider Settings', 'b-blocks')}
          initialOpen={true}
        >
          <ToggleControl
            label={__('Enable Autoplay', 'b-blocks')}
            checked={autoplay}
            onChange={() => setAttributes({ autoplay: !autoplay })}
          />
          <SelectControl
            label={__('Slide Direction', 'b-blocks')}
            value={slideDirection}
            options={[
              { value: 'rightToLeft', label: 'Right to Left' },
              { value: 'leftToRight', label: 'Left to Right' },
            ]}
            onChange={(direction) =>
              setAttributes({ slideDirection: direction })
            }
          />
          <RangeControl
            label={__('Slider Speed (Second)', 'b-blocks')}
            value={speed}
            step={1}
            onChange={(speed) => setAttributes({ speed })}
            min={1}
            max={10}
          />
          <RangeControl
            label={__('Slider Delay Speed (Second)', 'b-blocks')}
            value={autoplayDelay}
            step={1}
            onChange={(autoplayDelay) => setAttributes({ autoplayDelay })}
            min={1}
            max={10}
          />
          <ToggleControl
            label={__('Infinite Loop', 'b-blocks')}
            checked={infinityLoop}
            onChange={() => setAttributes({ infinityLoop: !infinityLoop })}
          />

          <Devices
            device={logoView}
            title={__('Logos Per View', 'b-blocks')}
            renderFunction={(logoView) => setAttributes({ logoView })}
          />
          {logoView === 'desktop' && (
            <RangeControl
              value={desktopDevice}
              onChange={(desktopDevice) => setAttributes({ desktopDevice })}
              step={1}
              min={1}
              max={20}
            />
          )}
          {logoView === 'tablet' && (
            <RangeControl
              value={tabletDevice}
              onChange={(tabletDevice) => setAttributes({ tabletDevice })}
              step={1}
              min={1}
              max={20}
            />
          )}
          {logoView === 'mobile' && (
            <RangeControl
              value={mobileDevice}
              onChange={(mobileDevice) => setAttributes({ mobileDevice })}
              step={1}
              min={1}
              max={20}
            />
          )}
          <Devices
            device={logoSpace}
            title={__('Space Between', 'b-blocks')}
            renderFunction={(logoSpace) => setAttributes({ logoSpace })}
          />
          {logoSpace === 'desktop' && (
            <RangeControl
              value={desktopSpace}
              onChange={(desktopSpace) => setAttributes({ desktopSpace })}
              step={1}
              min={1}
              max={200}
            />
          )}
          {logoSpace === 'tablet' && (
            <RangeControl
              value={tabletSpace}
              onChange={(tabletSpace) => setAttributes({ tabletSpace })}
              step={1}
              min={1}
              max={200}
            />
          )}
          {logoSpace === 'mobile' && (
            <RangeControl
              value={mobileSpace}
              onChange={(mobileSpace) => setAttributes({ mobileSpace })}
              step={1}
              min={1}
              max={200}
            />
          )}
        </PanelBody>
        <PanelBody title={__('Navigation', 'b-blocks')} initialOpen={false}>
          <ToggleControl
            className="component-controll-margin"
            label={__('Show Navigation', 'b-blocks')}
            checked={navigation}
            onChange={() => setAttributes({ navigation: !navigation })}
          />
          <small style={{ marginTop: '0px' }}>
            {__(
              `Navigation is ${navigation ? 'visible' : 'invisible'}`,
              'b-blocks'
            )}
          </small>
        </PanelBody>
        <PanelBody title={__('Pagination', 'b-blocks')} initialOpen={false}>
          <ToggleControl
            className="component-controll-margin"
            label={__('Show Pagination', 'b-blocks')}
            checked={pagination}
            onChange={() => setAttributes({ pagination: !pagination })}
          />
          <small style={{ marginTop: '0px' }}>
            {__(
              `Pagination is ${pagination ? 'visible' : 'invisible'}`,
              'b-blocks'
            )}
          </small>
          {pagination && (
            <ToggleControl
              className="component-controll-margin"
              label={__('Dynamic Pagination', 'b-blocks')}
              checked={dynamicPagination}
              onChange={() =>
                setAttributes({ dynamicPagination: !dynamicPagination })
              }
            />
          )}
        </PanelBody>
        <PanelBody
          title={__('Logo Caption', 'b-blocks')}
          initialOpen={false}
        >
          <ToggleControl
            label={__('Show Logo Caption', 'b-blocks')}
            checked={captionVisibility}
            onChange={() =>
              setAttributes({ captionVisibility: !captionVisibility })
            }
          />
          {captionVisibility && (
            <>
              <SelectControl
                label={__('Caption Visibility', 'b-blocks')}
                value={captionHover}
                options={[
                  { value: 'visible', label: 'Always Visible' },
                  { value: 'hover', label: 'Visible on Hover' },
                ]}
                onChange={(value) => setAttributes({ captionHover: value })}
              />
              <p>Color</p>
              <ColorPalette
                title={__('Color', 'b-blocks')}
                colors={[
                  { name: 'Black', color: '#000' },
                  { name: 'White', color: '#fff' },
                  { name: 'Red', color: '#f00' },
                  { name: 'Green', color: '#0f0' },
                  { name: 'Blue', color: '#00f' },
                ]}
                value={captionTextColor}
                onChange={(value) => setAttributes({ captionTextColor: value })}
              />
              <p>Background Color</p>
              <ColorPalette
                title={__('Color', 'b-blocks')}
                colors={[
                  { name: 'Black', color: '#000' },
                  { name: 'White', color: '#fff' },
                  { name: 'Red', color: '#f00' },
                  { name: 'Green', color: '#0f0' },
                  { name: 'Blue', color: '#00f' },
                ]}
                value={captionBgColor}
                onChange={(value) => setAttributes({ captionBgColor: value })}
              />
            </>
          )}
        </PanelBody>
        <PanelBody title={__('Logo Style', 'b-blocks')} initialOpen={false}>
          <SelectControl
            label={__('Logo Hover Style', 'b-blocks')}
            value={logoHoverStyle}
            options={[
              { value: 'none', label: 'None' },
              { value: 'gray', label: 'GrayScale' },
              { value: 'zoomIn', label: 'Zoom In' },
              { value: 'zoomOut', label: 'Zoom Out' },
            ]}
            onChange={(value) => setAttributes({ logoHoverStyle: value })}
          />
          <UnitControl
            label={__('Border Width', 'b-blocks')}
            value={logoBorder}
            onChange={(value) => setAttributes({ logoBorder: value })}
            units={[]}
            min={0}
          />
          <SelectControl
            label={__('Border Style', 'b-blocks')}
            value={borderStyle}
            options={[
              { value: 'none', label: 'None' },
              { value: 'solid', label: 'Solid' },
              { value: 'dashed', label: 'Dashed' },
              { value: 'dotted', label: 'Dotted' },
            ]}
            onChange={(value) => setAttributes({ borderStyle: value })}
          />
          <p>Border Color</p>
          <ColorPalette
            title={__('Border Color', 'b-blocks')}
            value={logoBorderColor}
            colors={[
              { name: 'Black', color: '#000' },
              { name: 'White', color: '#fff' },
              { name: 'Red', color: '#f00' },
              { name: 'Green', color: '#0f0' },
              { name: 'Blue', color: '#00f' },
            ]}
            onChange={(value) => setAttributes({ logoBorderColor: value })}
          />
          <RangeControl
            label={__('Border Radius', 'b-blocks')}
            value={logoBorderRadius}
            onChange={(value) => setAttributes({ logoBorderRadius: value })}
            min={0}
            max={50}
            step={1}
          />
        </PanelBody>
      </InspectorControls>
    </div>
  );
};

export default Settings;
