var	questionAnswerArray = [
{
	question: 'What is the first book of the bible?', 
	answer:['Genesis', 'Matthew', 'Daniel', 'Hezekiah'],
	correctAnswer: 'Genesis'
},
{
	question: 'The disciple whom Jesus loved wrote what prophetic book?', 
	answer:['Micah', 'Hezekiah', 'Isaiah', 'Revelation'],
	correctAnswer: 'Revelation'
},
{
	question:'In Psalms 23 the Lord is described as what?', 
	answer:['Shepherd', 'Lamb', 'Lion', 'King'],
	correctAnswer: 'Shepherd'
},
{
	question: 'What Gospel writer was formerly a tax collector?', 
	answer:['Luke', 'Phineas', 'Matthew', 'Paul'],
	correctAnswer: 'Matthew'
},
{
	question:'It was prophesied that Messiah would be born in what small town?', 
	answer:['Bethlehem', 'Jerusalem', 'Sidon', 'Detroit'],
	correctAnswer: 'Bethlehem'
},
{
	question:'What did God create on the seventh day?', 
	answer:['nothing', 'light', 'man', 'animals'],
	correctAnswer: 'nothing'
},
{
	question:'Which apostle was sent to evangelize the Gentiles?', 
	answer:['Peter', 'Barnabas', 'Mark', 'Paul'],
	correctAnswer: 'Paul'
},
{
	question: 'How many books did John write?',
	answer:['5', '4', '3', '1'],
	correctAnswer: '5'
},
{
	question:'Though I give my body or have faith to move mountains, if I do not have what, I am nothing?', 
	answer:['grace', 'money', 'gift of tongues', 'love'],
	correctAnswer: 'love'
},
{
	question: 'What is the location where the Last Supper took place?', 
	answer:['upper room', 'Mt. of Olives', 'Sidon', 'Temple'],
	correctAnswer: 'upper room'
},
{
	question:'Who wrote the letter to the Hebrews', 
	answer:['no one knows', 'Paul', 'Peter', 'Barnabas'],
	correctAnswer: 'no one knows'
},
{
	question: 'Jesus delegated the care of his mother to this disciple when He was dying?', 
	answer:['Paul', 'John', 'Peter', 'Timothy'],
	correctAnswer: 'John'
},
{
	question:'Who fought the battle of Jericho?', 
	answer:['Moses', 'Jesus', 'Isaac', 'Joshua'],
	correctAnswer: 'Joshua'
},
{
	question: "Who was Abraham's nephew?", 
	answer:['Lot', 'Samuel', 'Isaiah', 'Ishmael'],
	correctAnswer: 'Lot'
},
{
	question: "Which of the following is not in the Pentateuch?", 
	answer:['Joshua', 'Genesis', 'Deuteronomy', 'Leviticus'],
	correctAnswer: 'Joshua'
},
{
	question: "This Old Testament book was named after a woman who's uncle's name is Mordecai?", 
	answer:['Esther', 'Ruth', 'Oprah', 'Sarah'],
	correctAnswer: 'Esther'
},
{
	question:'What is one prophesy book that is to a nation other than Israel?', 
	answer:['Nahum', 'Jonah', 'Malachi', 'Isaiah'],
	correctAnswer: 'Nahum'
},
{
	question:"This man's wife told him to curse God and die?", 
	answer:['Abraham', 'Moses', 'David', 'Job'],
	correctAnswer: 'Job'
},
{
	question:'This book of wisdom is written from a father to a son?', 
	answer:['Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
	correctAnswer: 'Proverbs'
},
{
	question: 'According to this book, all is vanity?',
	answer:['Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
	correctAnswer: 'Proverbs'
}

];

$(function(){
	console.log("ready");

	var newButton = $('<button>' + 'Start Game' + '</button>');
	newButton.attr('id', 'buttonStyle');
	$('#mainSection').append(newButton);

//start game button begins game
newButton.click(function(){

	newButton.remove();

	// Timer Section

 	var count = 60;

 	var counter = setInterval(timer, 1000);

 	function timer(){
 		count = count - 1;
 		if (count <=0){
 			clearInterval(counter);
 			return;
 		}
 		$('#timer').html(count + " secs");
 	}

	//End of Timer Section

	var questionAnswerDiv = $('#mainSection');
	questionAnswerDiv.addClass('clickSection')

//Loop to display questions answers and radio buttons
for (var i = 0; i < questionAnswerArray.length; i++){
	var question = questionAnswerArray[i].question;
	var choices = questionAnswerArray[i].answer;
	var correct = questionAnswerArray[i].correctAnswer;
	var newQuestionDiv = $('<div>' + question + '</div>');
	var newAnswerDiv = $('<form>' + '<input type = "radio" name = "radAnswer" class = "radioClasses" value = "' + choices[0] + '">' + choices[0] + '</input>' + '<input type = "radio" name = "radAnswer" class = "radioClasses" value = "' + choices[1] + '">' + choices[1] + '</input>' + '<input type = "radio" name = "radAnswer" class = "radioClasses" value = "' + choices[2] + '">' + choices[2] + '</input>' + '<input type = "radio" name = "radAnswer" class = "radioClasses" value = "' + choices[3] + '">' + choices[3] + '</input>' + '</form>');

	newQuestionDiv.addClass('bg-primary text-white');
	newQuestionDiv.attr('id', 'style');

	newAnswerDiv.attr('id', 'styling')
	
	questionAnswerDiv.append(newQuestionDiv);
	newQuestionDiv.append(newAnswerDiv);
}
});

	var right = 0;
	var wrong = 0;



$('input[type=radio][name=radAnswer]').on("click", function(){
	var checkValues = $( "input[type=radio][name=radAnswer]:checked" ).val();
		if (checkValues == correct){
			right++;
			console.log("You got it");
			console.log(right);
		} else {
			wrong++;
			console.log("Wrong");
			console.log(wrong);
		};
	//console.log(checkValues);
	//console.log ($("input:checked").val());
	//console.log(valueCheck);
	//var checkValues = $('form').serializeArray();
	// for (j = 0; j < choices.length; j++){
	// 	console.log($(this).serializeArray());
		// if (checkValues.value == correct){
		// 	right++;
		// 	console.log("correct");
		// }else {
		// 	wrong++;
		// 	console.log("incorrect");
		// }
	});
});

//});	
//});
