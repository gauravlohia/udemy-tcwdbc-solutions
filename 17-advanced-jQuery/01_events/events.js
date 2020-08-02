// $("h1").click(function() {
//     alert("h1 clicked");
// });

// $('button').click(function() {
//     $(this).css('background', 'pink');
// });

// $('input').keypress(function(event) {
//     if (event.which === 13) {
//         console.log("you pressed ENTER");
//     }
// })

$('h1').on('click', function() {
    $(this).css('color', 'purple');
});

$('input').on('keypress', function() {
    console.log("Key Pressed!");
});

$('button').on('mouseenter', function() {
    $(this).css('font-weight', 'bold');
});

$('button').on('mouseleave', function() {
    $(this).css('font-weight', 'normal')
})