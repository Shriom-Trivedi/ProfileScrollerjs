const data = [
  {
    name: 'John Doe',
    age: 20,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    name: 'Shin Lin',
    age: 20,
    gender: 'male',
    lookingfor: 'female',
    location: 'Colorado CO',
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    name: 'Alison Parker',
    age: 30,
    gender: 'female',
    lookingfor: 'female',
    location: 'London UK',
    image: 'https://randomuser.me/api/portraits/women/89.jpg'
  },
  {
    name: 'Victor Smith',
    age: 25,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/69.jpg'
  },
  {
    name: 'Anya chalotra',
    age: 33,
    gender: 'female',
    lookingfor: 'female',
    location: 'Santa Clara CA',
    image: 'https://randomuser.me/api/portraits/women/73.jpg'
  },
  {
    name: 'Margarita Maheyma',
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'Secunderabad TL',
    image: 'https://randomuser.me/api/portraits/women/31.jpg'
  },
  {
    name: 'T-DOG',
    age: 34,
    gender: 'male',
    lookingfor: 'female',
    location: 'Secunderabad TL',
    image: 'https://randomuser.me/api/portraits/men/80.jpg'
  }
];

// Profile Scroller
function profileIterator(profiles) {
  let nextIndex = -1;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false} :
      { done: true}
    }
  }
}

const profileView = profileIterator(data);
console.log(profileView.next());


//add event listner
document.getElementById('next').addEventListener('click', () => {
  const currentProfile = profileView.next().value;
  if(currentProfile !== undefined) {
    const images = document.getElementById('imageDisplay').innerHTML = `
    <img class=" border border-success rounded" src="${currentProfile.image}">
    `;
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
      `;
    } else {
      window.location.reload();
      alert('reached to the first profile...')
    }

    document.querySelector('.start-text').remove();
  });
