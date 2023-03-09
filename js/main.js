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

/*функция, которая возвращает рандомное число в заданном диапазоне*/
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/*функция, которая возвращает случайный элемент массива. Мы ей передаем
 ВСЕ возможные элементы, а она нам случайные. Ограничиваем диапазон длиной массива*/
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/*генерирует номер id (от 0 до 25)*/
const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

/*получаем массив (несколько предложений из comments) и
с помощью join склеиваем элементы в строку*/
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

/*Функция, которая возвращает нам объект */
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

/*функция, которая возвращает массив картинок определенной длины
во второй параментр мы передаем колбэк функцию, которая будет вызвана
для каждого элемента массива. Берётся элемент, и к нему применяется функция createPicture*/
const getFeed = () =>
  Array.from({ length: MAX_PICTURES_COUNT }, (_, itemIndex) =>
    createFeedItem(itemIndex + 1)
  );

getFeed();

/* ИЛИ:
const getArray = (counter) => {
  const result = [];

  for (let i = 0; i < counter; i += 1) {
    result.push(createFeedItem(i));
  }
  return result;
};

console.log(getArray(MAX_PICTURES_COUNT));
*/


