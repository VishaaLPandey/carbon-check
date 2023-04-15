"use client";

import './globals.css'
import Picture1 from './assets/Picture1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat, Inter } from 'next/font/google'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import LineChart from './chart';


const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ['latin'],
})

const inter = Inter({
  weights: [400, 500, 600, 700],
  subsets: ['latin'],
})

const data1 = {
  labels: ['1858', '1880', '1900', '1920', '1940', '1960', '1980', '2000', '2021'],
  datasets: [
    {
      label: 'Per capita CO₂ emissions Dataset in Tonnes',
      data: [0.01, 0.02, 0.04, 0.11, 0.13, 0.25, 0.42, 0.92, 1.93],
      fill: false,
      borderColor: '#ff0000',
      tension: 0.1,
    },
  ],
};

const data2 = {
  labels: ['1858', '1880', '1900', '1920', '1940', '1960', '1980', '2000', '2021'],
  datasets: [
    {
      label: "India's Annual Carbon Emmisions Dataset in Million Tonnes",
      data: [0.34, 1.89, 11.93, 34.87, 52.31, 111.33, 291.71, 978.10, 2071.22],
      fill: false,
      borderColor: '#0000ff',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  maintainAspectRatio: true,
};


const Home = () => {

  const { ref, inView } = useInView({
    threshold: 0.7, // Trigger when the element is 70% in view
    triggerOnce: true // Trigger only once
  });


  return (
    <div className={inter.className}>
      <section className="wrapper">
        <div className="container">

          <div className="grid-cols-2">
            <div className="grid-item-1">
              <h1 className="main-heading"><strong>Welcome to <br></br><span>Earth Impact</span></strong>
              </h1>
              <p className="info-text">
                Small steps for a big impact: track and reduce your carbon footprint with Earth Impact
              </p>

              <div className="btn_wrapper">
                <Link href='/calculate'>
                  <button className="btn view_more_btn">
                    Calculate now <i className="ri-arrow-right-line"></i>
                  </button>
                </Link>


                <button className="btn documentation_btn" href="#about-content">Learn More</button>
              </div>
            </div>
            <div className="grid-item-2">
              <div className="team_img_wrapper">
                <Image src={Picture1} alt="Header-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="featurette-divider" />

      <section>
        <div className='Stats'>
          <h1>Statistics That Tell The Tale</h1>
        </div>
         
        <div className='counter-container'>
          
          <div className='counter'>
            <CountUp start={inView ? null : -100} ref={ref} end={2} duration={5} suffix=' Tonnes' className='count' />
            <p>Per capita CO2 emissions in India</p>
          </div>
          <div className='counter'>
            <CountUp start={inView ? null : 0} end={54} duration={5} suffix=' Billion Tonnes' className='count' />
            <p>India's share in World Emissions till date</p>
          </div>
          <div className='counter'>
            <CountUp start={inView ? null : -10} end={15} duration={5} suffix=' Tonnes' className='count' />
            <p>Per capita CO2 emissions in US</p>
          </div>
        </div>
      </section>


      <div className='chart'>
        <div>
          <h2>India: Per capita: how much CO2 does the average person emit?</h2>
          <LineChart data={data1} options={options} width={600} height={600} />
        </div>
        <div>
          <h2>India: What are the country's annual CO2 emissions?</h2>
          <LineChart data={data2} options={options} width={600} height={600} />
        </div>
      </div>

      <hr className="featurette-divider" />

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image src={pic2} alt="About Us Image" />
            </div>
            <div className="about-text">
              <h2>About Earth Impact</h2>
              <p>Earth Impact is a platform that aims to bring awareness among people about how carbon emissions affect our lives, calculating your contributions to it and letting people reduce it, together as one! </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2><strong>What is a carbon footprint?</strong></h2>
              <p>A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) that are generated by our actions.<br /><br />

                Although India is fairly carbon efficient, it still emits a substantial amount of carbon. Globally, the average carbon footprint is closer to 4 tons. To have the best chance of avoiding a 2℃ rise in global temperatures, the average global carbon footprint per year needs to drop to under 2 tons by 2050.<br /><br />

                Lowering individual carbon footprints to 2 ton doesn't happen overnight! By making small changes to our actions, like eating less meat, taking fewer connecting flights and line drying our clothes, we </p>
            </div>
            <div className="about-image">
              <Image src={pic3} alt="Carbon Footprint" />
            </div>
          </div>
        </div>
      </section>

      <hr className="featurette-divider" />

      <section className="wrapper">
        <h2>Features In a Nutshell</h2>
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <div className="grid-cols-3">
            <div className="grid-col-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" /><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" /></svg>
              </div>
              <div className="featured_info">
                <span>Built for individuals </span>
                <p>
                  Earth Impact is built with individuals in mind, aiming for small households for the time being.
                </p>
              </div>
            </div>
            <div className="grid-col-item">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="featured_info">
                <span>Easy to use</span>
                <p>
                  With a simple, straightforward approach and a minimal interface, you can find your carbon footprint in a few minutes!
                </p>
              </div>
            </div>

            <div className="grid-col-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="featured_info">
                <span>Compete with others!</span>
                <p>
                  Earth Impact tells you standings among other people in the same category so you can see who's the best at saving mother Earth!

                </p>
              </div>
            </div>
            <div className="grid-col-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <div className="featured_info">
                <span>Badges for the bestest</span>
                <p>
                  Earth Impact gives badges and awards to those living the most carbon neutral lifestyle. What's stopping you from being the top performer?
                </p>
              </div>
            </div>
            <div className="grid-col-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="featured_info">
                <span>Daily challenges for motivation!</span>
                <p>
                  Earth Impact gives you daily tasks you can select yourself and work on them for the day, marking them as done to increase your score!
                </p>
              </div>
            </div>
            <div className="grid-col-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fillRule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" /></g></svg>
              </div>
              <div className="featured_info">
                <span>Getting industry ready soon!</span>
                <p>
                  Earth Impact industriali emission Calculator is in developement and will be available in future releases

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="featurette-divider" />

      <div className="leaderboard-outer"><br></br>
        <h1>Check Out The Top Performers on Earth Impact!</h1>
        <p>These people have been the highest performers of all time, making sure to consistently do their part. Kudos to them for helping in making the Earth a better place to live. Their contributions are highly appreciated by Earth Impact team and fellow people of dear Earth!</p>
        <div className="leaderboard">
          <h2>Top 5 Performers</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Challenges Completed</th>
                  <th>Carbon Saved (kg Co<sub>2</sub>)</th>
                  <th>Total Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>95</td>
                  <td>90</td>
                  <td>950 xp</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Doe</td>
                  <td>91</td>
                  <td>92</td>
                  <td>910 xp</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Bob Johnson</td>
                  <td>89</td>
                  <td>88</td>
                  <td>890 xp</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Sara Lee</td>
                  <td>88</td>
                  <td>81</td>
                  <td>880 xp</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mike Davis</td>
                  <td>85</td>
                  <td>79</td>
                  <td>850 xp</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div>
        <br></br>
        <p>Join in on the bandwagon! Get to competing with the best, click the below button and get started straight away!
        </p>
        <Link href="/calculate">
          <button className="btn calculate">
            Calculate my carbon footprint now <i className="ri-arrow-right-line"></i>
          </button>
        </Link>


      </div>
      <hr className="featurette-divider" />
 

    
    
    </div>


  )
}

export default Home
