var counter = {
  count: 0,
  endTime: 240
};


counter.countdown = function(timingobj , callback){
  var interval,      count=0,      startAt=0,      endAt=0;

    if (timingobj === undefined || timingobj.startAt === undefined || timingobj.endAt === undefined )
    {      console.log('Incorrect input found');
       } else {

          startAt =  parseInt(timingobj.startAt, 0);
          endAt =  parseInt(timingobj.endAt, 10);
            if (!isNaN(startAt) && !isNaN(endAt)) {
              count = startAt;
                console.log('Started countdown');
                    interval =   setInterval(function () {
                      console.log(count);
                      count = count + 1;
                      if(count >= endAt){
                          count = 0;
                          clearInterval(interval);
                          // if synchronity is an issue
                            if(callback !== undefined){callback(startAt, endAt);  }
                      }
                    }, 1000);
            }
      }
  //    if(callback !== undefined){
  //      callback(startAt, endAt);
  //    }
};

//counter.countdown({startAt:10, endAt:20});
