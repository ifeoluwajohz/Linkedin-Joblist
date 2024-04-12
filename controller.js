const JobModels = require('./models')



module.exports.Linkedin_Joblist_get = async (req, res) => {
    const { title , location } = req.query;
    const query = {};

    if (title && location) {
    query.title = { $regex: title, $options: 'i' };
    query.location = { $regex: location, $options: 'i' };
  } else if (title) {
    query.title = { $regex: title, $options: 'i' };
  } else if (location) {
    query.location = { $regex: location, $options: 'i' };
  }

  try {
    const jobs = await JobModels.find(query);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports.Linkedin_Joblist_post = async (req, res) => {
    const {
        company,
        deadline,
        title,
        location
    } = req.body
    try{
        await JobModels.create({company, deadline, location, title})
        res.json({message: 'Thanks for posting a new job'})

    }catch(error){
        res.status(500).json({error: error.message})
        console.log(error.message)
    }
}

// <script>

//     async function fetchData() {
//       const title = document.getElementById('titleInput').value;
//       const location = document.getElementById('locationInput').value;

//       const url = `https://localhost:5000/Linkedin_Joblist/?title=${title}&location=${location}`;

//       try{
//         const response = await fetch(url);
//         const jobs = await response.json();
//         return jobs;
//       }catch(error){
//         console.log('Error fetching data:', error)
//       }
//     }
//     async function searchJobs() {
      
//       const jobs = await fetchData();
//       const outputDiv = document.getElementById('output');

//       if(jobs){
//         outputDiv.innerHTML = `
//           <h3>${jobs.title}</h3>
//           <span>${jobs.company}</span>
//           <p>${jobs.deadline}</p>
//           <h2>${jobs.location}</h2>
//         `;}else{
//           outputDiv.innerHTML = `<h3>Error fetching data</h3>`
//         }
//     }
//     window.onload = searchJobs();
//   </script>




// jobs.forEach((job) => {
//   const li = document.createElement('li');
//   const para = document.createElement('h3');
  
//   li.textContent = `${job.title}  ${job.company}  ${job.deadline}  ${job.location}`;
//   resultsList.appendChild(li);
// })