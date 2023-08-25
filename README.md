# PokeDex 
<img height="250" src="https://i.pinimg.com/originals/fd/2d/07/fd2d07e43d17a73270a196733ac301b8.jpg"/>

## What is this?

It is a web application which shows the contents of the pokemon database through a web page.
In the current state this page shows the first 100 pokemons of the pokemon API and the pokemons created by users together with their corresponding data

## What does the page look like?
<a href="http://52.72.187.107/pokedex/" target="blank"><b>Look at the app rigth here</b></a>
 
__Currently this page doesnt have a domain or ssl certificate but is completly functional__

## What it can do

Broadly speaking, these are the functionalities:

- Allows users to create new pokemons.
- Allows users to create new types of pokemons.
- Brings the pokemon API data to be displayed.
- Create its own database of pokemons created by other users.
- Each pokemon shown is assigned a color according to its type.
- Validates the existence of duplicates or possible conflicts with existing pokemons.
- Validate the information of each pokemon created to avoid inconsistencies.
- Allows you to sort by life or attack stats.
- Allows you to filter pokemons that were created by users and/or previously existing pokemons.
- Allows you to search for a pokemon by its name (regardless of whether it is created or existing).
- Allows you to see the detail of each pokemon.
- It has an error page in case any problem occurs

## Technologies used

For this project the following technologies were used:
- AWS (EC2)
- nginx
- Express
- PostgreSQL
- Sequelize
- React
- Redux
- CSS
- p2m
- linux
