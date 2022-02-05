function getsites() {
    return sites;
}

// i haven't done the referral stuff yet so these next two functions also aren't done
function nextsite() {
    return null;
}

function prevsite() {
    return null;
}

function randsite() {
    return sites[Math.floor(Math.random() * sites.length)].url;
}