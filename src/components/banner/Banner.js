import imgOne from '../../assets/bottom1.jpg';
import imgTwo from '../../assets/bottom2.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
    return (
        <div className="py-20">
            <div className="container grid md:grid-cols-2 gap-8">
                {[imgOne, imgTwo].map(img => <BannerItem key={img} img={img} />)}
            </div>
        </div>
    )
};

export default Banner;