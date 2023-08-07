import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import LinkButton from '../../components/LinkButton/LinkButton';
import './Helsinki.css';

const Helsinki = () => {
    const NOT_SO_SECRET_MAP_API_KEY = 'AIzaSyAN2Zeuaj28IMYNMg7o2kcixZq8CqVKtjM';

    return (
        <div className='helsinki-info'>
            <h1 className='title'>Helsinki Info</h1>
            <div className='section info-section'>
                <div className='info-text'>
                    <h2>Welcome to Helsinki and Pasila</h2>
                    <p>
                        Helsinki is Finland's capital city, where urban charm
                        meets natural beauty. In the Pasila district, Business
                        College Helsinki finds its home alongside Haaga-Helia
                        University of Applied Sciences and Helsinki Expo and
                        Convention Centre Messukeskus.
                    </p>
                    <LinkButton url='https://www.visitfinland.com/en/places-to-go/helsinki-region/'>
                        Visit Finland | Helsinki region
                    </LinkButton>
                </div>
                <iframe
                    width={500}
                    height={350}
                    style={{ border: 0 }}
                    loading='lazy'
                    allowFullScreen
                    referrerPolicy='no-referrer-when-downgrade'
                    src={`https://www.google.com/maps/embed/v1/place?key=${NOT_SO_SECRET_MAP_API_KEY}
    &q=Helsinki+Business+College`}
                ></iframe>
            </div>
            <div className='section info-section'>
                <div className='info-text'>
                    <h2>Public Transportation</h2>
                    <p>
                        Business College Helsinki is located close to Pasila
                        train station and can be easily reached also by bus and
                        tram.
                    </p>
                    <p>
                        Check{' '}
                        <Link
                            className='hsl-link'
                            to='https://www.hsl.fi/en'
                            target='_blank'
                            rel='noreferrer'
                        >
                            hsl.fi
                        </Link>{' '}
                        for public transport options along with their schedules,
                        routes, and fares. The website also features a journey
                        planner tool (Reittiopas) that helps users find the best
                        routes and plan their trips efficiently.
                    </p>
                    <LinkButton url='https://reittiopas.hsl.fi/etusivu/-/Rautatiel%C3%A4isenkatu%205%2C%20Helsinki%3A%3A60.201434%2C24.93556?locale=en'>
                        HSL Route Search | Business College Helsinki
                    </LinkButton>
                </div>
                <img
                    className='tram-img'
                    src='https://images.unsplash.com/photo-1647247034410-79306bddcfbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                    alt='trams in Helsinki'
                />
            </div>
            <div className='section info-section'>
                <div className='info-text'>
                    <h2>Explore Helsinki</h2>
                    <LinkButton url='https://www.myhelsinki.fi/your-local-guide-to-helsinki'>
                        MyHelsinki.fi
                    </LinkButton>
                    <LinkButton url='https://www.myhelsinki.fi/en/see-and-do/events'>
                        MyHelsinki.fi | Events
                    </LinkButton>
                    <LinkButton url='https://www.myhelsinki.fi/see-and-do/sights/top-15-sights-in-helsinki'>
                        Top 15 Sights in Helsinki
                    </LinkButton>
                    <LinkButton url='https://www.visitfinland.com/en/articles/top-10-must-see-museums-in-helsinki-region/'>
                        Top 10 Museums in Helsinki
                    </LinkButton>
                </div>
                <img
                    className='helsinki-img'
                    src='https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                    alt='Helsinki cathedral'
                />
            </div>
        </div>
    );
};

export default Helsinki;
