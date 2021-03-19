chrome.storage.local.get( [ "authuser-number" ], function( result ) {
    if ( result[ "authuser-number" ] === undefined 
    || typeof result[ "authuser-number" ] == "undefined"
    || result[ "authuser-number" ] == "" ) {
        authuser = 0;
    }
    else {
        authuser = result[ "authuser-number" ];
    }

    let objURL = new URL( document.querySelector( "html body div h1 span" ).innerText );

    if ( !( /google/g.test( objURL.hostname ) ) ) {
        return;
    }

    objURL.searchParams.set( "authuser", authuser );

    // czasem na linku xxx.com/lookup nadal trzeba wybrac konto
    // @todo: zrobic specjalny warunek dla lookup 
    if ( /lookup/g.test( objURL.pathname ) ) {}

    let input = document.querySelector( "html body div form input" );
    let aElement = document.createElement( "a" );
    let preparedButton = document.createElement( "button" );
    let pElement = document.createElement( "p" );

    // informacja zeby nikt sie nie przyczepil, ze zmieniamy linki bez powodu
    pElement.innerHTML = "<strong>UWAGA!</strong> Link został <strong>zmieniony</strong> przez wtyczkę \
    <span style=\"background-color: #1a2530; border-radius: 5px; padding: 5px 10px; color: #ffffff;\"><span style=\"color:#ECC94B;\">Meet</span>Extension</span>.\
    ";
    pElement.style = "overflow-wrap: break-word;font-size: 1.5em;font-weight: 500;";
    
    aElement.href = objURL.href;

    preparedButton.style = input.style.cssText;
    preparedButton.innerText = input.value;

    document.querySelectorAll( "html body div p" )[ 1 ].remove();
    input.remove();

    aElement.appendChild( preparedButton );
    document.querySelector( "html body div" ).appendChild( aElement );
    document.querySelector( "html body div" ).appendChild( pElement );
} );



