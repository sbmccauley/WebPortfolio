// IIFE - It's good (Immediately Invoked Function expression
(function(){
    "use strict";
    
    console.log("Ready to go!"); // View in F12
    
    var elFmSaveAlbum = document.getElementById("fmSaveAlbum"),
        elFmShowAlbum = document.getElementById("fmShowAlbum"),
        elDivOutput = document.getElementById("divOutput"),
        arrAlbums = [];
        
    function Album(artist, name, year, notes) {
        this.artist = artist;
        this.name = name;
        this.year = year;
        this.notes = notes;
    }	//END Album()
    
    function fnSaveAlbum (event) {
        event.preventDefault();
        console.log ("fnSaveAlbum(event) is running");
        
        
        /*
            Create variables to hold the Values of the various Input Fields
            REMEMBER .getElementById     NOT     .getElementByID
        */
        var valInAlbumArtist = document.getElementById("inAlbumArtist").value, //Query
            valInAlbumTitle  = document.getElementById("inAlbumTitle").value,
            valInAlbumYear   = document.getElementById("inAlbumYear").value,
            valInAlbumNotes  = document.getElementById("inAlbumNotes").value;
            
            
        console.log(valInAlbumArtist, valInAlbumTitle, valInAlbumYear, valInAlbumNotes);	
        
        
        // Create a new Instance of the Album Object with four Parameters (aka Properties)
        var anAlbum = new Album(valInAlbumArtist, valInAlbumTitle, valInAlbumYear, valInAlbumNotes);
        
        console.log("All data as one object:" + anAlbum);
        console.log("The Title Property of the Album: " + anAlbum.name);
        
        //Add the current Album to the Array, at the end
        arrAlbums.push(anAlbum);
        console.log("All my albums are: " + arrAlbums);
        console.log("A single album from the collection: " + arrAlbums[0].name);
        
        //Before we finish Saving the album, clear the Inputs
        elFmSaveAlbum.reset(); //better UX design, common practice, RESET METHOD 
    } //END fnSaveAlbum()
    
    
    function fnShowAlbum(event) {
        event.preventDefault();
        console.log("fnSaveAlbum(event) is running");
        /*
            Before trying to display anything on-screen,
            check if we've got data in the Array
            Using an If..Else Statement allows you to check for conditions
                to "make a decision"
        */
        if(arrAlbums.length === undefined) {
            // If what we're checking is true, do the following code,
            // and skip everything in the else block
            //Code goes here
            console.log("There are no albums saved");
        } else {
            //or Else, it was false so do this code instead
            //or what was in the if block
            //Code goes here
            console.log("There are some albums saved");
        } // END If..Else checking if Array is Undefined	
        
        
        /*
            Randomly select an album to show on-screen
            Pseudo Code (a sort of version of the code)
            Make a Random Number ()
            Get an album from the array via random number()
            Show the random album in the div()
        */
        //To make a random number use Math.random(); ( other examples of Math: Math.sin(); Math.pi() )
        //Should be within the bounds of the # of Albums (in the Array) arrAlbums.length;
        //To round a number: Math.round();
        //To always round down: Math.floor() 3.9=3 3.1=3 3.9991=3
        //To always round up: Math.ceil()
        
        
        var randomAlbum = Math.floor(Math.random() * arrAlbums.length);
        console.log(randomAlbum);
        
        elDivOutput.innerHTML = "<p><strong>Album Artist: </strong>" + arrAlbums[randomAlbum].artist +
                                "<br><strong>Album Name: </strong>"  + arrAlbums[randomAlbum].name +
                                "<br><strong>Album Year: </strong>"  + arrAlbums[randomAlbum].year +
                                "<br><strong>Album Notes: </strong>" + arrAlbums[randomAlbum].notes +
                                "</p>";
        
        
    } //END fnShowAlbum()
    
    elFmSaveAlbum.addEventListener("submit", function(event){fnSaveAlbum(event);});
    elFmShowAlbum.addEventListener("submit", function(event){fnShowAlbum(event);});
})();
