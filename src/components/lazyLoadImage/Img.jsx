import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ({className, src, alt, effect}) => {
    return (
        <LazyLoadImage
            key={src || 0}
            className={className}
            src={src}
            alt={alt}
            effect={effect}
        />
    );
};

Img.defaultProps = {
    className: '',
    src: '',
    alt: 'Image',
    effect: 'blur'
}

export default Img;