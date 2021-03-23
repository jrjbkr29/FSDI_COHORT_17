
const vibeLab = {
    name: 'Vibe Lab',
    address: {
        city: 'Long Beach',
        street: 'E Conant',
        number: '4022'
    },
    hours: {
        open: '5:30am',
        close: '10:00pm'
    },
    jobs:[]
}

class Job{
    constructor(workOrder, jobType, partNum, serialNum, jobDesc, priorityNum,jobStatus){
        this.workOrder = workOrder;
        this.jobType = jobType;
        this.partNum = partNum;
        this.serialNum = serialNum;
        this.jobDesc = jobDesc;
        this.priorityNum = priorityNum;
        this.jobStatus = jobStatus;
    }
}

//get the value from inputs and store them in vars
var txtworkOrder = document.getElementById("workOrder");
var txtjobType = document.getElementById("jobType");
var txtpartNum = document.getElementById("partNum");
var txtserialNum = document.getElementById("serialNum");
var txtjobDesc = document.getElementById("jobDesc");
var txtpriorityNum = document.getElementById("priorityNum");
var txtjobStatus = document.getElementById("jobStatus");


//initialized by form button
function newJob(){
    //create a generic Job
    var theJob = new Job(txtworkOrder.value, txtjobType.value, txtpartNum.value, txtserialNum.value, txtjobDesc.value, txtpriorityNum.value,txtjobStatus.value);
    console.log(theJob);
    //push job into the array
    vibeLab.jobs.push(theJob);
    console.log(vibeLab.jobs);
    display();
    updateTotal();
    clear();
} //--end--newJob()--

//update totals
function updateTotal(){
    //update in-work total
    document.getElementById('totalInProcess').innerHTML = `
    In Process: ${vibeLab.jobs.length} 
    `;
}

//clear
function clear(){
    txtworkOrder.value="";
    txtjobType.value="";
    txtpartNum.value="";
    txtserialNum.value="";
    txtjobDesc.value="";
    txtpriorityNum.value="";
    txtjobStatus.value="";
}
clear();

function display(inProcessJobs){
    document.getElementById("inProcess").innerHTML = "";
    var jobCount = 0;
    for (var i=0;i<vibeLab.jobs.length;i++){
       var aJob = vibeLab.jobs[i];
        var tmp =  `
        <div class="jobItem" id="${jobCount}"> 
            <div class="jobHeader">
                <button type="button" class="closeButton" value="${jobCount}" onclick="closeButton(${jobCount})">&#10006</button>
            </div>

            <div class="jobInfo">
                <ul>
                    <li>Work Order: ${aJob.workOrder}</li>
                    <li>QTP/ATP/DEV: ${aJob.jobType}</li>
                    <li>Part Number: ${aJob.partNum}</li>
                    <li>Serial Number: ${aJob.serialNum}</li>
                    <li>Description: ${aJob.jobDesc}</li>
                    <li>Priority: ${aJob.priorityNum}</li>
                    <li>Job Status: ${aJob.jobStatus}</li>
                </ul>
            </div>
        </div>
        `;
        document.getElementById("inProcess").innerHTML+=tmp;
        jobCount++;
    }
}

function closeButton(jobDelete){
    vibeLab.jobs.splice(jobDelete, 1);
    display();
    updateTotal();
}