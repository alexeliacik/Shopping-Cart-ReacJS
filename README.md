<h1 style='text-align:center;'> Shopping Cart - ReactJS </h1>

<strong> In this project, I used the most updated React Js futures with Styled Components; I used React Transition Group to animate when to mount or unmount something from DOM. The project has a responsive design for all devices with the most updated CSS features. </strong>

&nbsp;

![Main](https://user-images.githubusercontent.com/57728302/76480531-57356880-63e5-11ea-8ea1-3ecaf19dec96.gif)

<hr>

<strong> In this project, I have eight states that control name, price etc. Also, I needed to set a timer for hiding the snackbar that fires alert to show pieces of information to the user after five seconds. But I had a problem if I want to fire another alert in five seconds. That's why I used useEffect Hook; set the timer when the component mount, clean the timer when the component unmount.</strong>

&nbsp;
![StatesUseEffect](https://user-images.githubusercontent.com/57728302/76480568-7207dd00-63e5-11ea-9fef-a276e7d2e8a1.png)

&nbsp;

<hr>


<strong> I set the name and the price with the 'onChange' event. There was a problem with the 'priceValue' if user types '0' as a first number. I prevent it with the help of 'slice()' method if the first number of price equal to the '0'. </strong>

&nbsp;
![priceAndNameChange](https://user-images.githubusercontent.com/57728302/76480641-b72c0f00-63e5-11ea-8352-f81380bcf6d5.png)

&nbsp;

<hr>

<strong>After handling values, I save the item when the user click the 'ADD' button. I prevented submitting and showed the snackbar alert if values are not valid. If values are valid, I created a new object and added it to my 'item' array for mapping through on it. I calculated the total price, reset name, price and count values and showed user a message with the alert.</strong>

&nbsp;
![SaveItem](https://user-images.githubusercontent.com/57728302/76480699-e6428080-63e5-11ea-89cf-6342c17474fb.png)

&nbsp;

<hr>

<strong>When the user clicks the 'X' button that stays right of each item, they can delete the item from the list. I did it with the filter method. After removing the item, I calculated the total price again and showed the user another alert. </strong>

&nbsp;
![DeleteItemCoditionalMessage](https://user-images.githubusercontent.com/57728302/76481080-f27b0d80-63e6-11ea-931d-3e616b5790e2.png)

&nbsp;

<hr>

<strong> I calculated the total price with the map function. I multiply price with count for each item and add to the 'total' variable.</strong>

&nbsp;
![TotalPriceHandler](https://user-images.githubusercontent.com/57728302/76481376-b1372d80-63e7-11ea-8919-277c56fe5edc.png)

&nbsp;

<hr>

<h2> For Beter User Experience </h2>

&nbsp;

<strong>
If the user doesn't fill the name input area, app fires alert. </br>
If the user doesn't select the category or the difficulty level, the app brings random questions for the unselected section. </br> 
After the user fill up the input name area app doesn't ask username until the user clicks the rename icon.</br>
The Previous button for the first question, the Next button for the last question, lifeline chance buttons if the user doesn't have any unclickable.</br>
If only one answer remains after the user has used the lifeline chances, the application directly selects that answer and prevents using the 'Select Correct Answer' lifeline.</br>
If less than 10 seconds remaining for the quiz, remaining time and it's line change the color, remaining time increases fint-size.</br>
User can see quiz summary at the and of the quiz with selected and correct answers.
</strong>
&nbsp;

<hr>

<h2>CSS</h2>

<strong> For UI design I used 'font-size: 62.5%' technic. Because it is effortless to use and make your design responsive. Now see the picture below. </strong>

&nbsp;
![a5](https://user-images.githubusercontent.com/57728302/76172731-16ccb500-616f-11ea-9a4e-50e4eeebc723.png)

&nbsp;

<hr>

<strong> After I made 0 all margins and paddings for whole dom elements, including before and after elements, I sat the font size to %62.5 with the help of Styled Components createGlobalStyle. It means every one rem equal 10px now. Of course, I could use 10px instead of 1rem. But if you use for your whole parameters; when I start to make the website responsive for small screen devices, all I have to do just decrease the font size and now whole 1rems 8.5px instead of 10. I reached this result with just decreasing HTML font size. Font sizes, margins, paddings, height and widths and even box-shadows have rem value. With a small decrease of HTML font-size value, my website almost full responsive for I tablet except a couple of little things. See the gif below... </strong>

&nbsp;
![responsiveGif](https://user-images.githubusercontent.com/57728302/76023709-ac5e0f80-5ef7-11ea-8f93-ace5c5e87111.gif)

&nbsp;

<hr>

<strong> Curved header with adding the Header '::after' pseudo element. </strong>

&nbsp;
![after](https://user-images.githubusercontent.com/57728302/76023925-2db5a200-5ef8-11ea-8bd1-0ad4cc01f3f5.JPG)

&nbsp;

<hr>

<strong>With the power of the Styled Components, you can see how I animated when the user selects a category or difficulty. For conditional animation I used Styled Components 'css' helper. </strong>

&nbsp;
![a6](https://user-images.githubusercontent.com/57728302/76172732-16ccb500-616f-11ea-9688-aff1635529a1.png)
&nbsp;
![selectaniamtion](https://user-images.githubusercontent.com/57728302/76024307-d95ef200-5ef8-11ea-997a-bacc134a2e1b.gif)

&nbsp;

<hr>

<strong>As you can see, remained time connected with the pseudo-element of the header. It changes color and font size if the user has fewer than 10 seconds.</strong>

&nbsp;
![a7](https://user-images.githubusercontent.com/57728302/76172733-16ccb500-616f-11ea-8dac-96ce591a3c8c.png)
&nbsp;
![remined](https://user-images.githubusercontent.com/57728302/76024905-e29c8e80-5ef9-11ea-8a5f-69fcaff30690.gif)

&nbsp;

<hr>

<strong>I created this beautiful hover-select animation with the help of Styled Components again. I have different transition timings for different CSS properties. Also, with the 'cubic-bezier' property, I made animation more sweeter. </strong>

&nbsp;
![a8](https://user-images.githubusercontent.com/57728302/76172734-17654b80-616f-11ea-88d2-a9356e845823.png)
&nbsp;
![answerAnimation](https://user-images.githubusercontent.com/57728302/76025289-aa498000-5efa-11ea-99d9-bd6611e383ea.gif)

&nbsp;

<hr>

<strong>I made this animation with different animation properties and different animations timings. </strong>

&nbsp;
![a9](https://user-images.githubusercontent.com/57728302/76172735-17654b80-616f-11ea-9bdc-46d23604c064.png)
&nbsp;
![answerslide animation](https://user-images.githubusercontent.com/57728302/76025990-f648f480-5efb-11ea-82bc-a5183e1304ee.gif)

&nbsp;

<hr>

<strong>I accomplished this style and animation with the help of React Transition Group. I could animate while unmounting stats. Also, I showed the user correct and wrong answers with different color and background colors. If the user selects the answer and it is correct or if the user selects the answer and it is incorrect or if the user doesn't select an answer, style changes. With the nested Ternary Operator, I accomplished this result with just one line code. </strong>

&nbsp;
![a10](https://user-images.githubusercontent.com/57728302/76172736-17654b80-616f-11ea-96d2-67f81f52c5f2.png)
&nbsp;
![a11](https://user-images.githubusercontent.com/57728302/76172726-159b8800-616f-11ea-848d-888a51fa941f.png)

&nbsp;

<hr>

&nbsp;
![nested ternary gif](https://user-images.githubusercontent.com/57728302/76026551-001f2780-5efd-11ea-9671-81c1884775b7.gif)

&nbsp;

<hr>

<h3>Netlify Link: https://festive-hodgkin-a75a63.netlify.com</h3>
<h4><strong>Used technologies: </strong> React JS (React Hooks, Styled Components, React Transition Group, React Router), HTML, CSS.  </h4>




