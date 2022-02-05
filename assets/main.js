var referrer = document.referrer.split("/").slice(0,3).join("/")

// sanity check
function checksite() {
    var i = sites.findIndex(x => x.url === referrer);
    if (i === -1) {
        return false;
    }
    return true;
}

function getsites() {
    return sites;
}

function nextsite() {
    var i = sites.findIndex(x => x.url === referrer);
    var site = sites[i==sites.length-1?0:i+1];
    return site.url;
}

function prevsite() {
    var i = sites.findIndex(x => x.url === referrer);
    var site = sites[i==0?sites.length-1:i-1];
    return site.url;
}

function randsite() {
    return sites[Math.floor(Math.random() * sites.length)].url;
}