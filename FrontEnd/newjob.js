

const button_post = document.getElementById('button_post');

const JobTitle = document.getElementById('JobTitle');
const JobLocation = document.getElementById('JobLocation');
const JobDeadline = document.getElementById('JobDeadline');
const JobCompany = document.getElementById('JobCompany');




//POST_REQUEST
//POST_A_JOB
button_post.addEventListener('click', (e)=> {
    var output = document.getElementById('output');
    var JobTitleValue = JobTitle.value.trim();
    var JobLocationValue = JobLocation.value.trim();
    var JobDeadlineValue = JobDeadline.value.trim();
    var JobCompanyValue = JobCompany.value.trim();

    const Jobdata = {
        title : JobTitleValue,
        location : JobLocationValue,
        company : JobCompanyValue,
        deadline : JobDeadlineValue
    }
    const url = "http://localhost:5000/Linkedin_Joblist";
    const options = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(Jobdata)

    }

    e.preventDefault();
    fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error ('Network response was not ok');
        }
        return response.json();
        
    })
    .then(data => {
        output.innerHTML = data.message;
        console.log('Post request successful:', data);   
    })
    .catch(error => {
        console.log('There was a problem with your fetch operation:', error)
    })
})