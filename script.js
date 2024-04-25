document.addEventListener('DOMContentLoaded', function() {
    setInterval(function() {
        var spotifyImage = document.getElementById('spotify-image');
        var imageUrl = spotifyImage.src.split('&time=')[0];
        spotifyImage.src = imageUrl + '&time=' + new Date().getTime();

        function formatDateTime() {
            var now = new Date();
            var year = now.getFullYear();
            var month = ('0' + (now.getMonth() + 1)).slice(-2);
            var day = ('0' + now.getDate()).slice(-2);
            var hour = ('0' + now.getHours()).slice(-2);
            var minute = ('0' + now.getMinutes()).slice(-2);
            var second = ('0' + now.getSeconds()).slice(-2);
            return day + '.' + month + '.' + year + ' ' + hour + '.' + minute + '.' + second;
        }

        console.log(formatDateTime() + ' - Updated the Spotify Widget');
    }, 10000);
});
