import faker from 'faker';

function generateProjects(amount) {
  const projects = [];
  const liveUrl = 'https://google.com';
  const githubUrl = 'https://github.com/YosepRA';
  let idCounter = 100;

  faker.seed(100);

  for (let num = 0; num < amount; num += 1) {
    const newProject = {
      id: (idCounter += 1),
      name: faker.lorem.words(3),
      liveUrl,
      githubUrl,
      body: faker.lorem.paragraphs(3),
    };
    projects.push(newProject);
  }

  return projects;
}

function capitalizeFirstLetter(sentence) {
  return `${sentence.charAt(0).toUpperCase()}${sentence.substring(1)}`;
}

async function handlePromise(promise) {
  try {
    const data = await promise;

    return [data, null];
  } catch (error) {
    console.error(error);

    return [null, error];
  }
}

function throttle(fn, wait) {
  let time = Date.now();

  return function throttleFunction() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

export { generateProjects, capitalizeFirstLetter, handlePromise, throttle };
