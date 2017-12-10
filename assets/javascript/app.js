$(function(){
	console.log("ready");

var correctGuessed = 0;
var wrongGuessed = 0;

// var questionsAnswersBulletsArray = [
// //{
// 	question: 'What is the first book of the bible?', 
// 	//possibleAnswers: 'Genesis Matthew Daniel Hezekiah',
// // },
// // {
// 	question: 'The disciple whom Jesus loved wrote what prophetic book?', 
// 	//possibleAnswers: 'Micah Hezekiah Isaiah Revelation',
// // },
// // {
// 	question: 'In Psalms 23 the Lord is described as what?', 
// 	//possibleAnswers: 'Shepherd Lamb Lion King'
// //},
// // {
// // 	question: 'What is the first book of the bible?', 
// // 	possibleAnswers: 'Genesis Matthew Daniel Hezekiah',
// // },
// ]

var	questionAnswerArray = [{
	question: 'What is the first book of the bible?', 
	answer:['Genesis', 'Matthew', 'Daniel', 'Hezekiah'],
},
{
	question: 'The disciple whom Jesus loved wrote what prophetic book?', 
	answer:'Micah Hezekiah Isaiah Revelation',
},
{
	question:'In Psalms 23 the Lord is described as what?', 
	answer:'Shepherd Lamb Lion King',
},
{
	question: 'What Gospel writer was formerly a tax collector?', 
	answer:'Shepherd Lamb Lion King',
},
{
	question:'It was prophesied that Messiah would be born in what small town?', 
	answer:'Shepherd Lamb Lion King',
},
{
	question:'What did God create on the seventh day?', 
	answer:'Shepherd Lamb Lion King',
},
{
	question:'Which apostle was sent to evangelize the Gentiles?', 
	answer:'Shepherd Lamb Lion King',
}];

	// 'How many books did John write?',
	// 'Though I give my body or have faith to move mountains, if I do not have what, I am nothing?', 
	// 'What is the location where the Last Supper took place?', 
	// 'Jesus was an only child. True or False?', 
	// 'Jesus delegated the care of his mother to this disciple when He was dying?', 
	// 'Who fought the battle of Jericho?', 
	// "Who was Abraham's nephew?", 
	// "What are the name's of Noah's sons?", 
	// "This Old Testament book was named after a woman who's uncle's name is Mordecai?", 
	// 'What is a prophesy book that is to a nation other than Israel?', 
	// "This man's wife told him to curse God and die?", 
	// 'This book of wisdom is written from a father to a son?', 
	// 'According to this book, all is vanity?'
// 	]
// var possibleAnswerArray = [
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King',
// 	'Shepherd Lamb Lion King'
// 	];
	var questionAnswerDiv = $('#mainSection');

for (var i = 0; i < questionAnswerArray.length; i++){
	var newQuestionDiv = $('<div>' + questionAnswerArray[i].question + '</div>');
	var newAnswerDiv = $('<input type = "radio">' + questionAnswerArray[i].answer + '</input>');

	questionAnswerDiv.append(newQuestionDiv);
	newQuestionDiv.append(newAnswerDiv);
	newInput.append(newAnswerDiv);
}
	// for (var j = 0; j < answer.length; j++){
	//  	var newInput = $('<input type = "radio">' + questionAnswerArray.answer + '</input>');
	//  	newAnswerDiv.append(newInput);
	// }

	//newAnswerDiv.append(newInput);

	// for (var j = 0; j < questionAnswerArray.answer.length; j++){
	// 	var newInput = $('<input type = "radio">' + questionAnswerArray.answer + '</input>');
	// 	newAnswerDiv.append(newInput);
	// }

//}
//	Create Element to add to page
// var newElement = $('<div>');
// //Add some content to, and set some properties of,
// // the new element
// newElement.addClass('bg-info');
// newElement.html('<h1>This is a Header</h1>');
// //Attach the new element to an existing element on the page
// $('#mainSection').append(newElement);

// 	// Create Element to add to page

// // Add some content to, and set some properties of the new element
		
// 		//Attach the new element to an existing element on the page
		
// 		var x = $('input');
// 		x.html('<input type = "radio"></input>');
// 		$('#secondSection').append(x);
		
// for (var i = 0; i < questionArray.length; i++){
		
// 	var questionDiv = $('<div>');
// 	questionDiv.addClass('bg-info');
// 	$('#mainSection').append(questionDiv);
// 	questionDiv.html(questionArray[i]) ;
// 	var answerDiv = $('<div>');
// 	answerDiv.html(answerDiv[i]);
// };
});
