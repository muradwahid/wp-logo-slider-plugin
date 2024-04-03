import { PanelBody, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import React from 'react'
import { updateData } from '../../../../utils/functions';

function PaginationSettings({ attributes, setAttributes }) {
  const { options } = attributes;
  return (
    <PanelBody title={__('Pagination', 'b-blocks')} initialOpen={false}>
      <ToggleControl
        className="component-controll-margin"
        label={__('Show Pagination', 'b-blocks')}
        checked={options.pagination}
        onChange={(value) => setAttributes({ options: updateData(options,value,"pagination") })}
      />
      <small style={{ marginTop: '0px' }}>
        {__(
          `Pagination is ${options.pagination ? 'visible' : 'invisible'}`,
          'b-blocks'
        )}
      </small>
      {options.pagination && (
        <ToggleControl
          className="component-controll-margin"
          label={__('Dynamic Pagination', 'b-blocks')}
          checked={options.dynamicPagination}
          onChange={(value) =>
            setAttributes({ options: updateData(options,value,"dynamicPagination") })
          }
        />
      )}
    </PanelBody>
  )
}

export default PaginationSettings