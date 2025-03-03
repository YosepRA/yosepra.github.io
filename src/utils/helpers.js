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

function throttle(fn, delay = 300) {
  let lastRun;
  let lastFn;

  return function throttleFunction(...args) {
    const context = this;

    if (!lastRun) {
      fn.apply(context, args);
      lastRun = Date.now();

      return undefined;
    }

    clearTimeout(lastFn);
    lastFn = setTimeout(() => {
      if (Date.now() - lastRun >= delay) {
        fn.apply(context, args);
        lastRun = Date.now();
      }
    }, delay - (Date.now() - lastRun));

    return undefined;
  };
}

export { generateProjects, capitalizeFirstLetter, handlePromise, throttle };
