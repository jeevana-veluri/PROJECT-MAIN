
const candidates = [
    { name: "jay", location: "Hyderabad", jobRole: "web-developer" },
    { name: "john", location: "Mumbai", jobRole: "Frontend-developer" },
    { name: "sara", location: "Hyderabad", jobRole: "Data-analyst" },
    { name: "sreekanth", location: "Mumbai", jobRole: "Backend-developer" },
    { name: "sreeja", location: "Chennai", jobRole: "Content-writter" },
    { name: "Balaji", location: "Tirupati", jobRole: "python-developer" },
    { name: "bhavana", location: "Kurnool", jobRole: "Frontend-developer" },
    { name: "Karthika", location: "pune", jobRole: "Wordpress-developer" },
    { name: "Krish", location: "Nagpur", jobRole: "python-developer" },

   
  ];
  
  
  function displayCandidates(candidates) {
    const candidateListElement = document.getElementById("candidate-list");
    candidateListElement.innerHTML = ""; 
    
    if (candidates.length === 0) {
      candidateListElement.innerHTML = "<p>No candidates found.</p>";
      return;
    }
    
    const candidateFragment = document.createDocumentFragment();
    
    candidates.forEach((candidate) => {
      const candidateItem = document.createElement("div");
      candidateItem.classList.add("candidate-item");
      
      const candidateName = document.createElement("h2");
      candidateName.textContent = candidate.name;
      
      const candidateLocation = document.createElement("h4");
      candidateLocation.textContent = "Location: " + candidate.location;
      
      const candidateJobRole = document.createElement("h4");
      candidateJobRole.textContent = "Job Role: " + candidate.jobRole;
      
      candidateItem.appendChild(candidateName);
      candidateItem.appendChild(candidateLocation);
      candidateItem.appendChild(candidateJobRole);
      
      candidateFragment.appendChild(candidateItem);
    });
    
    candidateListElement.appendChild(candidateFragment);
  }
  
  
  function handleSearch() {
    const locationInput = document.getElementById("location");
    const jobRoleInput = document.getElementById("job-role");
    
    const locationQuery = locationInput.value.toLowerCase();
    const jobRoleQuery = jobRoleInput.value.toLowerCase();
    
    const filteredCandidates = candidates.filter((candidate) => {
      const candidateLocation = candidate.location.toLowerCase();
      const candidateJobRole = candidate.jobRole.toLowerCase();
      
      return (
        candidateLocation.includes(locationQuery) &&
        candidateJobRole.includes(jobRoleQuery)
      );
    });
    
    displayCandidates(filteredCandidates);
  }
  
 
  const searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", handleSearch);
  