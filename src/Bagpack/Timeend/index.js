function TimeDown(endDateStr) {
       //结束时间
       var endDate = new Date(endDateStr * 1000)
       //当前时间
       var nowDate = new Date();
      
       //相差的总秒数
       var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //    return console.log(nowDate)
       //天数
    //    var days = Math.floor(totalSeconds / (60 * 60 * 24));
       //取模（余数）
       var modulo = totalSeconds % (60 * 60 * 24);
       //小时数
       var hours = Math.floor(modulo / (60 * 60));
       modulo = modulo % (60 * 60);
       //分钟
    //    var minutes = Math.floor(modulo / 60);

       //延迟一秒执行自己
       setTimeout(function () {
           TimeDown(hours, endDateStr);
       }, 1000)
    return   hours 
}
export {TimeDown}