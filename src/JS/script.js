// landingLook
landingLook();
function landingLook(){
    fetch("./data.json")
    .then(response => response.json())
    .then(data=> {
        console.log(data);
        // to sort json so that the featured appear on the top of the other job
        data.sort((a,b) =>{
            if (a.featured && !b.featured) {
                return -1;
            }
            if (!a.featured && b.featured){
                return 1;
            }
            return 0;
        });
        console.log((data))
        const container = document.getElementById('dataContainer');
        container.innerHTML = '';
        data.forEach(card => {
            const newCard = createCard(card);
            container.appendChild(newCard);

        });
    });
}
// card creating function
function createCard(card) {
    const { logo, company, isnew, featured, position, postedAt, contract, location, role, level, languages, tools } = card;
            // main card 
            const mainCard = document.createElement('div');
            mainCard.className = 'flex flex-col px-10 py-8 my-12 w-full justify-center rounded-md bg-white md:flex-row md:justify-between shadow-lg border-l-4 border-primary-desaturatedDarkCyan';
            
    
            //left column
            const leftColumn = document.createElement('div');
            leftColumn.className = 'flex flex-col md:flex-row';
            mainCard.appendChild(leftColumn);
    
            // Image of job
            const imageContainer = document.createElement('div');
            imageContainer.className = 'mr-7 -mt-14 w-16 md:mt-0 md:w-24';
            const image = document.createElement('img');
            image.src = logo;
            image.alt = company;
            imageContainer.appendChild(image);
            leftColumn.appendChild(imageContainer);
    
            // Job description
            const jobDescription = document.createElement('div');
            jobDescription.className = 'flex flex-col justify-center';
            leftColumn.appendChild(jobDescription);
    
            // Company title and tags
            const companyTags = document.createElement('div');
            companyTags.className = 'flex flex-wrap';
            jobDescription.appendChild(companyTags);
    
            const companyTitle = document.createElement('h3');
            companyTitle.className = 'text-primary-desaturatedDarkCyan font-bold mr-4 text-lg md:text-lg';
            companyTitle.textContent = company;
            companyTags.appendChild(companyTitle);
    
            // new and featured section
            if (isnew) {
                const newTag = document.createElement('span');
                newTag.className = 'bg-primary-desaturatedDarkCyan uppercase text-white font-bold rounded-full px-4 pt-2 pb-1 text-sm mr-2';
                newTag.textContent = 'NEW';
                companyTags.appendChild(newTag);
              }
      
            if (featured) {
                const featuredTag = document.createElement('span');
                featuredTag.className = 'bg-neutral-950 uppercase text-white font-bold rounded-full px-4 pt-2 pb-1 text-sm mr-2';
                featuredTag.textContent = 'FEATURED';
                companyTags.appendChild(featuredTag);
              }
            
            // Job title
            const jobTitle = document.createElement('h2');
            jobTitle.className = 'font-sans font-bold hover:text-primary-desaturatedDarkCyan px-2 py-1 rounded-xl text-xl self-start';
            jobTitle.textContent = position;
            jobDescription.appendChild(jobTitle);
    
            // Date, time, and location
            const dateTimeLocation = document.createElement('div');
            dateTimeLocation.className = 'flex gap-2 text-neutral-darkGrayishCyan items-center';
            jobDescription.appendChild(dateTimeLocation);
    
            const postedDate = document.createElement('span');
            postedDate.textContent = postedAt;
            dateTimeLocation.appendChild(postedDate);
    
            const dotSeparator = document.createElement('span');
            dotSeparator.className = 'pb-2';
            dotSeparator.textContent = '.';
            dateTimeLocation.appendChild(dotSeparator);
    
            const jobContract = document.createElement('span');
            jobContract.textContent = contract;
            dateTimeLocation.appendChild(jobContract);
    
            const dotSeparator2 = document.createElement('span');
            dotSeparator2.className = 'pb-2';
            dotSeparator2.textContent = '.';
            dateTimeLocation.appendChild(dotSeparator2);
    
            const jobLocation = document.createElement('span');
            jobLocation.textContent = location;
            dateTimeLocation.appendChild(jobLocation);
    
            // Right column
            const rightColumn = document.createElement('div');
            rightColumn.className = 'flex  items-center flex-wrap w-full md:justify-end';
            mainCard.appendChild(rightColumn);
    
            //role
            const roleJob = document.createElement('span');
            roleJob.className = ' filterChar font-bold text-primary-desaturatedDarkCyan bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mb-2 mr-4 rounded-md cursor-pointer hover:text-white hover:bg-primary-desaturatedDarkCyan';
            roleJob.textContent = role;
            rightColumn.appendChild(roleJob);
    
            //level
            const levelJob = document.createElement('span');
            levelJob.className = ' filterChar font-bold text-primary-desaturatedDarkCyan bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mb-2 mr-4 rounded-md cursor-pointer hover:text-white hover:bg-primary-desaturatedDarkCyan';
            levelJob.textContent = level;
            rightColumn.appendChild(levelJob)
    
            //languages
            languages.forEach(language => {
                const languageTag = document.createElement('span');
                languageTag.className = ' filterChar font-bold text-primary-desaturatedDarkCyan bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mr-4 mb-2 rounded-md cursor-pointer hover:text-white hover:bg-primary-desaturatedDarkCyan';
                languageTag.textContent = language;
                rightColumn.appendChild(languageTag)
            });
            
            //tools
            tools.forEach(tool => {
                const toolTag = document.createElement('span');
                toolTag.className = ' filterChar font-bold text-primary-desaturatedDarkCyan bg-neutral-lightGrayishCyan px-2 pt-2 pb-1 mb-2 mr-4 rounded-md cursor-pointer hover:text-white hover:bg-primary-desaturatedDarkCyan';
                toolTag.textContent = tool;
                rightColumn.appendChild(toolTag);
            });
            return mainCard;
};
// function that collect all tags for a job 
function mergeTags(card) {
    const allTagsArr = [];
    allTagsArr.push(card.role);
    allTagsArr.push(card.level);
    allTagsArr.push(...card.languages);
    allTagsArr.push(...card.tools);
    return allTagsArr;
}
// function hadling filtering from jobs list


function filterCards(filterArray) {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            data.sort((a, b) => {
                if (a.featured && !b.featured) {
                    return -1;
                } else if (!a.featured && b.featured) {
                    return 1;
                } else {
                    return 0;
                }
            });
            const filtered = data.filter((card) => {
                const tags = mergeTags(card)
                return filterArray.every((tag) => tags.includes(tag))
            })
            const contNew = document.getElementById('dataContainer');
            contNew.innerHTML = ""
            filtered.forEach(card => {
                const newCard = createCard(card);
                contNew.appendChild(newCard)
            })

        })
        .catch((error) => {
            console.error("Error fetching job data:", error);
        });
}

    // adding elemnt in serach bar

    const filterdCont = document.getElementById('searchBar');
    const eachItem = document.createElement('div');
    eachItem.className = 'flex p-10';
    filterdCont.appendChild(eachItem);

    //when we click filter chat the serch bar will be displayed

    const containerSearch = document.getElementById('dataContainer');
// const filterTag = containerSearch.querySelector('.filterChar');
    const searchBarCont = document.getElementById('searchBarCont');
    
    let  filterArray = [];
    const diplaySerch = (event) => {
        if(event.target.matches('#dataContainer .filterChar')){
            const text = event.target.textContent;
            
            console.log("clicked");
            searchBarCont.classList.remove('hidden');
            searchBarCont.classList.add('flex');
            console.log(filterArray)
           
            if (!filterArray.includes(text)){
                filterArray.push(text);
                
                //span in search bar
   
                const selectedItem = document.createElement('span');
                selectedItem.className = 'font-bold text-primary-desaturatedDarkCyan bg-neutral-lightGrayishCyan px-2 py-1 rounded-l-md cursor-pointer hover:text-white hover:bg-primary-desaturatedDarkCyan';
                selectedItem.textContent = event.target.textContent;
                eachItem.appendChild(selectedItem);
    
                const iconRemoveCon = document.createElement('div');
                iconRemoveCon.className = 'flex';
                eachItem.appendChild(iconRemoveCon);
    
                const iconeRemove = document.createElement('img');
                iconeRemove.classList = 'bg-primary-desaturatedDarkCyan hover:bg-veryDarkGrayishCyan object-contain rounded-r-md px-2 py-2';
                iconeRemove.src = "./images/icon-remove.svg";
                iconRemoveCon.appendChild(iconeRemove);
                filterCards(filterArray);
            }
             
            }
            
       
        
    }
   
    containerSearch.addEventListener('click', diplaySerch);

