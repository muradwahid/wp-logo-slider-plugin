import {
  InspectorControls,
  MediaPlaceholder
} from '@wordpress/block-editor';
import { useEffect,Fragment,useState } from 'react';
import Slider from './Slider';
import SecondSliderOption from './components/SecondSliderOption/SecondSliderOption';
import { TabPanel } from 'bpl-gutenberg-panel';
import SlideSettings from './components/Settings/ContentSettings/SlideSettings';
import ContentBlockControl from './components/Settings/ContentSettings/Contents/ContentBlockControl';
import StyleSettings from './components/Settings/StyleSettings/StyleSettings';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { image, cId,options } = attributes;
  const [tab,setTab]=useState("content")
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId

  return (
    <Fragment>
      <InspectorControls>
        <TabPanel value={tab} onChange={value => setTab(value)} />

      </InspectorControls>
      <ContentBlockControl attributes={attributes} setAttributes={setAttributes} />
      <InspectorControls>
      {
        tab ==="content" && <SlideSettings attributes={attributes} setAttributes={setAttributes} />
        }
        {
        tab==="style" && <StyleSettings attributes={attributes} setAttributes={setAttributes} />
        }
      </InspectorControls>
    <div className={className} id={`bpslHelloBlock-${clientId}`}>
      <div>
        {image.length > 0 ? (
          <div>
            {options.autoplay ? (
              <Slider setAttributes={setAttributes} attributes={attributes} />
            ) : (
              <SecondSliderOption
                setAttributes={setAttributes}
                attributes={attributes}
              />
            )}
          </div>
        ) : (
          <MediaPlaceholder
            allowedTypes={['image']}
            multiple={true}
            labels={{
              title: 'Upload Logo',
            }}
            accept="image/*"
            addToGallery={true}
            onSelect={(media) => {
              setAttributes({ image: media });
            }}
          />
        )}
      </div>
    </div>
    </Fragment>
  );
};
export default Edit;
