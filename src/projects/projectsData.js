import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Discover Crypto",
    image: projectOne,
    description: (
      <ul>
        <li>
          Developed a comprehensive cryptocurrency dashboard that provides
          real-time data and analytics for various cryptocurrencies.
        </li>
        <li>
          Designed and implemented the user interface using ReactJS, ensuring an
          intuitive and visually appealing dashboard layout.
        </li>
        <li>
          Integrated APIs to fetch real-time data from popular cryptocurrency
          exchanges, such as CoinGecko.
        </li>
        <li>
          Implemented data visualization features using charting libraries to
          display historical price trends and performance metrics.
        </li>
        <li>
          Technologies used: ReactJS, Javascript, Framer Motion, Local Storage,
          Chartjs.
        </li>
      </ul>
    ),
    github: "https://crypto-tracker-liart.vercel.app/",
    demo: "https://crypto-tracker-liart.vercel.app/",
  },
  2: {
    title: "Typing Test",
    image: projectTwo,
    description: (
      <ul>
        <li>
          Developed a web-based Typing Test application that allows users to
          assess and improve their typing speed and accuracy.
        </li>
        <li>
          Incorporated features such as countdown timer, progress tracking, and
          error highlighting to enhance the user experience.
        </li>
        <li>
          Authentication feature implemented using Firebase Authentication
        </li>
        <li>
          Technologies used: ReactJS, Javascript, Framer Motion, Local Storage,
          Chartjs, Firebase
        </li>
      </ul>
    ),
    github: "https://github.com/ashishkandpal/touch-typing",
    demo: "https://touch-typing-pi.vercel.app/",
  },
  3: {
    title: "Podcast Platform",
    image: projectThree,
    description: (
      <ul>
        <li>
          Developed a comprehensive podcast platform where user can listen to
          podcasts as well as user can create his own podcasts
        </li>
        <li>User can search podcasts in the dashboard.</li>
        <li>
          Designed and implemented the user interface using ReactJS, ensuring an
          intuitive and visually appealing layout
        </li>
        <li>
          For backend firebase is integrated with this app and user can register
          via two methods email and password or by google
        </li>
        <li>Technologies used: ReactJS, Javascript, Redux, HTML, CSS</li>
      </ul>
    ),
    github: "https://github.com/ashishkandpal/podcast-creator",
    demo: "https://podocast.vercel.app/",
  },
};

export default projects;
