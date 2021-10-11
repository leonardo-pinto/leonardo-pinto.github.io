import todoList from './images/todo-example.png';
import pokemonTcg from './images/pokemon-tcg.png';

const projects = [
  {
    title: 'To Do List',
    description: 'Simple todo list application. The user can add, edit, delete and mark tasks as completed.',
    image: todoList,
    code: 'https://github.com/leonardo-pinto/todo-react-redux',
    app: 'https://todo-react-redux-murex.vercel.app/',
    tags: ['React', ' Redux', 'Tailwind CSS', 'Jest', 'React Testing Library'],
  },
  {
    title: 'Pokémon TCG App',
    description: 'Application that displays Pokémon TCG cards. The user can filter by card name, type and also sort alphabetically. Moreover, it enables to favorite cards, detailed information and also to check Pokémon facts.',
    image: pokemonTcg,
    code: 'https://github.com/leonardo-pinto/pokemon-tcg-app',
    app: 'https://pokemon-tcg-app.vercel.app/',
    tags: ['React', ' Context API', 'React Hooks', 'Tailwind CSS'],
  },
];

export default projects;
