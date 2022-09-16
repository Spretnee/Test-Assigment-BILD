const services = [
  {
    id: "1",
    name: "websites",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="58px">
        <path
          fillRule="evenodd"
          fill="rgb(115, 115, 115)"
          d="M48.438,50.267 L47.407,50.267 C47.239,50.873 46.998,51.448 46.691,51.981 L47.644,52.934 C48.254,53.544 48.254,54.532 47.644,55.142 L47.092,55.694 C46.482,56.304 45.493,56.304 44.883,55.694 L43.923,54.735 C43.391,55.038 42.818,55.274 42.214,55.439 L42.214,56.439 C42.214,57.301 41.514,57.1000 40.652,57.1000 L39.870,57.1000 C39.008,57.1000 38.308,57.301 38.308,56.439 L38.308,55.439 C37.704,55.274 37.131,55.038 36.598,54.735 L35.639,55.694 C35.029,56.304 34.040,56.304 33.430,55.694 L32.878,55.142 C32.268,54.532 32.268,53.544 32.878,52.934 L33.831,51.981 C33.524,51.448 33.283,50.873 33.115,50.267 L32.084,50.267 C31.221,50.267 30.522,49.568 30.522,48.705 L30.522,47.925 C30.522,47.063 31.221,46.364 32.084,46.364 L33.103,46.364 C33.264,45.763 33.495,45.191 33.794,44.661 L32.878,43.745 C32.268,43.135 32.268,42.146 32.878,41.537 L33.430,40.985 C34.040,40.375 35.029,40.375 35.639,40.985 L36.538,41.883 C37.087,41.563 37.681,41.314 38.308,41.143 L38.308,40.094 C38.308,39.232 39.008,38.533 39.870,38.533 L40.652,38.533 C41.514,38.533 42.214,39.232 42.214,40.094 L42.214,41.143 C42.841,41.314 43.435,41.563 43.984,41.883 L44.883,40.985 C45.493,40.375 46.482,40.375 47.092,40.985 L47.644,41.537 C48.254,42.146 48.254,43.135 47.644,43.745 L46.728,44.661 C47.026,45.191 47.257,45.763 47.419,46.364 L48.438,46.364 C49.300,46.364 49.1000,47.063 49.1000,47.925 L49.1000,48.705 C49.1000,49.568 49.300,50.267 48.438,50.267 ZM40.261,44.046 C37.888,44.046 35.965,45.968 35.965,48.340 C35.965,50.711 37.888,52.633 40.261,52.633 C42.633,52.633 44.557,50.711 44.557,48.340 C44.557,45.968 42.633,44.046 40.261,44.046 ZM40.261,50.242 C39.182,50.242 38.308,49.369 38.308,48.291 C38.308,47.213 39.182,46.339 40.261,46.339 C41.339,46.339 42.214,47.213 42.214,48.291 C42.214,49.369 41.339,50.242 40.261,50.242 ZM36.940,24.193 L34.813,24.193 C34.468,25.444 33.971,26.629 33.338,27.729 L35.303,29.694 C36.561,30.951 36.561,32.989 35.303,34.246 L34.165,35.384 C32.907,36.642 30.867,36.642 29.610,35.384 L27.632,33.407 C26.534,34.032 25.352,34.518 24.106,34.857 L24.106,36.919 C24.106,38.697 22.664,40.138 20.885,40.138 L19.275,40.138 C17.496,40.138 16.054,38.697 16.054,36.919 L16.054,34.857 C14.808,34.518 13.626,34.032 12.529,33.407 L10.551,35.384 C9.293,36.642 7.254,36.642 5.996,35.384 L4.857,34.246 C3.599,32.989 3.599,30.951 4.857,29.694 L6.823,27.729 C6.189,26.629 5.693,25.444 5.347,24.193 L3.221,24.193 C1.442,24.193 -0.000,22.752 -0.000,20.974 L-0.000,19.365 C-0.000,17.587 1.442,16.146 3.221,16.146 L5.321,16.146 C5.654,14.907 6.131,13.728 6.747,12.635 L4.857,10.746 C3.599,9.489 3.599,7.451 4.857,6.193 L5.996,5.055 C7.254,3.798 9.293,3.798 10.551,5.055 L12.403,6.907 C13.537,6.248 14.760,5.734 16.054,5.382 L16.054,3.219 C16.054,1.441 17.496,-0.000 19.275,-0.000 L20.885,-0.000 C22.664,-0.000 24.106,1.441 24.106,3.219 L24.106,5.381 C25.400,5.734 26.624,6.248 27.757,6.907 L29.610,5.055 C30.867,3.798 32.907,3.798 34.165,5.055 L35.303,6.193 C36.561,7.451 36.561,9.489 35.303,10.746 L33.414,12.635 C34.030,13.728 34.506,14.907 34.839,16.146 L36.940,16.146 C38.718,16.146 40.161,17.587 40.161,19.365 L40.161,20.974 C40.161,22.752 38.718,24.193 36.940,24.193 ZM20.080,11.367 C15.188,11.367 11.223,15.331 11.223,20.220 C11.223,25.109 15.188,29.073 20.080,29.073 C24.972,29.073 28.938,25.109 28.938,20.220 C28.938,15.331 24.972,11.367 20.080,11.367 ZM20.080,24.143 C17.857,24.143 16.054,22.342 16.054,20.119 C16.054,17.897 17.857,16.095 20.080,16.095 C22.304,16.095 24.106,17.897 24.106,20.119 C24.106,22.342 22.304,24.143 20.080,24.143 Z"
        />
      </svg>
    ),
    text: (
      <>
        <h4 className="hidden-title">WEBSITES</h4>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Excepturi dolorem ipsum recusandae.</li>
          <li>Eos nobis beatae et.</li>
          <li>Architecto est cumque ipsa?</li>
          <li>Quo iure eius dolorum!</li>
          <li>Hic eveniet molestiae nulla?</li>
        </ul>
        <ul>
          <li>Lorem ipsum dolor sit.</li>
          <li>Pariatur impedit molestiae voluptatum?</li>
          <li>Aliquam sequi numquam debitis.</li>
          <li>Tempora exercitationem accusamus voluptatem?</li>
          <li>Assumenda, impedit? Aliquid, cumque.</li>
          <li>Nulla deserunt eos quidem.</li>
        </ul>
      </>
    ),
  },
  {
    id: "2",
    name: "photography",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="42px">
        <path
          fillRule="evenodd"
          fill="rgb(66, 62, 62)"
          d="M46.551,41.1000 L3.448,41.1000 C1.543,41.1000 -0.001,40.433 -0.001,38.500 L-0.001,8.750 C-0.001,6.817 1.543,5.250 3.448,5.250 L6.896,5.250 L6.896,-0.000 L20.689,0.109 L20.683,5.280 L46.551,5.250 C48.455,5.250 49.999,6.817 49.999,8.750 L49.999,38.500 C49.999,40.433 48.455,41.1000 46.551,41.1000 ZM17.241,3.500 L10.344,3.500 L10.344,8.750 L17.241,8.750 L17.241,3.500 ZM18.965,12.177 C12.299,12.177 6.896,17.661 6.896,24.427 C6.896,31.192 12.299,36.677 18.965,36.677 C25.630,36.677 31.034,31.192 31.034,24.427 C31.034,17.661 25.630,12.177 18.965,12.177 ZM42.241,9.661 C40.336,9.661 38.792,11.228 38.792,13.161 C38.792,15.094 40.336,16.661 42.241,16.661 C44.145,16.661 45.689,15.094 45.689,13.161 C45.689,11.228 44.145,9.661 42.241,9.661 ZM18.966,32.593 C14.681,32.593 11.207,29.068 11.207,24.719 C11.207,20.369 14.681,16.844 18.966,16.844 C23.250,16.844 26.724,20.369 26.724,24.719 C26.724,29.068 23.250,32.593 18.966,32.593 Z"
        />
      </svg>
    ),
    text: (
      <>
        <h4 className="hidden-title">PHOTOGRAPHY</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          adipisci ullam culpa maiores veniam eaque voluptate delectus illo
          molestiae, est aspernatur nobis ab a accusantium recusandae harum
          accusamus saepe, distinctio quod aliquam natus facilis? Earum vero rem
          aperiam voluptate at dolorum ducimus quia culpa nulla facere amet
          veniam nequeW.
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor fugit
            recusandae nulla omnis explicabo officia laudantium est nemo quidem.
          </li>
          <li>
            Sint reprehenderit vel dolor necessitatibus, porro, ipsa, delectus
            numquam quia fugit amet libero cumque!
          </li>
          <li>
            Quas perspiciatis earum distinctio architecto ea nihil nobis
            praesentium rem minima in vel animi soluta non nisi, alias sit rerum
            sapiente!
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "3",
    name: "seo",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="46px" height="46px">
        <path
          fillRule="evenodd"
          fill="rgb(115, 115, 115)"
          d="M45.082,43.994 L43.988,45.086 C42.780,46.293 40.821,46.293 39.613,45.086 L30.865,36.349 C29.850,35.336 29.740,33.819 30.428,32.636 L25.645,27.860 C23.073,29.766 19.899,30.908 16.449,30.908 C7.908,30.908 0.983,23.992 0.983,15.462 C0.983,6.931 7.908,0.016 16.449,0.016 C24.991,0.016 31.915,6.931 31.915,15.462 C31.915,19.433 30.402,23.042 27.936,25.779 L32.615,30.452 C33.799,29.764 35.319,29.875 36.333,30.888 L45.082,39.626 C46.290,40.832 46.290,42.788 45.082,43.994 ZM28.017,15.397 C28.017,8.1000 22.823,3.813 16.417,3.813 C14.633,3.813 12.963,4.248 11.452,4.967 C12.260,5.795 13.477,7.033 13.542,7.033 C12.285,7.033 8.171,11.142 8.171,12.494 C8.171,12.428 6.861,11.187 6.004,10.382 C5.267,11.905 4.817,13.592 4.817,15.397 C4.817,21.795 10.011,26.982 16.417,26.982 C22.823,26.982 28.017,21.795 28.017,15.397 Z"
        />
      </svg>
    ),
    text: (
      <>
        <h1>Lorem ipsum dolor sit</h1>
        <p>
          Dolore blanditiis impedit placeat! Ad suscipit, neque harum libero
          distinctio repellat incidunt accusantium in officiis minus
          consequuntur nostrum inventore amet! Culpa delectus ex impedit
          voluptas, consequuntur itaque. Impedit, saepe laudantium.
        </p>
        <h1>Distinctio</h1>
        <p>
          Pariatur tempora consequatur, blanditiis nihil neque dolores,
          laboriosam rerum esse voluptate eum repellat sint deserunt harum
          dignissimos, error aspernatur asperiores reiciendis illum tempore
          porro vero? Impedit illo ratione praesentium at?
        </p>
      </>
    ),
  },
  {
    id: "4",
    name: "applications",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="43px">
        <path
          fillRule="evenodd"
          fill="rgb(115, 115, 115)"
          d="M46.428,42.1000 L3.571,42.1000 C1.598,42.1000 -0.001,41.395 -0.001,39.416 L-0.001,3.583 C-0.001,1.604 1.598,-0.000 3.571,-0.000 L46.428,-0.000 C48.400,-0.000 49.999,1.604 49.999,3.583 L49.999,39.416 C49.999,41.395 48.400,42.1000 46.428,42.1000 ZM6.249,2.687 C5.263,2.687 4.464,3.489 4.464,4.479 C4.464,5.468 5.263,6.271 6.249,6.271 C7.235,6.271 8.035,5.468 8.035,4.479 C8.035,3.489 7.235,2.687 6.249,2.687 ZM11.606,2.687 C10.620,2.687 9.821,3.489 9.821,4.479 C9.821,5.468 10.620,6.271 11.606,6.271 C12.593,6.271 13.392,5.468 13.392,4.479 C13.392,3.489 12.593,2.687 11.606,2.687 ZM17.075,2.687 C16.089,2.687 15.289,3.489 15.289,4.479 C15.289,5.468 16.089,6.271 17.075,6.271 C18.061,6.271 18.861,5.468 18.861,4.479 C18.861,3.489 18.061,2.687 17.075,2.687 ZM46.000,3.000 L20.1000,3.000 L20.1000,6.000 L46.000,6.000 L46.000,3.000 ZM46.000,9.000 L4.000,9.000 L4.000,39.000 L46.000,39.000 L46.000,9.000 Z"
        />
      </svg>
    ),
    text: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nostrum
          nihil aliquid at dolore sit beatae quia hic expedita sapiente qui
          laboriosam ratione, ad aliquam, vitae delectus totam culpa pariatur!
        </p>
        <p>
          Dolore blanditiis impedit placeat! Ad suscipit, neque harum libero
          distinctio repellat incidunt accusantium in officiis minus
          consequuntur nostrum inventore amet! Culpa delectus ex impedit
          voluptas, consequuntur itaque. Impedit, saepe laudantium.
        </p>
        <p>
          Distinctio nobis obcaecati nulla in vitae. Laboriosam, fugiat
          recusandae neque nam provident eligendi rerum debitis sequi quasi
          eveniet autem eius, officiis molestiae, delectus earum similique
          ratione labore ipsam pariatur? Repellendus!
        </p>
        <p>
          Pariatur tempora consequatur, blanditiis nihil neque dolores,
          laboriosam rerum esse voluptate eum repellat sint deserunt harum
          dignissimos, error aspernatur asperiores reiciendis illum tempore
          porro vero? Impedit illo ratione praesentium at?
        </p>
      </>
    ),
  },
];
function getService(name) {
  return services.find((service) => service.name === name);
}
export { services, getService };
