import janeAvatar from '../../assets/user-avatar-jane.png';
import carlosAvatar from '../../assets/user-avatar-carlos.png';
import leahAvatar from '../../assets/user-avatar-leah.png';
import mattAvatar from '../../assets/user-avatar-matt.png';
import catPost from '../../assets/cat-post.jpg';
import developerSecretFormula from '../../assets/developer-secret-formula.png';

function randomVotes() {
  return (Math.random() * 10).toFixed(0);
}

const seed = [
  {
    id: 1,
    title: 'A Cat hacking',
    body: '',
    image: catPost,
    votes: randomVotes(),
    tags: ['funny', 'cats', 'IT'],
    author: {
      id: '1',
      username: 'jane',
      avatar: janeAvatar
    },
    liked: false
  },
  {
    id: 2,
    title: 'Developers Secret Formula',
    body: 'This is the developers secret formula.',
    image: developerSecretFormula,
    votes: randomVotes(),
    tags: ['developer', 'funny'],
    author: {
      id: 2,
      username: 'carlos',
      avatar: carlosAvatar
    },
    liked: false
  },
  {
    id: 3,
    title: 'As Martin Golding said..',
    body: `Always code as if the guy who ends up 
      maintaining your code will be a violent 
      psychopath who knows where you live.`,
    image: undefined,
    votes: randomVotes(),
    tags: ['quote', 'random'],
    author: {
      id: 3,
      username: 'leah',
      avatar: leahAvatar
    },
    liked: false
  },
  {
    id: 4,
    title: 'First post',
    body: 'Hello, this is my first post here!',
    image: undefined,
    votes: randomVotes(),
    tags: null,
    author: {
      id: 4,
      username: 'matt',
      avatar: mattAvatar
    },
    liked: false
  }
];

export default seed;
