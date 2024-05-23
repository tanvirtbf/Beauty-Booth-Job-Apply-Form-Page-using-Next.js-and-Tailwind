import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const JobApplyFormLeft = () => {
  return (
    <div className="col-span-12 sm:col-span-4 bg-[#1DBE72] h-auto p-4">
      <div className="w-full flex justify-between ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="137.999"
            height="20"
            viewBox="0 0 137.999 20"
            className="fill-white"
          >
            <g id="Logo" transform="translate(-202.249 -18.035)">
              <path
                id="Text_logo"
                data-name="Text logo"
                d="M1.309-10.769H5.441a6.794,6.794,0,0,1,2.681.463,3.6,3.6,0,0,1,1.6,1.222,2.846,2.846,0,0,1,.522,1.645,2.532,2.532,0,0,1-.574,1.675,4.385,4.385,0,0,1-1.45,1.123,4.12,4.12,0,0,1,1.9,1.123,2.659,2.659,0,0,1,.709,1.872,3.179,3.179,0,0,1-1.346,2.68,6.509,6.509,0,0,1-3.933,1H1.309ZM5.9-5.074A1.394,1.394,0,0,0,6.954-5.6a2.483,2.483,0,0,0,.47-1.685A2.208,2.208,0,0,0,6.86-8.956a2.1,2.1,0,0,0-1.5-.532H4.189v4.414ZM5.482.758A2.455,2.455,0,0,0,7.256.138,2.5,2.5,0,0,0,7.9-1.744q0-2.148-1.857-2.148H4.189V.758Zm11.581,1.5a5.037,5.037,0,0,1-3.6-1.212A4.941,4.941,0,0,1,12.181-2.71a5.625,5.625,0,0,1,1.252-3.931,4.355,4.355,0,0,1,3.38-1.369,3.92,3.92,0,0,1,3.015,1.153,4.663,4.663,0,0,1,1.075,3.3,3.963,3.963,0,0,1-.073.828q-.073.335-.094.414H15.123A4.54,4.54,0,0,0,15.676.2,1.976,1.976,0,0,0,17.4.936,2.648,2.648,0,0,0,18.65.65a3.081,3.081,0,0,0,.856-.631,2,2,0,0,0,.313-.384l.939.69A2.257,2.257,0,0,1,20.329.9a4.281,4.281,0,0,1-1.252.926A4.283,4.283,0,0,1,17.064,2.256ZM18.316-3.6V-4.05a4.677,4.677,0,0,0-.334-2.1,1.222,1.222,0,0,0-1.169-.6,1.443,1.443,0,0,0-.929.276,1.809,1.809,0,0,0-.532.956,8.7,8.7,0,0,0-.23,1.921Zm6.928,5.852a3.675,3.675,0,0,1-2.337-.69A2.276,2.276,0,0,1,22.03-.325a2.609,2.609,0,0,1,1.722-2.512,11.941,11.941,0,0,1,4.017-.956v-.571a3.106,3.106,0,0,0-.4-1.842,1.6,1.6,0,0,0-1.335-.5,3.659,3.659,0,0,0-.991.158,7.72,7.72,0,0,0-.96.335q-.407.177-.532.236l-.271-1.261q.125-.059.595-.246a9.272,9.272,0,0,1,1.189-.365,6.042,6.042,0,0,1,1.45-.177,4.914,4.914,0,0,1,2.994.778,3.136,3.136,0,0,1,1.033,2.67V-.109q0,1.044.438,1.044a1.625,1.625,0,0,0,.4-.059L31.691.8l.083,1.025q-.1.039-.5.138t-.908.2a4.86,4.86,0,0,1-.908.1,1.4,1.4,0,0,1-.939-.286,1.5,1.5,0,0,1-.438-.936h-.1q0,.059-.282.365a2.769,2.769,0,0,1-.887.581A3.8,3.8,0,0,1,25.244,2.256Zm.918-1.32A1.558,1.558,0,0,0,27.028.7a1.848,1.848,0,0,0,.553-.522,1.5,1.5,0,0,0,.188-.325v-2.6a4.663,4.663,0,0,0-2.118.621,1.647,1.647,0,0,0-.72,1.468A1.834,1.834,0,0,0,25.264.532,1.1,1.1,0,0,0,26.162.936Zm10.392,1.32a3.238,3.238,0,0,1-2.41-.818,3.522,3.522,0,0,1-.8-2.552v-6.7h2.775v6.148A3.417,3.417,0,0,0,36.449.128,1.215,1.215,0,0,0,37.534.62a2.286,2.286,0,0,0,.9-.167,2.847,2.847,0,0,0,.626-.345q.23-.177.292-.236V-7.813h2.775V2.039H39.892l-.4-.867h-.042q0,.039-.334.325a3.221,3.221,0,0,1-.981.522A4.648,4.648,0,0,1,36.553,2.256Zm11.373,0a3.04,3.04,0,0,1-2.191-.69,3.156,3.156,0,0,1-.709-2.325V-6.3h-1V-7.478l1.022-.276,1.335-3.33H47.8v3.271h2.3V-6.3H47.8v4.867A7.916,7.916,0,0,0,47.895-.02a1.2,1.2,0,0,0,.3.67.845.845,0,0,0,.584.187,3.278,3.278,0,0,0,.751-.079,1.235,1.235,0,0,0,.334-.1l.167,1.123a.841.841,0,0,1-.23.138,3.173,3.173,0,0,1-.7.227A5.362,5.362,0,0,1,47.926,2.256Zm4.925,4.926a4.6,4.6,0,0,1-.845-.069,3.7,3.7,0,0,1-.553-.138q-.188-.069-.23-.089l.23-1.537a3.312,3.312,0,0,0,.417.128,2.592,2.592,0,0,0,.668.089,1.89,1.89,0,0,0,1.523-.7,9.86,9.86,0,0,0,1.294-2.433L50.91-7.813h3.36L56.815-.8l2.149-7.015H60.7L57.087,2.256a22.97,22.97,0,0,1-1.221,2.719,5.3,5.3,0,0,1-1.3,1.626A2.666,2.666,0,0,1,52.851,7.182ZM67.729-10.769h4.132a6.794,6.794,0,0,1,2.681.463,3.6,3.6,0,0,1,1.6,1.222,2.846,2.846,0,0,1,.522,1.645,2.532,2.532,0,0,1-.574,1.675,4.385,4.385,0,0,1-1.45,1.123,4.12,4.12,0,0,1,1.9,1.123,2.659,2.659,0,0,1,.709,1.872A3.179,3.179,0,0,1,75.9,1.034a6.509,6.509,0,0,1-3.933,1H67.729ZM72.32-5.074A1.394,1.394,0,0,0,73.373-5.6a2.483,2.483,0,0,0,.47-1.685,2.208,2.208,0,0,0-.563-1.675,2.1,2.1,0,0,0-1.5-.532H70.609v4.414ZM71.9.758A2.455,2.455,0,0,0,73.676.138a2.5,2.5,0,0,0,.647-1.882q0-2.148-1.857-2.148H70.609V.758Zm11.56,1.5a4.707,4.707,0,0,1-3.6-1.34,5.333,5.333,0,0,1-1.262-3.8,5.333,5.333,0,0,1,1.262-3.8,4.707,4.707,0,0,1,3.6-1.34,4.735,4.735,0,0,1,3.62,1.34,5.333,5.333,0,0,1,1.262,3.8,5.234,5.234,0,0,1-1.3,3.793A4.744,4.744,0,0,1,83.463,2.256Zm0-1.3a1.555,1.555,0,0,0,1.1-.374,2.284,2.284,0,0,0,.595-1.2,10.723,10.723,0,0,0,.188-2.266,10.725,10.725,0,0,0-.188-2.266,2.27,2.27,0,0,0-.584-1.192,1.573,1.573,0,0,0-1.106-.365,1.573,1.573,0,0,0-1.106.365,2.27,2.27,0,0,0-.584,1.192,10.6,10.6,0,0,0-.188,2.246,10.872,10.872,0,0,0,.188,2.276A2.293,2.293,0,0,0,82.367.581,1.555,1.555,0,0,0,83.463.955Zm10.955,1.3a4.707,4.707,0,0,1-3.6-1.34,5.333,5.333,0,0,1-1.262-3.8,5.333,5.333,0,0,1,1.262-3.8,4.707,4.707,0,0,1,3.6-1.34,4.735,4.735,0,0,1,3.62,1.34,5.333,5.333,0,0,1,1.262,3.8A5.234,5.234,0,0,1,98,.906,4.744,4.744,0,0,1,94.418,2.256Zm0-1.3a1.555,1.555,0,0,0,1.1-.374,2.284,2.284,0,0,0,.595-1.2A10.724,10.724,0,0,0,96.3-2.887a10.724,10.724,0,0,0-.188-2.266,2.27,2.27,0,0,0-.584-1.192,1.573,1.573,0,0,0-1.106-.365,1.573,1.573,0,0,0-1.106.365,2.27,2.27,0,0,0-.584,1.192,10.6,10.6,0,0,0-.188,2.246,10.871,10.871,0,0,0,.188,2.276A2.294,2.294,0,0,0,93.322.581,1.555,1.555,0,0,0,94.418.955Zm10.016,1.3a3.04,3.04,0,0,1-2.191-.69,3.156,3.156,0,0,1-.709-2.325V-6.3h-1V-7.478l1.023-.276,1.335-3.33h1.419v3.271h2.3V-6.3h-2.3v4.867A7.916,7.916,0,0,0,104.4-.02a1.2,1.2,0,0,0,.3.67.844.844,0,0,0,.584.187,3.278,3.278,0,0,0,.751-.079,1.235,1.235,0,0,0,.334-.1l.167,1.123a.841.841,0,0,1-.23.138,3.174,3.174,0,0,1-.7.227A5.362,5.362,0,0,1,104.434,2.256Zm4.09-14.916,2.775-.158v5.675h.083q0-.039.344-.256a4.348,4.348,0,0,1,.949-.414,4.594,4.594,0,0,1,1.419-.2,3.232,3.232,0,0,1,2.421.818,3.551,3.551,0,0,1,.793,2.552v6.68h-2.754V-4.424a2.688,2.688,0,0,0-.313-1.547,1.322,1.322,0,0,0-1.106-.4,2.557,2.557,0,0,0-.929.158,2.779,2.779,0,0,0-.657.345,1.373,1.373,0,0,0-.25.207v7.7h-2.775Z"
                transform="translate(222.939 30.853)"
              />
              <path
                id="_2"
                data-name="2"
                d="M31.027,41.808a4.4,4.4,0,0,0-3.657-2.4c-1.448-.061-3.284,1.266-2.4,2.524a7.972,7.972,0,0,0,3.891,2.452A1.973,1.973,0,0,0,31.027,41.808Z"
                transform="translate(177.511 -8.691)"
                fill="#ff437a"
                fill-rule="evenodd"
              />
              <path
                id="_1"
                data-name="1"
                d="M18.354,22.883c-1.145-1.958-4.084,1.594-1.632,4.036,1.588,1.582,4.042,1.625,5.741,3.293.943.926.828,3.337,2.714,3.8a2.951,2.951,0,0,0,3.65-1.9c.742-1.9.781-3.977-2.227-5.311C23.554,25.455,20.369,26.328,18.354,22.883Zm-.066-6.021c-2.405-1.567-3.639,3.741-1.152,4.205a5.719,5.719,0,0,1,4.186,2.615c.8,1.09,2.781,1.472,3.925,1.472,1.981,0,2.91-1.3,2.816-2.61a4.428,4.428,0,0,0-1.949-3.135C23.265,17.555,20.347,18.2,18.288,16.863Z"
                transform="translate(186.476 1.46)"
                fill-rule="evenodd"
              />
            </g>
          </svg>
        </div>
        <div className="flex gap-1">
          <Link href={"https://www.facebook.com/beautybooth.com.bd"}>
            <FaFacebook />
          </Link>
          <Link href={"https://x.com/beautyboothbd"}>
            <FaXTwitter />
          </Link>
          <Link href={"https://www.instagram.com/beautyboothbd"}>
            <FaInstagram />
          </Link>
          <Link href={"https://www.tiktok.com/@beautyboothbd"}>
            <FaTiktok />
          </Link>
        </div>
      </div>
      <div className=" h-full flex justify-center items-center flex-col">
        <div className="flex justify-center">
          <img
            src="https://www.ansonika.com/potenza/img/info_graphic_1.svg"
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-4 pt-4 pb-12 px-8">
          <h1 className="font-semibold text-3xl text-white text-center">
            We are Hiring
          </h1>
          <p className="text-sm text-white font-medium text-center">
            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
            concludaturque usu, facete detracto patrioque an per, lucilius
            pertinacia eu vel.
          </p>
        </div>
        <div className="flex justify-center pb-4">
          <button className="bg-[#F8BD2C] text-[#111] border-none cursor-pointer px-6 py-3 text-center font-semibold text-sm rounded-3xl hover:bg-pink-600 hover:text-white">
            Purchase this template
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobApplyFormLeft;
