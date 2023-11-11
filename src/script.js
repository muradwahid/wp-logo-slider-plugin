import SliderFront from './components/Slider/SliderFront';
import './style.scss';
import { createRoot } from 'react-dom/client';
// Block Name
function FrontEnd({attributes}) {
	return (
		<>
			<SliderFront attributes={attributes}/>
    </>
  );
}

const container = document.querySelectorAll('.wp-block-bpsl-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
})