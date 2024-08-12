function dropdownFunction(number) {
  if (window.innerWidth > 1023 || window.innerWidth < 720) {
    const list = document.getElementById(`dropdown__list-${number}`);
    const arrow = document.getElementById(`arrow-${number}`);
    if (list.classList.contains('display-none')) {
      list.classList.remove('display-none');
      arrow.style.rotate = '180deg';
    } else {
      list.classList.add('display-none');
      arrow.style.rotate = '0deg';
    }
  }
}

function rangeSlider() {
  const rangeInput = document.querySelectorAll('.range-input input'),
    priceInput = document.querySelectorAll('.price-input input'),
    range = document.querySelector('.slider .progress');
  let priceGap = 5;

  priceInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === 'input-min') {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + '%';
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + '%';
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === 'range-min') {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + '%';
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
      }
    });
  });
}

function progressRing(number) {
  var circle = document.getElementById(`progress-ring__circle-${number}`);
  var radius = circle.r.baseVal.value;
  var circumference = radius * 2 * Math.PI;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  }

  const input = document.getElementById(`progress-ring__input-${number}`);
  setProgress(input.value);

  input.addEventListener('change', function (e) {
    if (input.value < 101 && input.value > -1) {
      setProgress(input.value);
    }
  });
}

progressRing('four');
progressRing('three');
progressRing('two');
progressRing('one');

rangeSlider();
