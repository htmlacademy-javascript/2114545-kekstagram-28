const PICTURES_ID = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const AVATAR = 6;
const COMMENTS_ID = 20;

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

/*функция для получения случайного целочисленное число из диапазона.
(a, b) - диапазон возможных индексов массива.
Math.ceil - округляет до ближайшего большего целого.
Math.min - возвращает наименьшее из нуля или более чисел.
Math.max() возвращает наибольшее из нуля или более чисел.
Math.floor() - округляет аргумент до ближайшего меньшего целого
Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1).
*/
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

/*функция, которая возвращает случайный элемент массива. Мы ей передаем
 ВСЕ возможные элементы, а она нам случайные. Ограничиваем диапазон длиной массива*/
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/*функция-генератор из демонстрации 4.12.
функция для генерации значений, созданная в результате работы другой функции.
*/
const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

/*получаем массив и с помощью join склеиваем элементы в строку*/
const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENTS)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

/*Функция, которая возвращает нам объект */
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENTS_ID) },
    createComment
  ),
});

/*функция, которая возвращает массив картинок определенной длины
во второй параментр мы передаем колбэк функцию, которая будет вызвана
для каждого элемента массива. Берётся элемент, и к нему применяется функция createPicture*/
const getPictures = () =>
  Array.from({ length: PICTURES_ID}, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
