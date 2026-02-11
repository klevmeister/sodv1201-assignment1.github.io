//staff data set
const dataSet = [   
    { name:"Brielle Williamson", position:"Integration Specialist", residence:"New York", id:"4804", hired:"2012/12/02", salary:"$372,000" },
    { name:"Herrod Chandler", position:"Sales Assistant", residence:"San Francisco", id:"9608", hired:"2012/08/06", salary:"$137,500" },
    { name:"Rhona Davidson", position:"Integration Specialist", residence:"Tokyo", id:"6200", hired:"2010/10/14", salary:"$327,900" },
    { name:"Colleen Hurst", position:"Javascript Developer", residence:"San Francisco", id:"2360", hired:"2009/09/15", salary:"$205,500" },
    { name:"Sonya Frost", position:"Software Engineer", residence:"Edinburgh", id:"1667", hired:"2008/12/13", salary:"$103,600" },
    { name:"Jena Gaines", position:"Office Manager", residence:"London", id:"3814", hired:"2008/12/19", salary:"$90,560" },
    { name:"Quinn Flynn", position:"Support Lead", residence:"Edinburgh", id:"9497", hired:"2013/03/03", salary:"$342,000" },
    { name:"Tiger Nixon", position:"System Architect", residence:"Edinburgh", id:"5421", hired:"2011/04/25", salary:"$320,800" },
    { name:"Garrett Winters", position:"Accountant", residence:"Tokyo", id:"8422", hired:"2011/07/25", salary:"$170,750" },
    { name:"Ashton Cox", position:"Junior Technical Author", residence:"San Francisco", id:"1562", hired:"2009/01/12", salary:"$86,000" },
    { name:"Cedric Kelly", position:"Senior Javascript Developer", residence:"Edinburgh", id:"6224", hired:"2012/03/29", salary:"$433,060" },
    { name:"Airi Satou", position:"Accountant", residence:"Tokyo", id:"5407", hired:"2008/11/28", salary:"$162,700" },
    { name:"Charde Marshall", position:"Regional Director", residence:"San Francisco", id:"6741", hired:"2008/10/16", salary:"$470,600" },
    { name:"Haley Kennedy", position:"Senior Marketing Designer", residence:"London", id:"3597", hired:"2012/12/18", salary:"$313,500" },
    { name:"Tatyana Fitzpatrick", position:"Regional Director", residence:"London", id:"1965", hired:"2010/03/17", salary:"$385,750" },
    { name:"Michael Silva", position:"Marketing Designer", residence:"London", id:"1581", hired:"2012/11/27", salary:"$198,500" },
    { name:"Paul Byrd", position:"Chief Financial Officer (CFO)", residence:"New York", id:"3059", hired:"2010/06/09", salary:"$725,000" },
    { name:"Gloria Little", position:"Systems Administrator", residence:"New York", id:"1721", hired:"2009/04/10", salary:"$237,500" },
    { name:"Bradley Greer", position:"Software Engineer", residence:"London", id:"2558", hired:"2012/10/13", salary:"$132,000" },
    { name:"Dai Rios", position:"Personnel Lead", residence:"Edinburgh", id:"2290", hired:"2012/09/26", salary:"$217,500" },
    { name:"Jenette Caldwell", position:"Development Lead", residence:"New York", id:"1937", hired:"2011/09/03", salary:"$345,000" },
    { name:"Yuri Berry", position:"Chief Marketing Officer (CMO)", residence:"New York", id:"6154", hired:"2009/06/25", salary:"$675,000" },
    { name:"Caesar Vance", position:"Pre-Sales Support", residence:"New York", id:"8330", hired:"2011/12/12", salary:"$106,450" },
    { name:"Doris Wilder", position:"Sales Assistant", residence:"Sidney", id:"3023", hired:"2010/09/20", salary:"$85,600" },
    { name:"Angelica Ramos", position:"Chief Executive Officer (CEO)", residence:"London", id:"5797", hired:"2009/10/09", salary:"$1,200,000" },
    { name:"Gavin Joyce", position:"Developer", residence:"Edinburgh", id:"8822", hired:"2010/12/22", salary:"$92,575" },
    { name:"Jennifer Chang", position:"Regional Director", residence:"Singapore", id:"9239", hired:"2010/11/14", salary:"$357,650" },
    { name:"Brenden Wagner", position:"Software Engineer", residence:"San Francisco", id:"1314", hired:"2011/06/07", salary:"$206,850" },
    { name:"Fiona Green", position:"Chief Operating Officer (COO)", residence:"San Francisco", id:"2947", hired:"2010/03/11", salary:"$850,000" },
    { name:"Shou Itou", position:"Regional Marketing", residence:"Tokyo", id:"8899", hired:"2011/08/14", salary:"$163,000" },
    { name:"Michelle House", position:"Integration Specialist", residence:"Sidney", id:"2769", hired:"2011/06/02", salary:"$95,400" },
    { name:"Suki Burks", position:"Developer", residence:"London", id:"6832", hired:"2009/10/22", salary:"$114,500" },
    { name:"Prescott Bartlett", position:"Technical Author", residence:"London", id:"3606", hired:"2011/05/07", salary:"$145,000" },
    { name:"Gavin Cortez", position:"Team Leader", residence:"San Francisco", id:"2860", hired:"2008/10/26", salary:"$235,500" },
    { name:"Martena Mccray", position:"Post-Sales support", residence:"Edinburgh", id:"8240", hired:"2011/03/09", salary:"$324,050" },
    { name:"Unity Butler", position:"Marketing Designer", residence:"San Francisco", id:"5384", hired:"2009/12/09", salary:"$85,675" }
];

//grab empty unordered list of staff members
const staffList = document.getElementById("staff-list");

//load unsorted list on page load
document.addEventListener('DOMContentLoaded', function() {
    dataSet.forEach(employee =>{
        const li = document.createElement('li');
        li.innerHTML = `Name: ${employee.name} - Position: ${employee.position} - Residence: ${employee.residence} - ID: ${employee.id} - Hired Date: ${employee.hired} - Salary: ${employee.salary}`;
        staffList.appendChild(li);
    })
});

function repopulate(){
    dataSet.forEach(employee =>{
        const li = document.createElement('li');
        li.innerHTML = `Name: ${employee.name} - Position: ${employee.position} - Residence: ${employee.residence} - ID: ${employee.id} - Hired Date: ${employee.hired} - Salary: ${employee.salary}`;
        staffList.appendChild(li);
    })
}

function sortByNameAsc(){
    while (staffList.firstChild) {
        staffList.removeChild(staffList.firstChild);
    }
    console.log(dataSet);
    dataSet.sort((a, b) => a.name.localeCompare(b.name));
    repopulate();
}

function sortByNameDes(){
    while (staffList.firstChild) {
        staffList.removeChild(staffList.firstChild);
    }
    console.log(dataSet);
    dataSet.sort((a, b) => b.name.localeCompare(a.name));
    repopulate();
}

function sortBySalaryAsc(){
    while (staffList.firstChild) {
        staffList.removeChild(staffList.firstChild);
    }
    dataSet.sort((a, b) => {
        // remove dollar signs
        const salaryA = a.salary.replace(/[^0-9.-]+/g, "");
        const salaryB = b.salary.replace(/[^0-9.-]+/g, "");
  
        // use localeCompare with numeric to properly parse number value
        return salaryA.localeCompare(salaryB, undefined, { numeric: true });
    });
    console.log(dataSet);
    repopulate();
}

function sortBySalaryDes(){
    while (staffList.firstChild) {
        staffList.removeChild(staffList.firstChild);
    }
    dataSet.sort((a, b) => {
        // remove dollar signs
        const salaryA = a.salary.replace(/[^0-9.-]+/g, "");
        const salaryB = b.salary.replace(/[^0-9.-]+/g, "");
  
        // use localeCompare with numeric to properly parse number value
        return salaryB.localeCompare(salaryA, undefined, { numeric: true });
    });
    console.log(dataSet);
    repopulate();
}