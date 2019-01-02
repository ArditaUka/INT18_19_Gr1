(function() {
  var snowflakes = [],
      moveAngle = 0,
      animationInterval;

  //Merr nje numer te qfaredoshem me vlere max ose min Random vlerat mes 0 dhe 1 
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Krijon nje snowflake div edhe e kthen ate 
  function createSnowflake() {
    var el = document.createElement('div'),
        style = el.style;

    style.borderRadius = '100%';
    style.border = getRandomNumber(1, 4) + 'px solid white';
    style.position = 'fixed';
    style.zIndex = '999999';
    style.boxShadow = '0 0 2px rgba(255,255,255,0.8)';
    style.top = getRandomNumber(0, window.innerHeight) + 'px';
    style.left = getRandomNumber(0, window.innerWidth) + 'px';

    return el;
  }

  //E thirr funksonin moveSnowflakes per secilen snowflake qe shfaqet ne backg
  function moveSnowflakes() {
    var l = snowflakes.length,
        i;

    moveAngle += 0.01;

    for (i=0; i<l; i++) {
      moveSnowflake(snowflakes[i]);
    }
  }

  //E leviz vetem nje snowFlake
  function moveSnowflake(el) {
    var style = el.style,
        height = window.innerHeight,
        radius,
        top;

    radius = parseInt(style.border, 10);

    top = parseInt(style.top, 10);
    top += Math.cos(moveAngle) + 1 + radius/2;

    if (top > height) {
      resetSnowflake(el);
    } else {
      style.top = top + 'px';
    }
  }

  //Ky funksion i lejon qe snowflake me fillu me ra perseri prej nalt 
  function resetSnowflake(el) {
    var style = el.style;

    style.top = '0px';
    style.left = getRandomNumber(0, window.innerWidth) + 'px';
  }

  //Ky funksion merr numrin e flakes i krijon edhe e percakton intervalin per te cilin levin 
  function setup() {
    var number = 100,
        particle,
        i;

    // Setup snow particles
    for (i=0; i<number; i++) {
      particle = snowflakes[i] = createSnowflake();
      document.body.appendChild(particle);
    }

    // I tregon intervalet ne te cilat do te kemi snowflake
    animationInterval = setInterval(moveSnowflakes, 25);
  }

  setup();
}());