$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    getAndRenderChildren();
}


// GET(read) and render "children" table data
function getAndRenderChildren() {
    console.log('DOM rendered');
    // ajax call to server to GET(read)
    $.ajax({
        method: 'GET',
        url: '/children'
    }).then((response) => {
        console.log('GET response from childrenRouter', response);
        $('#childrenTable').empty();
        for (let child of response) {
            if (child.naughty_or_nice) {
                child.naughty_or_nice = 'Nice';
                $('#childrenTable').append(`
                <tr>
                    <td>${child.name}</td>
                    <td>${child.gift}</td>
                    <td>${child.notes}</td>
                    <td>${child.naughty_or_nice}</td>
                </tr>
                `);
            } else {
                child.naughty_or_nice = 'Naughty';
                $('#childrenTable').append(`
                <tr>
                    <td>${child.name}</td>
                    <td>${child.gift}</td>
                    <td>${child.notes}</td>
                    <td>${child.naughty_or_nice}</td>
                </tr>
                `);
            }
        }
    }).catch((error) => {
        console.log('error GET client!', error);
    })
}

// POST(create) to /children

// DELETE(delete) from /children

// PUT(update) /children