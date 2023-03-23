import { getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const MAX_PICTURES_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR = 6;
const MAX_COMMENTS_COUNT = 20;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё...',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально!',
  'ЛОЛ, моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['dumpling_boy', 'pizza_lover', 'rockstar', 'friendly_tornado', 'coffee_zombie', 'disco_potato'];

const DESCRIPTIONS = [
  'Я, снова я и опять я. #believeinyourselfie',
  'Диснеевские принцессы, которых вы заслужили',
  'Скучали по нам?',
  'Мне не нужны Чип и Дейл, ведь на помощь всегда приходит лучший друг',
  'Сегодня планируем что-то грандиозное. Кто с нами?',
  'Они говорят: делай то, что любишь, и деньги к тебе придут. Заказал пиццу, теперь жду.',
  'Нормальные люди по утрам просыпаются, а я восстаю',
  'На 90% состою из важных дел',
];

const generateCommentId = createIdGenerator();

const createCommentText = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENTS)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR)}.svg`,
  message: createCommentText(),
  name: getRandomArrayElement(NAMES),
});

const createFeedItem = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    { length: getRandomInteger(0, MAX_COMMENTS_COUNT) },
    createComment
  ),
});

const getFeed = () =>
  Array.from({ length: MAX_PICTURES_COUNT }, (_, itemIndex) =>
    createFeedItem(itemIndex + 1)
  );

export { getFeed };


