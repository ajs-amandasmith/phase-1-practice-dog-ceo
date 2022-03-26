console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(data => {
    // console.log(data.message)
    const array = data.message;
    const container = document.getElementById('dog-image-container');
    array.forEach(image => {
      let dogImage = document.createElement('img');
      dogImage.src = image;
      container.append(dogImage)
    });
  });

fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    // console.log('breeds', data.message)
    const breedList = document.getElementById('dog-breeds');
    // let li = document.createElement('li');
    let breedObj = data.message;
    // const breeds = Object.keys(breedObj);
    // console.log(breeds);
    // breeds.forEach(breed => {
    //   let li = document.createElement('li');
    //   li.textContent = breed;
    //   breedList.append(li);
    // })
    for (let key in breedObj) {
      let li = document.createElement('li');
      li.textContent = key;
      li.className = 'breed';
      // console.log(li);
      breedList.append(li);
    }

    function selectBreeds() {
      // the drop down value is selected
      // the DOM changes to show the breeds that start with that value
      const listOfBreeds = document.getElementById('breed-dropdown');
      listOfBreeds.addEventListener('change', (e) => {
        const value = e.target.value;
        const text = listOfBreeds.options[listOfBreeds.selectedIndex].text;
        const ul = document.createElement('ul');
        const dogList = document.getElementById('dog-breeds');
        let breedClass = document.getElementsByClassName('breed');
        for (let i = 0; i < breedClass.length; i++) {
          const li = document.createElement('li');
          if (breedClass[i].textContent[0] === value) {
            breedClass[i].hidden = false;
            // li.textContent = breedClass[i].textContent;
            // li.hidden = false;
            // ul.append(li);
          } else {
            breedClass[i].hidden = true;
            // li.textContent = breedClass[i].textContent;
            // li.hidden = true;
          }
        }
        // breedClass.parentNode.replaceChild(ul), breedClass;
        // dogList.replaceWith(ul);
        // console.log(ul);
      })
    }

    function changeColor() {
      const breedClass = document.getElementsByClassName('breed');
      const breedArray = [...breedClass];
      // console.log('breedClass', breedClass);
      for (let i = 0; i < breedArray.length; i++) {
        // console.log('breed', breedArray[i].style.color);
        const dog = breedArray[i];
        breedArray[i].addEventListener('click', () => {
          // breedClass[i].style.color = 'pink';
          // console.log(breedClass);
          // console.log('i', breedArray[i])
          // console.log(dog.style);
          // dog.style.color = 'pink';
          breedArray[i].style.color = 'pink';
        })
      }
    }
    changeColor();
    selectBreeds();
  });

// function changeColor() {
//   const breedClass = document.querySelector('li.breed');
//   console.log('breedClass', breedClass);
//   // console.log(breedClass.length);
//   // for (let i = 0; i < breedClass.length; i++) {
//   //   console.log(breedClass[i]);
//   // }




//   // for (var i = 0; i < breedClass.length; i++) {
//   //   console.log(breedClass[i]);
//   //   breedClass[i].addEventListener('click', () => {
//   //     console.log(breedClass[i].style.color);
//   //     breedClass[i].style.color = 'pink';
//   //   })
//   // }
//   // breedClass.forEach(breed => {
//   //   breed.style.fontColor = 'pink';
//   // })
// }
// })
