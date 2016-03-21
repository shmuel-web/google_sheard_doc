/**
 * Created by shmuel-d on 21.3.2016.
 */
socket.emit('news', "hi");
socket.on('userType', function (val) {
    console.log(val);
});
