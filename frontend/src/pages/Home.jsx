import iconChat from '../assets/img/icon-chat.png';
import iconMoney from '../assets/img/icon-money.png';
import iconSecurity from '../assets/img/icon-security.png';
import FeatureItem from '../components/FeatureItem';
import Banner from '../components/Banner';

const Home = () => {
    const featureItems = [
        {
            icon: iconChat,
            title: 'You are our #1 priority',
            description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
        },
        {
            icon: iconMoney,
            title: 'More savings means higher rates',
            description: 'The more you save with us, the higher your interest rate will be!',
        },
        {
            icon: iconSecurity,
            title: 'Security you can trust',
            description: 'We use top of the line encryption to make sure your data and money is always safe.',
        },
    ];

    return (
        <main>
            <Banner />
            <section className='features'>
                {featureItems.map((item, index) => (
                    <FeatureItem key={index} icon={item.icon} title={item.title}>
                        {item.description}
                    </FeatureItem>
                ))}
            </section>
        </main>
    );
};

export default Home;
