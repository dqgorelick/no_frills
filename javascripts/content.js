var noFrills = confirm("No Frills?");

if (noFrills) {
    deleteStyles();
    deleteStyleTags();
    setInterval(function() {
        deleteStyles();
        deleteStyleTags()
    }, 500)

    function deleteStyles() {
        var stylesheets = document.getElementsByTagName('link');

        for (var i = 0; i < stylesheets.length; i++) {
            var sheet = stylesheets[i];

            if(sheet.getAttribute('type')) {
                if(sheet.getAttribute('type').toLowerCase() == 'text/css') {
                    sheet.parentNode.removeChild(sheet);
                }
            } else if (sheet.getAttribute('rel')) {
                if(sheet.getAttribute('rel').toLowerCase() == 'stylesheet') {
                    sheet.parentNode.removeChild(sheet);
                }
            }
        }
    }

    function deleteStyleTags() {
        var stylesheets = document.getElementsByTagName('style');
        for (var i = 0; i < stylesheets.length; i++) {
            var sheet = stylesheets[i];
            sheet.parentNode.removeChild(sheet);
        }
    }
}
