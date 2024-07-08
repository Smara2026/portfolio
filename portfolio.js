var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function openTab(tabname){
    // console.log(typeof tablinks);
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var projecttitles=document.getElementsByClassName("project-title");
var projectdescs=document.getElementsByClassName("project-description");
function openTab2(tabname){
for(projecttitle of projecttitles){
    projecttitle.classList.remove("active-title");
}
for(projectdesc of projectdescs){
    projectdesc.classList.remove("active-project");
}

event.currentTarget.classList.add("active-title");
document.getElementById(tabname).classList.add("active-project");
}
