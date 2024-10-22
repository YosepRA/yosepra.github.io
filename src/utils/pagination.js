function determinePageLimits(currentPage, pageCount) {
  /* Page limit case study:
    1. Case #1
      - Current page: 1
      - Page count: 15
      - Expected result: < [1] 2 3 4 5 >

    2. Case #2
      - Current page: 3
      - Page count: 4
      - Expected result: < 1 2 [3] 4 >

    3. Case #3
      - Current page: 8;
      - Page count: 23
      - Expected result: < 6 7 [8] 9 10 >

    4. Case #4
      - Current pageL: 10
      - Page ccount: 11
      - Expected result: < 7 8 9 [10] 11 >
  */

  const limitGap = 2; // Gap between current page to upper and lower limits.
  const maxPages = 5;
  let startPage = 0;
  let endPage = 0;

  const closeToStart = currentPage - limitGap < 1;
  // console.log('🚀 ~ createPaginationModel ~ closeToStart:', closeToStart);
  const closeToEnd = currentPage + limitGap > pageCount;
  // console.log('🚀 ~ createPaginationModel ~ closeToEnd:', closeToEnd);

  // Determine start and end page.

  // If close to start, and there are more than 5 pages of content, then show
  // the first 5 buttons.
  if (closeToStart && pageCount >= maxPages) {
    startPage = 1;
    endPage = currentPage + (maxPages - currentPage);
  } else if (closeToStart && pageCount < maxPages) {
    // If close to start, but there are less than 5 pages, then show whatever is available.

    startPage = 1;
    endPage = pageCount;
  } else if (closeToEnd) {
    // If close to end, then show the last 5 pagination buttons.
    const startToCurrentDiff = Math.abs(pageCount - maxPages - currentPage + 1);

    startPage = currentPage - startToCurrentDiff;
    endPage = pageCount;
  } else {
    // Else, show 5 buttons with the third one being the current active page.
    startPage = currentPage - limitGap;
    endPage = currentPage + limitGap;
  }

  // console.log('Start page:', startPage);
  // console.log('Current page:', currentPage);
  // console.log('End page:', endPage);

  return {
    startPage,
    endPage,
  };
}

function createPaginationModel(currentPage, pageCount) {
  /*
    - Show at most 5 buttons at a time.
    - If there is less than 5, then show all that are available.
  */

  // const pageModel = {
  //   label: '1',
  //   number: 1,
  //   status: 'default', // default, active, disabled
  // };

  // If there is no page params, return the default model as a temporary model.
  if (Number.isNaN(currentPage) || pageCount === 0) {
    const defaultModel = [
      {
        label: '&lt;',
        status: 'disabled',
      },
      {
        label: '1',
        number: 1,
        status: 'disabled',
      },
      {
        label: '2',
        number: 2,
        status: 'disabled',
      },
      {
        label: '3',
        number: 3,
        status: 'disabled',
      },
      {
        label: '&gt;',
        status: 'disabled',
      },
    ];

    return defaultModel;
  }

  const { startPage, endPage } = determinePageLimits(currentPage, pageCount);

  // Previous page
  const prevPage = {
    label: '&lt;',
    number: currentPage > 1 ? currentPage - 1 : null,
    status: currentPage === 1 ? 'disabled' : 'default',
  };

  const nextPage = {
    label: '&gt;',
    number: currentPage < pageCount ? currentPage + 1 : null,
    status: currentPage === pageCount ? 'disabled' : 'default',
  };

  const inBetweenPages = [];

  // Create in-between page models..
  for (let pageNumber = startPage; pageNumber <= endPage; pageNumber += 1) {
    const pageModel = {
      label: pageNumber.toString(),
      number: pageNumber,
      status: pageNumber === currentPage ? 'active' : 'default',
    };

    inBetweenPages.push(pageModel);
  }

  const paginationModel = [prevPage, ...inBetweenPages, nextPage];

  return paginationModel;
}

export default createPaginationModel;
