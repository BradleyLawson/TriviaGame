$(function(){
	console.log("ready");

var correctGuessed = 0;
var wrongGuessed = 0;



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

var	questionAnswerArray = [
{
	question: 'What is the first book of the bible?', 
	answer:['Genesis', 'Matthew', 'Daniel', 'Hezekiah'],
},
{
	question: 'The disciple whom Jesus loved wrote what prophetic book?', 
	answer:['Micah', 'Hezekiah', 'Isaiah', 'Revelation'],
},
{
	question:'In Psalms 23 the Lord is described as what?', 
	answer:['Shepherd', 'Lamb', 'Lion', 'King'],
},
{
	question: 'What Gospel writer was formerly a tax collector?', 
	answer:['Luke', 'Phineas', 'Matthew', 'Paul'],
},
{
	question:'It was prophesied that Messiah would be born in what small town?', 
	answer:['Bethlehem', 'Jerusalem', 'Sidon', 'Detroit'],
},
{
	question:'What did God create on the seventh day?', 
	answer:['nothing', 'light', 'man', 'animals'],
},
{
	question:'Which apostle was sent to evangelize the Gentiles?', 
	answer:['Peter', 'Barnabas', 'Mark', 'Paul'],
},
{
	question: 'How many books did John write?',
	answer:['5', '4', '3', '1'],
},
{
	question:'Though I give my body or have faith to move mountains, if I do not have what, I am nothing?', 
	answer:['grace', 'money', 'gift of tongues', 'love'],
},
{
	question: 'What is the location where the Last Supper took place?', 
	answer:['upper room', 'Mt. of Olives', 'Sidon', 'Temple'],
},
{
	question:'Who wrote the letter to the Hebrews', 
	answer:['no one knows', 'Paul', 'Peter', 'Barnabas'],
},
{
	question: 'Jesus delegated the care of his mother to this disciple when He was dying?', 
	answer:['Paul', 'John', 'Peter', 'Timothy'],
},
{
	question:'Who fought the battle of Jericho?', 
	answer:['Moses', 'Jesus', 'Isaac', 'Joshua'],
},
{
	question: "Who was Abraham's nephew?", 
	answer:['Lot', 'Samuel', 'Isaiah', 'Ishmael'],
},
{
	question: "Which of the following is not in the Pentateuch?", 
	answer:['Joshua', 'Genesis', 'Deuteronomy', 'Leviticus'],
},
{
	question: "This Old Testament book was named after a woman who's uncle's name is Mordecai?", 
	answer:['Esther', 'Ruth', 'Oprah', 'Sarah'],
},
{
	question:'What is one prophesy book that is to a nation other than Israel?', 
	answer:['Nahum', 'Jonah', 'Malachi', 'Isaiah'],
},
{
	question:"This man's wife told him to curse God and die?", 
	answer:['Abraham', 'Moses', 'David', 'Job'],
},
{
	question:'This book of wisdom is written from a father to a son?', 
	answer:['Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon'],
},
{
	question: 'According to this book, all is vanity?',
	answer:['Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon']
}

];


	var questionAnswerDiv = $('#mainSection');

for (var i = 0; i < questionAnswerArray.length; i++){
	var newQuestionDiv = $('<div>' + questionAnswerArray[i].question + '</div>');
	var newAnswerDiv = $('<form>' + '<input type = "radio" name = "radAnswer">' + questionAnswerArray[i].answer[0] + '</input>' + '<input type = "radio" name = "radAnswer">' + questionAnswerArray[i].answer[1] + '</input>' + '<input type = "radio" name = "radAnswer">' + questionAnswerArray[i].answer[2] + '</input>' + '<input type = "radio" name = "radAnswer">' + questionAnswerArray[i].answer[3] + '</input>' + '</form>');

	newQuestionDiv.addClass('bg-primary text-white');
	newQuestionDiv.attr('id', 'style');

	newAnswerDiv.attr('id', 'styling')
	
	questionAnswerDiv.append(newQuestionDiv);
	newQuestionDiv.append(newAnswerDiv);
}

});	
});
