import { useState } from "react";
import { BlockControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { ToolbarGroup, Popover, Button, ToolbarItem } from "@wordpress/components";
import { link } from '@wordpress/icons';


function ContentBlockControl({setAttributes,attributes}) {
  const [toolbarTgl, setToolbarTgl] = useState(false);
  const { image, idx, orderIdx } = attributes;
    const itemRight = () => {
    const copyImg = [...image];
    const changeOrder = copyImg.splice(orderIdx, 1);
    copyImg.splice(Number(orderIdx) + 1, 0, changeOrder[0]);
    setAttributes({ image: copyImg, orderIdx: orderIdx + 1 });
  };
  const itemLeft = () => {
    const copyImg = [...image];
    const changeOrder = copyImg.splice(orderIdx, 1);
    copyImg.splice(Number(orderIdx) - 1, 0, changeOrder[0]);
    setAttributes({ image: copyImg, orderIdx: orderIdx - 1 });
  };
  // const brandLink = (link) => {
  //   const restImg = [...image];
  //   setAttributes({ image: (restImg[orderIdx].link = link) });
  // };
  const handleUrlChange = (e) => {
    e.preventDefault();
    const restImg = [...image];
    restImg[orderIdx].link = e.target.value;
    setAttributes({ image: restImg });
  };
  return (
    <BlockControls>
      {image.length > 0 && (
        <MediaUploadCheck>
          <MediaUpload
            onSelect={(value) =>
              setAttributes({ image: value })
            }
            allowedTypes={['image']}
            value={image?.map((value) => value?.id)}
            render={({ open }) => (
              <button onClick={open}>Add new logo</button>
            )}
            gallery={true}
            multiple={true}
          />
          <MediaUpload
            gallery={true}
            onSelect={(value) => setAttributes(image.splice(idx, 1, value))}
            value={image?.map((val) => val?.id)}
            allowedTypes={['image']}
            render={({ open }) => setAttributes({ imageReplace: open })}
            multiple={false}
          />
        </MediaUploadCheck>
      )}
      <ToolbarItem
        icon={link}
        as={Button}
        style={{ height: '100%' }}
        onClick={() => setToolbarTgl(!toolbarTgl)}
      ></ToolbarItem>
      {toolbarTgl && (
        <Popover>
          <form>
            <input
              type="url"
              placeholder="logo link"
              onChange={handleUrlChange}
            />
          </form>
        </Popover>
      )}
      <ToolbarGroup>
        <ToolbarItem
          disabled={orderIdx === 0 ? true : false}
          icon="arrow-left-alt2"
          onClick={itemLeft}
          as={Button}
        ></ToolbarItem>
        <ToolbarItem
          disabled={orderIdx === image.length - 1 ? true : false}
          icon="arrow-right-alt2"
          onClick={itemRight}
          as={Button}
        ></ToolbarItem>
      </ToolbarGroup>
    </BlockControls>
  )
}

export default ContentBlockControl