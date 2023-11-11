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
          title={__('Slider Settings', 'logo-slider')}
          initialOpen={true}
        >
          <ToggleControl
            label={__('Enable Autoplay', 'logo-slider')}
            checked={autoplay}
            onChange={() => setAttributes({ autoplay: !autoplay })}
          />
          <SelectControl
            label={__('Slide Direction', 'logo-slider')}
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
            label={__('Slider Speed (Second)', 'logo-slider')}
            value={speed}
            step={1}
            onChange={(speed) => setAttributes({ speed })}
            min={1}
            max={10}
          />
          <RangeControl
            label={__('Slider Delay Speed (Second)', 'logo-slider')}
            value={autoplayDelay}
            step={1}
            onChange={(autoplayDelay) => setAttributes({ autoplayDelay })}
            min={1}
            max={10}
          />
          <ToggleControl
            label={__('Infinite Loop', 'logo-slider')}
            checked={infinityLoop}
            onChange={() => setAttributes({ infinityLoop: !infinityLoop })}
          />

          <Devices
            device={logoView}
            title={__('Logos Per View', 'logo-slide')}
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
            title={__('Space Between', 'logo-slide')}
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
        <PanelBody title={__('Navigation', 'logo-slider')} initialOpen={false}>
          <ToggleControl
            className="component-controll-margin"
            label={__('Show Navigation', 'logo-slider')}
            checked={navigation}
            onChange={() => setAttributes({ navigation: !navigation })}
          />
          <small style={{ marginTop: '0px' }}>
            {__(
              `Navigation is ${navigation ? 'visible' : 'invisible'}`,
              'logo-slider'
            )}
          </small>
        </PanelBody>
        <PanelBody title={__('Pagination', 'logo-slider')} initialOpen={false}>
          <ToggleControl
            className="component-controll-margin"
            label={__('Show Pagination', 'logo-slider')}
            checked={pagination}
            onChange={() => setAttributes({ pagination: !pagination })}
          />
          <small style={{ marginTop: '0px' }}>
            {__(
              `Pagination is ${pagination ? 'visible' : 'invisible'}`,
              'logo-slider'
            )}
          </small>
          {pagination && (
            <ToggleControl
              className="component-controll-margin"
              label={__('Dynamic Pagination', 'logo-slider')}
              checked={dynamicPagination}
              onChange={() =>
                setAttributes({ dynamicPagination: !dynamicPagination })
              }
            />
          )}
        </PanelBody>
        <PanelBody
          title={__('Logo Caption', 'logo-slider')}
          initialOpen={false}
        >
          <ToggleControl
            label={__('Show Logo Caption', 'logo-slider')}
            checked={captionVisibility}
            onChange={() =>
              setAttributes({ captionVisibility: !captionVisibility })
            }
          />
          {captionVisibility && (
            <>
              <SelectControl
                label={__('Caption Visibility', 'logo-slider')}
                value={captionHover}
                options={[
                  { value: 'visible', label: 'Always Visible' },
                  { value: 'hover', label: 'Visible on Hober' },
                ]}
                onChange={(value) => setAttributes({ captionHover: value })}
              />
              <p>Color</p>
              <ColorPalette
                title={__('Color', 'logo-slider')}
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
                title={__('Color', 'logo-slider')}
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
        <PanelBody title={__('Logo Style', 'logo-slider')} initialOpen={false}>
          <SelectControl
            label={__('Logo Hover Style', 'logo-slider')}
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
            label={__('Border Width', 'logo-slider')}
            value={logoBorder}
            onChange={(value) => setAttributes({ logoBorder: value })}
            units={[]}
            min={0}
          />
          <SelectControl
            label={__('Border Style', 'logo-slider')}
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
            title={__('Border Color', 'logo-slider')}
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
            label={__('Border Radius', 'logo-slider')}
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
