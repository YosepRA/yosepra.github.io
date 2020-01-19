/* === FILTER ALGORITHM  === */
/* 
  1. Tag clicked.
  2. Delete all 'display: none' style from all projects (Reset view).
  3. Update active tags state as an array of tag strings.
  4. Filter out projects that doesn't have all active tags to an array. These are projects that will be hidden later on.
  5. Update view by adding 'display: none' to filtered projects.
*/
/* ========================= */

class Project {
  constructor(dom) {
    this.dom = dom;
    this.name = this.dom.querySelector('.project-title h2').textContent;
    this.tags = this.dom.dataset.tags.split(', ');
    this.detailSection = this.dom.querySelector('.project-content');

    this.dom.addEventListener('mouseenter', () => this.showDetail());
    this.dom.addEventListener('mouseleave', () => this.hideDetail());
  }

  showDetail() {
    this.detailSection.classList.add('showDetail');
  }

  hideDetail() {
    this.detailSection.classList.remove('showDetail');
  }
}

class Model {
  constructor(dom) {
    this.dom = dom;
    // 'projects' is an array of 'Project' instances.
    this.projects = [];
    // 'activeTags' will be updated on each tag buttons click.
    this.activeTags = [];
    // 'hidden' follows 'projects' structure with an array of 'Project' instances.
    this.hidden = [];

    let tagsContainer = document.querySelector('.tags');
    tagsContainer.addEventListener('click', event => this.filterProject(event));
    let tags = [];
    for (const project of document.querySelectorAll('.project')) {
      this.projects = this.projects.concat(new Project(project));

      for (const tag of project.dataset.tags.split(', ')) {
        if (!tags.includes(tag)) {
          tags = tags.concat(tag);
          let el = eltAttr('button', { class: 'tag', 'data-value': tag }, tag);
          tagsContainer.appendChild(el);
        }
      }
    }
    // Assign event for project's details hover.
    this.dom.addEventListener('click', event => this.showDetail(event));
  }

  filterProject(event) {
    if (event.target.tagName !== 'BUTTON') return;
    let tagBtn = event.target;
    // Reset view.
    this.resetView();
    // Toggle the class first before doing anything else.
    tagBtn.classList.toggle('selected');
    // Selected tags' state controller.
    this.activeTags = Array.from(document.querySelectorAll('.tag'))
      .filter(t => t.className.includes('selected'))
      .map(t => t.dataset.value);
    // Filtering the projects that should be hidden based on selected tag.
    this.hidden = this.projects.filter(({ tags }) => {
      let result = false;
      // 'true' result means the project don't have tag and thus will be hidden.
      for (const tag of this.activeTags) {
        if (!tags.includes(tag)) result = true;
      }
      return result;
    });
    this.updateView();
  }

  updateView() {
    for (const { dom } of this.hidden) {
      dom.style.display = 'none';
    }
  }

  resetView() {
    for (const { dom } of this.hidden) {
      dom.style.display = '';
    }
  }

  showDetail(event) {
    if (event.target.tagName !== 'BUTTON') return;
    let showBtn = event.target;
    let detailSection = showBtn.previousElementSibling;
    // Classlist toggle will manage the detail toggle state.
    detailSection.classList.toggle('showDetail');
  }
}

docReady(() => {
  // Initiate projects model.
  new Model(document.querySelector('.projects'));

  let projectDetails = document.querySelectorAll('.action-btn.details');
  for (const detailLink of projectDetails) {
    detailLink.addEventListener('click', event => {
      underConstruction('Project details page');
      event.preventDefault();
    });
  }
});

/* ======================================================================================================== */

// SANDBOX

// let projects = [
//   {
//     name: 'Gloria Flower Shop',
//     tags: ['html', 'css', 'javascript'],
//     isShowed: true
//   },
//   {
//     name: 'Heshley Barber',
//     tags: ['html', 'css', 'javascript'],
//     isShowed: true
//   }
// ];

// TAG STATE TOGGLER PER CLICK.

// let tagContainer = document.querySelector('.tags');
// let activeTags = [];
// tagContainer.addEventListener('click', event => {
//   let tag = event.target;
//   if (tag.tagName !== 'BUTTON') return;
//   tag.classList.toggle('selected');
//   activeTags = Array.from(tagContainer.querySelectorAll('.tag'))
//     .filter(t => t.className.includes('selected'))
//     .map(t => t.dataset.value);
//   console.log(activeTags);
// });

// function tagStateToggle() {
//   activeTags = Array.from(tagContainer.querySelectorAll('.tag')).map(t => t.className.includes('selected'));
// }

// DETAIL BUTTON LISTENERs.

// let projectsContainer = document.querySelector('.projects');

// projectsContainer.addEventListener('click', event => {
//   let el = event.target;
//   if (el.tagName !== 'BUTTON') return;

//   let content = el.previousElementSibling;
//   // State toggler.
//   content.classList.toggle('showDetail');
// });

// let cards = document.querySelectorAll('.project');
// // Assign hover event to each project card.
// for (const card of cards) {
//   let content = card.querySelector('.project-content');

//   card.addEventListener('mouseenter', () => {
//     content.classList.add('showDetail');
//   });

//   card.addEventListener('mouseleave', () => {
//     content.classList.remove('showDetail');
//   });
// }
