var badgeURL = 'https://www.codeschool.com/users/noise850.json';
var account = new Object();
$(function() {

    $.ajax({
        url: badgeURL,
        dataType: 'jsonp',
        success: function(response){
            handleJSON(response);
        }
    });
});

function handleJSON(json){
    for(var key in json){
        account[key] = json[key];
    }
    console.log(account);
    var badgesDiv = $('#badges');
    for(var i in account.courses.completed){
        var course = account.courses.completed[i];
        console.log(course.title);
        var courseDiv = $('<div>');
        courseDiv.addClass("course").html("<h3>" + course.title + "</h3>");
        courseDiv.append($('<img>', {src: course.badge}));
        badgesDiv.append(courseDiv);
    }
};
