function get(uniqueId) {
    return document.getElementById(uniqueId);
}

function gk() {
    var gkOvr = 0.24*get('gk-diving').value + 0.22*get('gk-handling').value + 
    0.22*get('gk-positioning').value + 0.22*get('gk-reflexes').value + 0.06*get('reactions').value + 
    0.04*get('gk-kicking').value;
    return Math.round(gkOvr) + parseInt(get('intl-rep').value);
}

function cb() {
    var cbOvr = 0.15*get('marking').value + 0.15*get('stand-tackle').value + 0.15*get('slide-tackle').value + 
    0.1*get('heading').value + 0.1*get('strength').value + 0.08*get('aggression').value + 
    0.08*get('interception').value + 0.05*get('short-pass').value + 0.05*get('ball-control').value + 
    0.05*get('reactions').value + 0.04*get('jumping').value;
    return Math.round(cbOvr) + parseInt(get('intl-rep').value);
}

function fb() {
    var fbOvr = 0.13*get('slide-tackle').value + 0.12*get('stand-tackle').value + 0.12*get('interception').value + 
    0.1*get('marking').value + 0.08*get('stamina').value + 0.08*get('reactions').value + 
    0.07*get('crossing').value + 0.07*get('heading').value + 0.07*get('ball-control').value + 
    0.06*get('short-pass').value + 0.05*get('speed').value + 0.05*get('aggression').value;
    return Math.round(fbOvr) + parseInt(get('intl-rep').value);
}

function fwb() {
    var fwbOvr = 0.1*get('slide-tackle').value + 0.11*get('stand-tackle').value + 0.10*get('interception').value + 
    0.09*get('marking').value + 0.08*get('stamina').value + 0.08*get('reactions').value + 
    0.1*get('crossing').value + 0.03*get('agility').value + 0.1*get('ball-control').value + 
    0.1*get('short-pass').value + 0.04*get('speed').value + 0.07*get('dribbling').value;
    return Math.round(fwbOvr) + parseInt(get('intl-rep').value);
}

function cdm() {
    var cdmOvr = 0.08*get('vision').value + 0.1*get('stand-tackle').value + 0.12*get('interception').value + 
    0.1*get('marking').value + 0.06*get('stamina').value + 0.09*get('reactions').value + 
    0.06*get('strength').value + 0.09*get('ball-control').value + 0.13*get('short-pass').value + 
    0.11*get('long-pass').value + 0.05*get('aggression').value;
    return Math.round(cdmOvr) + parseInt(get('intl-rep').value);
}

function cm() {
    var cmOvr = 0.12*get('vision').value + 0.06*get('stand-tackle').value + 0.08*get('interception').value + 
    0.09*get('dribbling').value + 0.06*get('stamina').value + 0.08*get('reactions').value + 
    0.08*get('att-position').value + 0.1*get('ball-control').value + 0.15*get('short-pass').value + 
    0.13*get('long-pass').value + 0.05*get('long-shots').value;
    return Math.round(cmOvr) + parseInt(get('intl-rep').value);
}

function cam() {
    var camOvr = 0.16*get('vision').value + 0.04*get('agility').value + 0.04*get('acceleration').value + 
    0.11*get('dribbling').value + 0.05*get('finishing').value + 0.08*get('reactions').value + 
    0.12*get('att-position').value + 0.13*get('ball-control').value + 0.16*get('short-pass').value + 
    0.06*get('long-shots').value + 0.05*get('shot-power').value;
    return Math.round(camOvr) + parseInt(get('intl-rep').value);
}

function wm() {
    var wmOvr = 0.08*get('vision').value + 0.03*get('agility').value + 0.05*get('acceleration').value + 
    0.14*get('dribbling').value + 0.05*get('speed').value + 0.07*get('reactions').value + 
    0.07*get('att-position').value + 0.12*get('ball-control').value + 0.12*get('short-pass').value + 
    0.08*get('long-pass').value + 0.14*get('crossing').value + 0.05*get('stamina').value;
    return Math.round(wmOvr) + parseInt(get('intl-rep').value);
}

function wf() {
    var wfOvr = 0.05*get('vision').value + 0.05*get('heading').value + 0.04*get('acceleration').value + 
    0.11*get('dribbling').value + 0.04*get('speed').value + 0.1*get('reactions').value + 
    0.12*get('att-position').value + 0.11*get('ball-control').value + 0.06*get('short-pass').value + 
    0.1*get('long-shots').value + 0.16*get('crossing').value + 0.1*get('shot-power').value;
    return Math.round(wfOvr) + parseInt(get('intl-rep').value);
}

function fw() {
    var fwOvr = 0.05*get('vision').value + 0.05*get('heading').value + 0.04*get('acceleration').value + 
    0.11*get('dribbling').value + 0.04*get('speed').value + 0.1*get('reactions').value + 
    0.12*get('att-position').value + 0.11*get('ball-control').value + 0.06*get('short-pass').value + 
    0.1*get('long-shots').value + 0.12*get('finishing').value + 0.1*get('shot-power').value;
    return Math.round(fwOvr) + parseInt(get('intl-rep').value);
}

function st() {
    var stOvr = 0.05*get('volley').value + 0.1*get('heading').value + 0.05*get('acceleration').value + 
    0.08*get('dribbling').value + 0.04*get('speed').value + 0.1*get('reactions').value + 
    0.12*get('att-position').value + 0.08*get('ball-control').value + 0.03*get('strength').value + 
    0.05*get('long-shots').value + 0.2*get('finishing').value + 0.1*get('shot-power').value;
    return Math.round(stOvr) + parseInt(get('intl-rep').value);
}

function pac() {
    return Math.round(0.55*get('speed').value + 0.45*get('acceleration').value);
}

function pas() {
    return Math.round(0.35*get('short-pass').value + 0.2*get('crossing').value + 0.2*get('vision').value + 
    0.15*get('long-pass').value + 0.05*get('curve').value + 0.05*get('fk-acc').value);
}

function def() {
    return Math.round(0.3*get('stand-tackle').value + 0.3*get('marking').value + 
    0.2*get('interception').value + 0.1*get('heading').value + 0.1*get('slide-tackle').value);
}

function sho() {
    return Math.round(0.45*get('finishing').value + 0.2*get('long-shots').value + 
    0.2*get('shot-power').value + 0.05*get('volley').value + 0.05*get('att-position').value + 
    0.05*get('penalties').value);
}

function dri() {
    return Math.round(0.5*get('dribbling').value + 0.35*get('ball-control').value + 
    0.1*get('agility').value + 0.05*get('balance').value);
}

function phy() {
    return Math.round(0.5*get('strength').value + 0.25*get('stamina').value + 0.2*get('aggression').value + 
    0.05*get('jumping').value);
}

function ratingColor(element) {
    var rating = parseInt(element.innerText);
    if (rating >= 90) {
        element.style.backgroundColor = "#008120";
    }
    if (rating < 90 && rating >= 80) {
        element.style.backgroundColor = "#38c500";
    }
    if (rating < 80 && rating >= 66) {
        element.style.backgroundColor = "#e2d300";
    }
    if (rating < 66 && rating >= 50) {
        element.style.backgroundColor = "#e26d00";
    }
    if (rating < 50) {
        element.style.backgroundColor = "#f72500";
    }
}

get('submit').addEventListener('click', function() {
    var OVR = 'NA';
    if (get('position').value.toUpperCase() == 'ST' || get('position').value.toUpperCase() == 'LS' || get('position').value.toUpperCase() == 'RS') {
        get('ovr').innerText = "OVR "+st();
    }
    if (get('position').value.toUpperCase() == 'CF' || get('position').value.toUpperCase() == 'LF' || get('position').value.toUpperCase() == 'RF') {
        get('ovr').innerText = "OVR "+fw();
    }
    if (get('position').value.toUpperCase() == 'LW' || get('position').value.toUpperCase() == 'RW') {
        get('ovr').innerText = "OVR "+wf();
    }
    if (get('position').value.toUpperCase() == 'LM' || get('position').value.toUpperCase() == 'RM') {
        get('ovr').innerText = "OVR "+wm();
    }
    if (get('position').value.toUpperCase() == 'CAM' || get('position').value.toUpperCase() == 'LAM' || get('position').value.toUpperCase() == 'RAM') {
        get('ovr').innerText = "OVR "+st();
    }
    if (get('position').value.toUpperCase() == 'CM' || get('position').value.toUpperCase() == 'LCM' || get('position').value.toUpperCase() == 'RCM') {
        get('ovr').innerText = "OVR "+st();
    }
    if (get('position').value.toUpperCase() == 'CDM' || get('position').value.toUpperCase() == 'LDM' || get('position').value.toUpperCase() == 'RDM') {
        get('ovr').innerText = "OVR "+st();
    }
    if (get('position').value.toUpperCase() == 'LWB' || get('position').value.toUpperCase() == 'RWB') {
        get('ovr').innerText = "OVR "+fwb();
    }
    if (get('position').value.toUpperCase() == 'LB' || get('position').value.toUpperCase() == 'RB') {
        get('ovr').innerText = "OVR "+fb();
    }
    if (get('position').value.toUpperCase() == 'CB') {
        get('ovr').innerText = "OVR "+cb();
    }
    if (get('position').value.toUpperCase() == 'GK') {
        get('ovr').innerText = "OVR "+gk();
    }

    get('pac').innerText = +pac();
    get('dri').innerText = +dri();
    get('pas').innerText = +pas();
    get('def').innerText = +def();
    get('sho').innerText = +sho();
    get('phy').innerText = +phy();

    get('st').innerText = st();
    ratingColor(get('st'));
    get('fw').innerText = fw();
    ratingColor(get('fw'));
    get('wf').innerText = wf();
    ratingColor(get('wf'));
    get('wm').innerText = wm();
    ratingColor(get('wm'));
    get('cam').innerText = cam();
    ratingColor(get('cam'));
    get('cm').innerText = cm();
    ratingColor(get('cm'));
    get('cdm').innerText = cdm();
    ratingColor(get('cdm'));
    get('fwb').innerText = fwb();
    ratingColor(get('fwb'));
    get('fb').innerText = fb();
    ratingColor(get('fb'));
    get('cb').innerText = cb();
    ratingColor(get('cb'));
    get('gk').innerText = gk();
    ratingColor(get('gk'));
});
window.onload = function() {
    get('submit').click();
}