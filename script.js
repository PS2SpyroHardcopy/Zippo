function racer(name, speed, handling) {
  var that = this;
  this.name = "name";
  this.speed = 10;
  this.handling = 9;
  this.ele = document.createElement("div");
  this.speedEle = document.createElement("div");
  this.handlingEle = document.createElement("div");
  this.speedEle.style.backgroundColor = "red";
  this.handlingEle.style.backgroundColor = "blue";
  this.handlingEle.innerHTML = "Handling: " + this.handling;
  this.speedEle.innerHTML = "Speed: " + this.speed;
  this.ele.appendChild(this.speedEle);
  this.ele.appendChild(this.handlingEle);

  this.ele.addEventListener("click", function() {
    that.math(); // that?
  });

  document.body.appendChild(this.ele);
}

racer.prototype.math = function() {
  if(this.handling >= 3){
  for (var i = 0; i < 5; i++) {
    this.speed++;
  }
    
    for (var d = 0; d < 2; d++) {
      this.handling--;
    }
}
  this.speedEle.innerHTML = "Speed: " + this.speed;
  this.handlingEle.innerHTML = "Handling: " + this.handling;
};

var racer1 = new racer();