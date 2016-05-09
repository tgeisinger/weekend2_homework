$(document).ready(function() {
    Array.prototype.next = function() {
        return this[++this.current];
    };
    Array.prototype.prev = function() {
        return this[--this.current];
    };
    Array.prototype.current = 0;



    var muNames = [];
    var gitUsername = [];
    var muShoutouts = [];

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data) {
            $.each(data.mu, function(i, person) {
                muNames.push(person.name);
                gitUsername.push(person.git_username);
                muShoutouts.push(person.shoutout);

                $('#muName').text(muNames[0]);
                $('#git').text(gitUsername[0]);
                $('#shoutout').text(muShoutouts[0]);

                $('#next').on('click', nextPerson);
                $('#prev').on('click', prevPerson);

                function nextPerson() {
                    var newNames = muNames.next();
                    var newGit = gitUsername.next();
                    var newShoutout = muShoutouts.next();
                    $('#muName').text(newNames);
                    $('#git').text(newGit);
                    $('#shoutout').text(newShoutout);
                    newNames.next();
                    gitUsername.next();
                    muShoutouts.next();

                }

                function prevPerson() {
                    var newNames = muNames.prev();
                    var newGit = gitUsername.prev();
                    var newShoutout = muShoutouts.prev();
                    $('#muName').text(newNames);
                    $('#git').text(newGit);
                    $('#shoutout').text(newShoutout);
                    newNames.prev();
                    gitUsername.prev();
                    muShoutouts.prev();


                };

            });
        }

    });
});
