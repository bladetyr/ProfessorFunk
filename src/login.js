//Login function
window.onload = function() {
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        
        
    });
}

//New login function
window.onload = function() {
    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        var myObj = {
            "username" : $(this).parent().find('.username').text(),
            "password" : $(this).parent().find('.password').text(),
            "score-1" : 0,
            "score-2" : 0,
            "score-3" : 0,
            "score-4" : 0
        };
        
    });
}