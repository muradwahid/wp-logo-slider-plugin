import { Button } from '@wordpress/components';
const Devices = ({ title, device, renderFunction }) => {
  return (
    <div style={{ display: 'flex', justifyContent:"space-between",alignItems:"center"}}>
      <div>{title}</div>
      <div>
        <Button
          onClick={() => renderFunction("desktop")}
          isPressed={device.dextop === 'desktop'}
        >
          <span className="dashicons dashicons-desktop"></span>
        </Button>
        <Button
          onClick={() => renderFunction('tablet')}
          isPressed={device.tablet === 'tablet'}
        >
          <span className="dashicons dashicons-tablet"></span>
        </Button>
        <Button
          onClick={() => renderFunction('mobile')}
          isPressed={device.mobile === 'mobile'}
        >
          <span className="dashicons dashicons-smartphone"></span>
        </Button>
      </div>
    </div>
  );
};
export default Devices;
