chrome.storage.local.get( [ "authuser-number" ], function( result ) {
    if ( result[ "authuser-number" ] === undefined 
    || typeof result[ "authuser-number" ] == "undefined"
    || result[ "authuser-number" ] == "" ) {
        return;
    }

    document.getElementById( "number" ).value = result[ "authuser-number" ];
} );

document.getElementById( "number" ).addEventListener( "input", function ( event ) {
    chrome.storage.local.set( { "authuser-number" : parseInt( event.target.value, 10 ) } );
} );