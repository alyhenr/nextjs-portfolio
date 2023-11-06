import { TypeAnimation } from 'react-type-animation';

const HeroTypeAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                'Alysson Henrique',
                2000,
                'Full Stack Developer',
                2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
        />
    );
};

export default HeroTypeAnimation;