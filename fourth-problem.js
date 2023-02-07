function findingBadData(){
    let numbers=[-4, -9, -5, -33, -55]
	let goodData = badData = i=0;
	while( i < numbers.length)
	{
	if (numbers[i]<0)
	badData++;
	else
	goodData++;
	i++;
	}
    return badData;
}
findingBadData();
console.log(badData)
