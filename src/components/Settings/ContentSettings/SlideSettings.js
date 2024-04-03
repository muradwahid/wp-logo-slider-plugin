import { InspectorControls } from '@wordpress/block-editor'
import React from 'react'
import SettingSlides from './Contents/SettingSlides'
import NavigationSettings from './Contents/NavigationSettings'
import PaginationSettings from './Contents/PaginationSettings'
import CaptionSettings from './Contents/CaptionSettings'

function SlideSettings({attributes,setAttributes}) {
  return (
    <div>
      <InspectorControls>
        <SettingSlides attributes={attributes} setAttributes={setAttributes} />
        <NavigationSettings attributes={attributes} setAttributes={setAttributes} />
        <PaginationSettings attributes={attributes} setAttributes={setAttributes} />
        <CaptionSettings attributes={attributes} setAttributes={setAttributes} />
      </InspectorControls>
    </div>
  )
}

export default SlideSettings