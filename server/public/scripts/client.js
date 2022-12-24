$(document).on(onReady);

function onReady() {
    console.log('DOM ready');
}

// render "children" table data
function renderChildList() {
    console.log('DOM rendered');
}

// GET(read) /children
function getChildrenData() {
    console.log('in getChildrenData');
    // ajax call to server to GET(read)
    $.ajax({
        method: 'GET',
        url: '/children'
    }).then((response) => {
        console.log('GET response from childrenRouter', response);
    })
}

// POST(create) to /children

// DELETE(delete) from /children

// PUT(update) /children