document.getElementById('calculate').addEventListener('click', function() {
    var depositType = document.getElementById('depositType').value;
    var depositTerm = document.getElementById('depositTerm').value;
    var depositAmount = document.getElementById('depositAmount').value;
  
    if (!depositType || !depositTerm || !depositAmount) {
      alert('Please fill in all fields');
      return;
    }
  
    var rates = {
      replenishable: {
        '6 months': 0.20,
        '1 year': 0.22,
        '1.5 years': 0.15,
        '2 years': 0.10
      },
      fixed: {
        '3 months': 0.20,
        '6 months': 0.22,
        '9 months': 0.23,
        '1 year': 0.24,
        '1.5 years': 0.18,
        '2 years': 0.15
      }
    };
  
    var rate = rates[depositType][depositTerm];
    var result = depositAmount * (1 + rate);
  
    document.getElementById('result').textContent = 'If you deposit ' + depositAmount + ' for ' + depositTerm + ' at a rate of ' + (rate * 100) + '%, your total will be ' + result.toFixed(2) + '.';
  });
  
  document.getElementById('depositType').addEventListener('change', function() {
    var depositType = this.value;
    var depositTerm = document.getElementById('depositTerm');
    depositTerm.innerHTML = '<option value="">Select</option>';
  
    var terms = {
      replenishable: ['6 months', '1 year', '1.5 years', '2 years'],
      fixed: ['3 months', '6 months', '9 months', '1 year', '1.5 years', '2 years']
    };
  
    terms[depositType].forEach(function(term) {
      var option = document.createElement('option');
      option.value = term;
      option.textContent = term;
      depositTerm.appendChild(option);
    });
  });
  