<p align="center">
  <a href="https://github.com/pedrocvm">
    <img align="center" alt="Made by Pedro Matos" src="https://img.shields.io/badge/made%20by Pedro Matos-%237519C1?style=for-the-badge">
  </a>
<p>
  
<p align="center">
 <a href="#movie_camera-demo">Demo</a> •
  <a href="#computer-about">About</a> •
 <a href="#memo-roadmap">Roadmap</a> •
 <a href="#triangular_ruler-status">Status</a> •
 <a href="#dvd-running">Running</a> •
 <a href="#hammer-technologies">Technologies</a> •
 <a href="#boy-author">Author</a> •
 <a href="#page_facing_up-licence">Licence</a>
</p>

---
### :movie_camera: **Demo**
<p>The application consists of a weather query App.</p>
<p>The default value is the city of Lisbon, PT</p>
<br/>

<h4 align="center" style="font-size: 16px; font-weight: 600">Home with Initial Values</h4>
<p align="center">
	<kbd>
		<img width="350" style="border-radius: 5px" alt="App Demo - Initial Values" src="https://i.ibb.co/F0kyqtQ/weather-app-1.png">
	</kbd>
</p>

<br/>
<br/>
<p>However, there is an Autocomplete input in which the user can enter any address of any city in the world.</p>

<br/>

<h4 align="center" style="font-size: 16px; font-weight: 600">Entering data from a random address in Input Autocomplete</h4>
<p align="center">
	<kbd>
		<img width="350" style="border-radius: 5px" alt="App Demo - Query 1" src="https://i.ibb.co/HtzxJkJ/weather-app-6.png">
	</kbd>
</p>
<br/>
<br/>

<h4 align="center" style="font-size: 16px; font-weight: 600">Query Result</h4>
<p align="center">
	<kbd>
		<img width="350" style="border-radius: 5px" alt="App Demo - Query 3" src="https://i.ibb.co/BGJb5rp/weather-app-8.png">
	</kbd>
</p>
<br/>
<br/>

<p>When performing a query, a Load Spinner was added until the results of the request became available.</p>
<br/>

<h4 align="center" style="font-size: 16px; font-weight: 600">Load Spinner waiting for request results</h4>
<p align="center">
	<kbd>
		<img width="350" style="border-radius: 5px" alt="App Demo - Load Spinner" src="https://i.ibb.co/v1sBdYS/weather-app-5.png">
	</kbd>
</p>
<br/>
<br/>

<p>A Toggle Button has been added to perform unit conversion from Celsius to Fahrenheit and vice versa.</p>
<br/>

<h4 align="center" style="font-size: 16px; font-weight: 600">Temperature being displayed in Fahrenheit after Toggle</h4>
<p align="center">
	<kbd>
		<img width="350" style="border-radius: 5px" alt="App Demo - Query 2" src="https://i.ibb.co/fv7D5Pp/weather-app-2.png">
	</kbd>
</p>

---
## :computer: About
Project started on 05/24/2022.

The following APIs were used as support:
   - **OpenWeather:** For Weather queries.
   - **Google Maps:** For the listing of locations.

---
### :memo: **Roadmap**
<details>
<summary>Clique para Visualizar</summary>

- [x] Create Project using Create-React-App.
- [x] inserted Plop for automatic component generation.
- [x] Configure Prettier and ESLint.
- [x] Configure Jest.
- [x] Create reusable generic Components (TextField and Container).
- [x] Integrate React Places Autocomplete into the project.
- [x] Creation of the Climate Consultation and Location Listing Services.
- [x] Create a Custom Hook to provide as Properties and Methods, isolating a layer of Services.
- [x] Create Unit Tests using the Jest and React Test Library.

</details>

---
### :triangular_ruler: **Status**

<h4 align="center"> 
	👨‍🏫 Weather App v1.0 done!
</h4>

---
### :dvd: **Running**
```bash
# Clone this repository
$ git clone https://github.com/pedrocvm/teste_triyo

# Access the project folder in terminal/cmd
$ cd weather_app

# Install the Dependencies
$ yarn

# Run the Application
$ yarn start

# Run the Unit Tests
$ yarn test
```

---
### :hammer: **Technologies**

The following tools were used in the construction of the project:

### Front-End
- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Archive/CSS3)
- [React](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)
- [React Geocode](https://www.npmjs.com/package/react-geocode)
- [React Places Autocomplete](https://www.npmjs.com/package/react-places-autocomplete)
- [Plop](https://plopjs.com/)
- [Moment](https://momentjs.com/)

### Unit Tests
- [Jest](https://jestjs.io/pt-BR/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---
### :boy: **Author**

<div align="center">

<a href="https://github.com/pedrocvm">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/60618486?s=460&u=661e1932902d4a8d7bf9c9f28038a68a4d5d0984&v=4" width="100px;" alt="Profile Pic Pedro Matos"/>
 <br />
 <sub><b>Pedro Matos</b></sub></a>

Made with ❤️ by Pedro Matos 👋🏽 Get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Pedro_Matos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pedrocvm/)](https://www.linkedin.com/in/pedrocvm/)
[![Github Badge](https://img.shields.io/badge/-pedrocvm-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/pedrocvm)](https://github.com/pedrocvm)
[![Gmail Badge](https://img.shields.io/badge/-pedrocvm3@gmail.com-FA5C5C?style=flat-square&logo=gmail&logoColor=white&link=mailto:pedrocvm3@gmail.com)](mailto:pedrocvm3@gmail.com)

</div>

---
### :page_facing_up: **Licence**

Copyright © 2021 [Pedro Matos](https://github.com/pedrocvm).<br />
This project is licensed by [MIT](./LICENSE).
