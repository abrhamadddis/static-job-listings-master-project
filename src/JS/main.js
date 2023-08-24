fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('dataContainer');
    const firstItem = data[0];

    // Create the main container div
    const mainContainer = document.createElement('div');
    mainContainer.className = 'bg-neutral-lightGrayishCyan mt-12';

    // Create the card div
    const cardDiv = document.createElement('div');
    cardDiv.className = 'flex flex-col px-10 py-4 w-full justify-center rounded-md bg-white md:flex-row md:justify-between';

    // Create the left column div
    const leftColumnDiv = document.createElement('div');
    leftColumnDiv.className = 'flex flex-col md:flex-row';

    // Create the image div
    const imageDiv = document.createElement('div');
    imageDiv.className = 'mr-7 -mt-12 w-16 md:mt-0 md:w-24';

    // Create the image element
    const image = document.createElement('img');
    image.src = firstItem.logo;
    image.alt = firstItem.company;

    // Append the image to the image div
    imageDiv.appendChild(image);

    // Append the image div to the left column div
    leftColumnDiv.appendChild(imageDiv);

    // Create the job description div
    const jobDescriptionDiv = document.createElement('div');
    jobDescriptionDiv.className = 'flex flex-col justify-center';

    // Create the company title and tags div
    const companyTitleTagsDiv = document.createElement('div');
    companyTitleTagsDiv.className = 'flex';

    // Create the company title element
    const companyTitle = document.createElement('h3');
    companyTitle.className = 'text-primary-desaturatedDarkCyan font-bold mr-4 md:text-md';
    companyTitle.textContent = firstItem.company;

    // Append the company title element to the company title and tags div
    companyTitleTagsDiv.appendChild(companyTitle);

    // Create the new tag element
    const newTag = document.createElement('span');
    newTag.className = 'bg-primary-desaturatedDarkCyan uppercase text-white font-bold rounded-full px-4 pt-1 text-sm mr-2';
    newTag.textContent = 'NEW';

    // Append the new tag element to the company title and tags div
    companyTitleTagsDiv.appendChild(newTag);

    // Create the featured tag element
    const featuredTag = document.createElement('span');
    featuredTag.className = 'bg-neutral-950 uppercase rounded-full text-white font-bold px-4 pt-1 text-sm mr-2';
    featuredTag.textContent = 'FEATURED';

    // Append the featured tag element to the company title and tags div
    companyTitleTagsDiv.appendChild(featuredTag);

    // Append the company title and tags div to the job description div
    jobDescriptionDiv.appendChild(companyTitleTagsDiv);

    // Create the job title div
    const jobTitleDiv = document.createElement('div');
    jobTitleDiv.className = '-ml-2';

    // Create the job title element
    const jobTitle = document.createElement('h2');
    jobTitle.className = 'font-sans font-bold text-primary-desaturatedDarkCyan px-2 py-1 rounded-xl text-xl self-start';
    jobTitle.textContent = firstItem.position;

    // Append the job title element to the job title div
    jobTitleDiv.appendChild(jobTitle);

    // Append the job title div to the job description div
    jobDescriptionDiv.appendChild(jobTitleDiv);

    // Create the date time and location div
    const dateTimeLocationDiv = document.createElement('div');
    dateTimeLocationDiv.className = 'flex justify-between text-neutral-darkGrayishCyan';

    // Create the date time and location elements
    const date = document.createElement('span');
    date.textContent = firstItem.postedAt;

    const dotSeparator1 = document.createElement('span');
    dotSeparator1.textContent = '.';

    const employmentType = document.createElement('span');
    employmentType.textContent = firstItem.employmentType;

    const dotSeparator2 = document.createElement('span');
    dotSeparator2.textContent = '.';

    const location = document.createElement('span');
    location.textContent = firstItem.location;

    // Append the date time and location elements to the div
    dateTimeLocationDiv.appendChild(date);
    dateTimeLocationDiv.appendChild(dotSeparator1);
    dateTimeLocationDiv.appendChild(employmentType);
    dateTimeLocationDiv.appendChild(dotSeparator2);
    dateTimeLocationDiv.appendChild(location);

    // Append the date time and location div to the job description div
    jobDescriptionDiv.appendChild(dateTimeLocationDiv);

    // Append the job description div to the left column div
    leftColumnDiv.appendChild(jobDescriptionDiv);

    // Create the horizontal rule elementconst hrElement = document.createElement('hr');
    hrElement.className = 'bg-neutral-darkGrayishCyan';

    // Append the horizontal rule element to the left column div
    leftColumnDiv.appendChild(hrElement);

    // Append the left column div to the card div
    cardDiv.appendChild(leftColumnDiv);

    // Create the right column div
    const rightColumnDiv = document.createElement('div');
    rightColumnDiv.className = 'flex justify-start items-center gap-2 md:justify-end';

    // Create the tags container div
    const tagsContainerDiv = document.createElement('div');

    // Create and append the tags elements
    firstItem.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'font-bold text-primary-desaturatedDarkCyan bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 rounded-md cursor-pointer';
      tagElement.textContent = tag;
      tagsContainerDiv.appendChild(tagElement);
    });

    // Append the tags container div to the right column div
    rightColumnDiv.appendChild(tagsContainerDiv);

    // Append the right column div to the card div
    cardDiv.appendChild(rightColumnDiv);

    // Append the card div to the main container div
    mainContainer.appendChild(cardDiv);

    // Append the main container div to the data container element
    container.appendChild(mainContainer);
  })
  .catch(error => {
    console.log('Error:', error);
  });