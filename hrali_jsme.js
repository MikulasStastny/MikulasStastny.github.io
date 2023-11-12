window.onresize = adjustTimeline;
window.onload = adjustTimeline;

function adjustTimeline() {
    let elements = document.getElementsByClassName("timeline-item");

    if(window.innerWidth < 768) {
        for(element of elements) {
            element.className = "timeline-item right";
        }        
    }
    else {
        let odd = true;
        for(element of elements) {
            if(odd) {
                element.className = "timeline-item left";
            }
            else {
                element.className = "timeline-item right";
            }
            odd = !odd;
        }  
    }
}