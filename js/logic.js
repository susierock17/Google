function showSettings() {
    document.getElementById('setting').setAttribute('aria-expanded', 'true');
    document.getElementsByClassName('setting-list')[0].style.display = 'block';
}

function closeSettings() {
    document.getElementById('setting').setAttribute('aria-expanded', 'false');
    document.getElementsByClassName('setting-list')[0].style.display = 'none';
}

function highlightInput() {
    document.getElementsByClassName('search-box-b113')[0].style.borderColor = '#4d90fe';
}

function unHighlightInput() {
    document.getElementsByClassName('search-box-b113')[0].style.borderColor = '';
}

var appShown = false;
function Apps() {
    var apps_b = document.getElementById('apps-b'),
        google_apps = document.getElementById('google-apps'),
        apps_a1 = document.getElementById('apps-a1'),
        apps_a2 = document.getElementById('apps-a2');

    function showAppWindow() {
        apps_b.setAttribute("aria-hidden", "false");
        apps_b.style.display = "block";
        google_apps.setAttribute("aria-expanded", "true");
        apps_a1.style.display = "block";
        apps_a2.style.display = "block";
    }

    function closeAppWindow() {
        apps_b.setAttribute("aria-hidden", "true");
        apps_b.style.display = "none";
        google_apps.setAttribute("aria-expanded", "false");
        apps_a1.style.display = "none";
        apps_a2.style.display = "none";

    }

    if (appShown)
        closeAppWindow();
    else
        showAppWindow();

    appShown = !appShown;
}
function showMoreApps() {
    var more = document.getElementById('more'),
        apps_list1 = document.getElementById('apps-list1'),
        services_b = document.getElementById('services-b');
    function show() {
        more.setAttribute("aria-hidden", "false");
        more.setAttribute("aria-expanded", "true");
        more.style.display = "none";
        apps_list1.setAttribute("aria-hidden", "false");
        apps_list1.style.display = "block";
        services_b.setAttribute("aria-hidden", "false");
        services_b.style.display = "block";
    }
    function close() {
        more.setAttribute("aria-hidden", "true");
        more.setAttribute("aria-expanded", "false");
        more.style.display = "block";
        apps_list1.setAttribute("aria-hidden", "true");
        apps_list1.style.display = "none";
        services_b.setAttribute("aria-hidden", "true");
        services_b.style.display = "none";
    }
    if (document.getElementById('apps-b').scrollTop > 0) {
        console.log(document.getElementById('apps-b').scrollTop);
        show();
    }
    else {
        console.log(document.getElementById('apps-b').scrollTop);
        close();
    }
}
