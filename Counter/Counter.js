function updateCounter(count) 
{
	if (count=='custom')
	{
		var customCount = document.getElementById('customCount').value;
		count = customCount;
	}

	count = parseInt(count);

	var counter = document.getElementById('counter');
	var currentCount = parseInt(counter.innerHTML);

	counter.innerHTML = currentCount + count;
}

function setCounter()
{
	var counter = document.getElementById('counter');
	var setCount = document.getElementById('setCount');

	counter.innerHTML = parseInt(setCount.value);
}