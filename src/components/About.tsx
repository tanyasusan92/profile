import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      display: false,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      stacked: true,
      display: true,
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    title: {
      display: true,
      text: "My skills",
      color: "#fff",
    },
    datalabels: {
      color: "#fff",
    },
  },
};

export const data = {
  labels: ["Html5", "Css3", "React", "Java", "Figma", "Typescript"],
  datasets: [
    {
      backgroundColor: "#008391",
      borderColor: "#008391",
      data: [90, 90, 80, 40, 70, 50],
      barPercentage: 0.8,
      maxBarThickness: 15,
    },
    {
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      data: [10, 10, 20, 60, 30, 50],
      barPercentage: 0.8,
      maxBarThickness: 15,
    },
    {
      backgroundColor: "#fff",
      borderColor: "#fff",
      data: [0, 0, 0, 0, 0, 0],
      barPercentage: 0.8,
      maxBarThickness: 15,
    },
  ],
};

function About() {
  return (
    <div className="flex items-center justify-center py-10 bg-split-white-blue">
      <div className="w-3/4 px-4 py-10 rounded-md shadow-lg bg-my-green">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-col items-center justify-center pb-4 md:pb-0">
            <div className="flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg">
              <img
                className="w-20 h-20"
                src={require("../assets/hourglass.png")}
                alt="hourglass"
              />
            </div>
            <div className="items-center justify-center pt-4 text-lg text-white md:text-xl lg:text-2xl">
              Fast work
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pb-4 md:pb-0">
            <div className="flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg">
              <img
                className="w-20 h-20"
                src={require("../assets/responsive.png")}
                alt="hourglass"
              />
            </div>
            <div className="items-center justify-center pt-4 text-lg text-white md:text-xl lg:text-2xl">
              Responsive design
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pb-4 md:pb-0">
            <div className="flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg">
              <img
                className="w-20 h-20"
                src={require("../assets/coding.png")}
                alt="coding"
              />
            </div>
            <div className="items-center justify-center pt-4 text-lg text-white md:text-xl lg:text-2xl">
              Clean code
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-10 lg:flex-row justify-evenly">
          <div className="flex flex-col items-center justify-center pb-4 md:pb-0">
            <div className="flex items-center justify-center">
              <img
                className="w-40 rounded-full h-60"
                src={require("../assets/TanyaPic.jpeg")}
                alt="avatar"
              />
            </div>
            <div className="items-center justify-center max-w-xl px-4 pt-4 text-white text-md md:text-lg lg:text-xl">
              "I am a developer, mother of two who wants to use my passion for
              coding to turn designs into clean code for any project that I am a
              part of."
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-center md:px-4 md:py-4">
            <div className="flex flex-col items-center justify-center px-1 py-1 shadow-lg md:p-4 sm:px-4 sm:py-4">
              <Bar options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
