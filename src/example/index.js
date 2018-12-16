import './example.css';

const greetings = () => {
  const time = new Date().getHours();
  if (time < 12) {
    return 'Good Morning!';
  } else if (time < 18) {
    return 'Good Afternoon!';
  } else {
    return 'Good Evening!';
  }
};

document.getElementById('greetings').innerText = greetings();

const build = `Build the project using <code>npm run build</code> or <code>yarn run build</code>`;
document.getElementById('build').innerHTML = build;
