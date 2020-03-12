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

<strong>
Users can't decrease the item count if it is equal to the 0. <br>
Users can't add an item if there is no name.<br>
Users can't add negative price value or no price value.<br>
Users can't add 0 to the price as a first digit.<br>
If there is no item, I show a warning instead of an empty table; I don't show the total price. <br>
Users can see the item name when they add to the list or delete it from the list on the alert.<br>
I applied  'toFixed(2)' method to the total price. Users don't see large numbers after the dot.
</strong>
&nbsp;

<hr>

<h2>CSS</h2>
<strong> I used Grid CSS in this project. It was easy to make the app responsive. </strong>
&nbsp;
![ConditionalGrid](https://user-images.githubusercontent.com/57728302/76482170-c7de8400-63e9-11ea-9434-50a9bce8861b.png)
&nbsp;
<hr>
<strong>I animated counter digit conditionaly. Users see different animations when they increase or decrease the item count.</strong>
&nbsp;
![countUpandDownFunc](https://user-images.githubusercontent.com/57728302/76482085-906fd780-63e9-11ea-9311-268517943b2d.png)
![countUpandDownAnimation](https://user-images.githubusercontent.com/57728302/76482087-91a10480-63e9-11ea-9c1e-3722c63fe221.png)
&nbsp;
<hr>
<strong> I used the React Transition Group to animate the item when I add or delete it </strong>
&nbsp;
![AnimateListItems](https://user-images.githubusercontent.com/57728302/76482302-26a3fd80-63ea-11ea-98ab-31d0d30bc011.png)
&nbsp;

<hr>

<h3>Netlify Link: https://festive-hodgkin-a75a63.netlify.com</h3>
<h4><strong>Used technologies: </strong> React JS (React Hooks, Styled Components, React Transition Group, Uuid),  HTML, CSS.  </h4>




