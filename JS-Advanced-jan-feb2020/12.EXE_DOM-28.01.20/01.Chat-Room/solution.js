function solve() {
   let inputData = document.getElementById('chat_input');
   let sendButton = document.getElementById('send');
   let messageField = document.getElementById('chat_messages');
   sendButton.addEventListener('click', (e) => {
      //console.log('You were clicked on the button');
      //console.log(inputData.value);
      let newElement = document.createElement('div');
      newElement.innerHTML = inputData.value;
      newElement.classList.add('message', 'my-message');

      messageField.appendChild(newElement);
      inputData.value = '';
   });
   // CLICK event
   //console.log(sendButton);
   //console.log(messageField);
   /* document.addEventListener('click', (e) => {
      console.log(e, 'You were clicked everyware on the document');
   }); */
   /* let headerThree = document.getElementById('testForClickEvent');
   headerThree.addEventListener('click', (e) => {
      console.log('You were clicked on the h3');
   }); */
}
