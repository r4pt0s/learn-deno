async function downloadLaunchData(){
  const response= await fetch("https://api.spacexdata.com/v3/launches");

  if(!response.ok){

  }

  const launchData= await response.json();

  console.log(launchData)
}


downloadLaunchData()
