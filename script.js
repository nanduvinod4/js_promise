
// Q1

function fetchData(){
     return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Data fetched successfull")
        },2000)
    })
}

fetchData().then((response)=>{
    console.log(response);
})


// Q2

function fetchData2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("Failed to fetch data")
        },2000)
    })
}

fetchData2().catch((err)=>{
    console.log(err);
})

//Q3

async function checkFetch(){
    try{
        const message = await fetchData();
        console.log(message);
    }catch (err){
        console.log(err);
    }
}

checkFetch()


// Q4

async function cntyData(){
    document.getElementById('container').innerHTML=""

    try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        if(!response.ok){
            throw new Error ("Unable to fetch data")
        }
        const fetchData = await response.json()
        console.log(fetchData)

        fetchData.forEach((cnty) => {
            const cntyBox = document.createElement('div')
            cntyBox.className = 'cntyBox'
            
            const cntyFlag = document.createElement('img')
            cntyFlag.className = 'cntyImg'
            cntyFlag.src= cnty.flags.png
            
            const heading = document.createElement('h3')
            heading.className = 'cntyName'
            heading.innerHTML=("Name : "+cnty.name.common)
            
            const population = document.createElement('h4')
            population.className= 'population'
            population.innerHTML= ("Population : "+cnty.population)
            
            cntyBox.appendChild(cntyFlag)
            cntyBox.appendChild(heading)
            cntyBox.appendChild(population)
            
            document.getElementById('container').appendChild(cntyBox)     
        });


    } catch (error) {
        console.log(error);
        document.getElementById('container').innerHTML=error
        
    }
}