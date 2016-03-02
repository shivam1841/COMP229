// SumNumbers.js

 function start()
        {
            var button = document.getElementById("addButton");
            button.addEventListener("click", displaySum, false); // added a event listener
        } // end function start
            
        function displaySum()
            {
            var inputField1 = document.getElementById("numField1");
            var num1 = parseFloat(inputField1.value);
            var inputField2 = document.getElementById("numField2");
            var num2 = parseFloat(inputField2.value);
            var result = document.getElementById("result");
            result.innerHTML = "Sum of two numbers is: " + calculateSum(num1, num2);
        } // end display volume

        function calculateSum(num1, num2)
        {
            return num1 + num2;
        } // end function sphereVolume

        window.addEventListener("load", start, false);
